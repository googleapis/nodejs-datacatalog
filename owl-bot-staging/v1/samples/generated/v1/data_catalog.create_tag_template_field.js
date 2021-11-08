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

function main(parent, tagTemplateFieldId, tagTemplateField) {
  // [START datacatalog_v1_generated_DataCatalog_CreateTagTemplateField_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project and the template location
   *  [region](https://cloud.google.com/data-catalog/docs/concepts/regions).
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the tag template field to create.
   *  Note: Adding a required field to an existing template is *not* allowed.
   *  Field IDs can contain letters (both uppercase and lowercase), numbers
   *  (0-9), underscores (_) and dashes (-). Field IDs must be at least 1
   *  character long and at most 128 characters long. Field IDs must also be
   *  unique within their template.
   */
  // const tagTemplateFieldId = 'abc123'
  /**
   *  Required. The tag template field to create.
   */
  // const tagTemplateField = ''

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function createTagTemplateField() {
    // Construct request
    const request = {
      parent,
      tagTemplateFieldId,
      tagTemplateField,
    };

    // Run request
    const response = await datacatalogClient.createTagTemplateField(request);
    console.log(response);
  }

  createTagTemplateField();
  // [END datacatalog_v1_generated_DataCatalog_CreateTagTemplateField_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
