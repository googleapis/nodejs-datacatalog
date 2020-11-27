// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it, before} = require('mocha');
const uuid = require('uuid');
const cp = require('child_process');
const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;
const datacatalog = new DataCatalogClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const GCLOUD_TESTS_PREFIX = 'nodejs_samples';
const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${uuid.v4()}`.replace(/-/gi, '_');

describe('Samples', async () => {
  const TAG_TEMPLATE_ID = `${GCLOUD_TESTS_PREFIX}_test_tag_template`;
  const projectId = await datacatalog.getProjectId();
  const location = 'us-central1';

  before(async () => {
    // Delete stale resources from samples tests.
    await deleteEntryGroups();
  });

  it('should create a custom entry', async () => {
    const entryGroupId = generateUuid();
    const entryId = generateUuid();
    const output = execSync(
      `node createCustomEntry ${projectId} ${entryGroupId} ${entryId} ${TAG_TEMPLATE_ID}`
    );
    assert.include(output, 'Created entry group:');
    assert.include(output, 'Created entry:');
    assert.include(output, 'Created template:');
    assert.include(output, 'Created tag:');
  });

  it('should create a fileset', async () => {
    const entryGroupId = generateUuid();
    const entryId = generateUuid();
    const output = execSync(
      `node createFileset ${projectId} ${entryGroupId} ${entryId}`
    );
    assert.include(output, `/entryGroups/${entryGroupId}/entries/${entryId}`);
    assert.include(output, 'Display name:');
    assert.include(output, 'Type: FILESET');
  });

  it('should grant tagTemplateUser role', async () => {
    const resourceName = `${datacatalog.locationPath(
      projectId,
      location
    )}/tagTemplates/${TAG_TEMPLATE_ID}`;
    const [policy] = await datacatalog.getIamPolicy({resource: resourceName});
    const memberId = policy.bindings[0].members[0];

    const output = execSync(
      `node grantTagTemplateUserRole ${projectId} ${TAG_TEMPLATE_ID} ${memberId}`
    );
    assert.include(output, 'roles/datacatalog.tagTemplateUser');
    assert.include(output, memberId);
  });

  it('should search data assets in project', async () => {
    const output = execSync(`node searchAssets ${projectId}`);
    assert.match(output, /Found [0-9]+ datasets in project/);
  });

  // Only delete a resource if it is older than 24 hours. That will prevent
  // collisions with parallel CI test runs.
  function isResourceStale(creationTime) {
    const oneDayMs = 86400000;
    const now = new Date();
    const created = new Date(creationTime * 1000);
    return now.getTime() - created.getTime() >= oneDayMs;
  }

  async function deleteEntries(entryGroupId) {
    const [entries] = await datacatalog.listEntries({parent: entryGroupId});
    for (const entry of entries) {
      try {
        await datacatalog.deleteEntry({name: entry.name});
      } catch (e) {
        console.log(`entry (${entry.name}).delete() failed`);
        console.log(e);
      }
    }
  }

  async function deleteEntryGroups() {
    const listEntryGroupsRequest = {
      parent: datacatalog.locationPath(projectId, location),
    };

    const [entryGroups] = await datacatalog.listEntryGroups(
      listEntryGroupsRequest
    );

    const groups = entryGroups.filter(group => {
      return group.name.includes(GCLOUD_TESTS_PREFIX);
    });

    for (const group of groups) {
      const creationTime = Number(
        group.dataCatalogTimestamps.createTime.seconds
      );
      if (isResourceStale(creationTime)) {
        try {
          await deleteEntries(group.name);
          await datacatalog.deleteEntryGroup({name: group.name});
        } catch (e) {
          console.log(`entry group (${group.name}).delete() failed`);
          console.log(e);
        }
      }
    }
  }
});
