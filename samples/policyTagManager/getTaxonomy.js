// Copyright 2022 Google LLC
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

function main(taxonomyName) {
  // [START data_catalog_ptm_get_taxonomy]
  // Import the Google Cloud client library.
  const {PolicyTagManagerClient} = require('@google-cloud/datacatalog').v1;
  const policyTagManager = new PolicyTagManagerClient();

  async function getTaxonomy() {
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const taxonomyName = 'my display name'; // Existing taxonomy.

    const request = {
      name: taxonomyName,
    };

    try {
      const [taxonomy] = await policyTagManager.getTaxonomy(request);
      console.log(`Retrieved taxonomy: ${taxonomy.name}`);
    } catch (e) {
      console.error(e);
    }
  }
  // [END data_catalog_ptm_get_taxonomy]
  getTaxonomy();
}
main(...process.argv.slice(2));
