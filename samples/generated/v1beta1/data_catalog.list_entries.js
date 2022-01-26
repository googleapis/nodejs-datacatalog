// Copyright 2021 Google LLC
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

function main(parent) {
  // [START datacatalog_v1beta1_generated_DataCatalog_ListEntries_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the entry group that contains the entries, which can
   *  be provided in URL format. Example:
   *  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of items to return. Default is 10. Max limit is 1000.
   *  Throws an invalid argument for `page_size > 1000`.
   */
  // const pageSize = 1234
  /**
   *  Token that specifies which page is requested. If empty, the first page is
   *  returned.
   */
  // const pageToken = 'abc123'
  /**
   *  The fields to return for each Entry. If not set or empty, all
   *  fields are returned.
   *  For example, setting read_mask to contain only one path "name" will cause
   *  ListEntries to return a list of Entries with only "name" field.
   */
  // const readMask = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callListEntries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datacatalogClient.listEntriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEntries();
  // [END datacatalog_v1beta1_generated_DataCatalog_ListEntries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
