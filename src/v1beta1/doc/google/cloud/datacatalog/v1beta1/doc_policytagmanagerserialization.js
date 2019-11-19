// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Message capturing a taxonomy and its policy tag hierarchy as a nested proto.
 * Used for taxonomy import/export and mutation.
 *
 * @property {string} displayName
 *   Required. Display name of the taxonomy. Max 200 bytes when encoded in
 *   UTF-8.
 *
 * @property {string} description
 *   Description of the serialized taxonomy. The length of the
 *   description is limited to 2000 bytes when encoded in UTF-8. If not set,
 *   defaults to an empty description.
 *
 * @property {Object[]} policyTags
 *   Top level policy tags associated with the taxonomy if any.
 *
 *   This object should have the same structure as [SerializedPolicyTag]{@link google.cloud.datacatalog.v1beta1.SerializedPolicyTag}
 *
 * @typedef SerializedTaxonomy
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.SerializedTaxonomy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const SerializedTaxonomy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message representing one policy tag when exported as a nested proto.
 *
 * @property {string} displayName
 *   Required. Display name of the policy tag. Max 200 bytes when encoded in
 *   UTF-8.
 *
 * @property {string} description
 *   Description of the serialized policy tag. The length of the
 *   description is limited to 2000 bytes when encoded in UTF-8. If not set,
 *   defaults to an empty description.
 *
 * @property {Object[]} childPolicyTags
 *   Children of the policy tag if any.
 *
 *   This object should have the same structure as [SerializedPolicyTag]{@link google.cloud.datacatalog.v1beta1.SerializedPolicyTag}
 *
 * @typedef SerializedPolicyTag
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.SerializedPolicyTag definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const SerializedPolicyTag = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ImportTaxonomies.
 *
 * @property {string} parent
 *   Required. Resource name of project that the newly created taxonomies will
 *   belong to.
 *
 * @property {Object} inlineSource
 *   Inline source used for taxonomies import
 *
 *   This object should have the same structure as [InlineSource]{@link google.cloud.datacatalog.v1beta1.InlineSource}
 *
 * @typedef ImportTaxonomiesRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ImportTaxonomiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const ImportTaxonomiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Inline source used for taxonomies import.
 *
 * @property {Object[]} taxonomies
 *   Required. Taxonomies to be imported.
 *
 *   This object should have the same structure as [SerializedTaxonomy]{@link google.cloud.datacatalog.v1beta1.SerializedTaxonomy}
 *
 * @typedef InlineSource
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.InlineSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const InlineSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * ImportTaxonomies.
 *
 * @property {Object[]} taxonomies
 *   Taxonomies that were imported.
 *
 *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
 *
 * @typedef ImportTaxonomiesResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const ImportTaxonomiesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ExportTaxonomies.
 *
 * @property {string} parent
 *   Required. Resource name of the project that taxonomies to be exported
 *   will share.
 *
 * @property {string[]} taxonomies
 *   Required. Resource names of the taxonomies to be exported.
 *
 * @property {boolean} serializedTaxonomies
 *   Export taxonomies as serialized taxonomies.
 *
 * @typedef ExportTaxonomiesRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ExportTaxonomiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const ExportTaxonomiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * ExportTaxonomies.
 *
 * @property {Object[]} taxonomies
 *   List of taxonomies and policy tags in a tree structure.
 *
 *   This object should have the same structure as [SerializedTaxonomy]{@link google.cloud.datacatalog.v1beta1.SerializedTaxonomy}
 *
 * @typedef ExportTaxonomiesResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanagerserialization.proto}
 */
const ExportTaxonomiesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};