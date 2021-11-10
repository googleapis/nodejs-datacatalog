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

function main(parent, taxonomies) {
  // [START datacatalog_v1_generated_PolicyTagManagerSerialization_ExportTaxonomies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the project that the exported taxonomies belong to.
   */
  // const parent = 'abc123'
  /**
   *  Required. Resource names of the taxonomies to export.
   */
  // const taxonomies = 'abc123'
  /**
   *  Serialized export taxonomies that contain all the policy
   *  tags as nested protocol buffers.
   */
  // const serializedTaxonomies = true

  // Imports the Datacatalog library
  const {PolicyTagManagerSerializationClient} =
    require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new PolicyTagManagerSerializationClient();

  async function callExportTaxonomies() {
    // Construct request
    const request = {
      parent,
      taxonomies,
    };

    // Run request
    const response = await datacatalogClient.exportTaxonomies(request);
    console.log(response);
  }

  callExportTaxonomies();
  // [END datacatalog_v1_generated_PolicyTagManagerSerialization_ExportTaxonomies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
