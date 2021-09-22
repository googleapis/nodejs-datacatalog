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

function main(entryGroup) {
  // [START datacatalog_update_entry_group_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated entry group. "name" field must be set.
   */
  // const entryGroup = ''
  /**
   *  The fields to update on the entry group. If absent or empty, all modifiable
   *  fields are updated.
   */
  // const updateMask = ''

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function updateEntryGroup() {
    // Construct request
    const request = {
      entryGroup,
    };

    // Run request
    const response = await datacatalogClient.updateEntryGroup(request);
    console.log(response);
  }

  updateEntryGroup();
  // [END datacatalog_update_entry_group_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
