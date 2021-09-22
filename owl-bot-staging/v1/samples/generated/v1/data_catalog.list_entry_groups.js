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
  // [START datacatalog_list_entry_groups_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the location that contains the entry groups to list.
   *  Can be provided as a URL.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return.
   *  Default is 10. Maximum limit is 1000.
   *  Throws an invalid argument if `page_size` is greater than 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token that specifies the next page to return.
   *  If empty, returns the first page.
   */
  // const pageToken = 'abc123'

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function listEntryGroups() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await datacatalogClient.listEntryGroupsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listEntryGroups();
  // [END datacatalog_list_entry_groups_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
