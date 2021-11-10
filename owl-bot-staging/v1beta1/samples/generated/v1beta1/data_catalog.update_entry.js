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

function main(entry) {
  // [START datacatalog_v1beta1_generated_DataCatalog_UpdateEntry_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The updated entry. The "name" field must be set.
   */
  // const entry = {}
  /**
   *  The fields to update on the entry. If absent or empty, all modifiable
   *  fields are updated.
   *  The following fields are modifiable:
   *  * For entries with type `DATA_STREAM`:
   *     * `schema`
   *  * For entries with type `FILESET`
   *     * `schema`
   *     * `display_name`
   *     * `description`
   *     * `gcs_fileset_spec`
   *     * `gcs_fileset_spec.file_patterns`
   *  * For entries with `user_specified_type`
   *     * `schema`
   *     * `display_name`
   *     * `description`
   *     * user_specified_type
   *     * user_specified_system
   *     * linked_resource
   *     * source_system_timestamps
   */
  // const updateMask = {}

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callUpdateEntry() {
    // Construct request
    const request = {
      entry,
    };

    // Run request
    const response = await datacatalogClient.updateEntry(request);
    console.log(response);
  }

  callUpdateEntry();
  // [END datacatalog_v1beta1_generated_DataCatalog_UpdateEntry_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
