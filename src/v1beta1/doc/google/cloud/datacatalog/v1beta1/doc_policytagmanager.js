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
 * A taxonomy is a collection of policy tags of business significance, typically
 * associated with the substance of the policy tag (e.g. credit card, SSN), or
 * how it is used (e.g. account name, user ID).
 *
 * @property {string} name
 *   Output only. Resource name of the taxonomy, whose format is:
 *   "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
 *
 * @property {string} displayName
 *   Required. Human readable name of this taxonomy. Max 200 bytes when encoded
 *   in UTF-8.
 *
 * @property {string} description
 *   Optional. Description of the taxonomy. The length of the description is
 *   limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an
 *   empty description.
 *
 * @property {number[]} activatedPolicyTypes
 *   Optional. A list of policy types that are activated for the taxonomy. If
 *   not set, defaults to an empty list of activated policy types.
 *
 *   The number should be among the values of [PolicyType]{@link google.cloud.datacatalog.v1beta1.PolicyType}
 *
 * @typedef Taxonomy
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.Taxonomy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const Taxonomy = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Defines policy types where policy tag can be used for.
   *
   * @enum {number}
   * @memberof google.cloud.datacatalog.v1beta1
   */
  PolicyType: {

    /**
     * Unspecified policy type.
     */
    POLICY_TYPE_UNSPECIFIED: 0,

    /**
     * Fine grained access control policy, which enables access control on
     * tagged resources.
     */
    FINE_GRAINED_ACCESS_CONTROL: 1
  }
};

/**
 * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined
 * in a hierarchy. For example, consider the following hierachy:
 *               Geolocation
 *                    |
 *   ------------------------------------
 *   |                |                 |
 * LatLong          City              ZipCode
 * PolicyTag "Geolocation" contains three child policy tags: "LatLong",
 * "City", and "ZipCode".
 *
 * @property {string} name
 *   Output only. Resource name of the policy tag, whose format is:
 *   "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
 *
 * @property {string} displayName
 *   Required. Human readable name of this policy tag. Max 200 bytes when
 *   encoded in UTF-8.
 *
 * @property {string} description
 *   Description of the policy tag. The length of the description is limited to
 *   2000 bytes when encoded in UTF-8. If not set, defaults to an empty
 *   description.
 *
 * @property {string} parentPolicyTag
 *   Resource name of the parent policy tag to this policy tag (e.g. for policy
 *   tag "LatLong" in the example above, this field contains the resource name
 *   of policy tag "Geolocation"). If empty, it means this policy tag is a top
 *   level policy tag (e.g. this field is empty for policy tag "Geolocation" in
 *   the example above). If not set, defaults to an empty string.
 *
 * @property {string[]} childPolicyTags
 *   Output only. Resource names of child policy tags of this policy tag.
 *
 * @typedef PolicyTag
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.PolicyTag definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const PolicyTag = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreateTaxonomy.
 *
 * @property {string} parent
 *   Required. Resource name of the project that the newly created taxonomy
 *   belongs to.
 *
 * @property {Object} taxonomy
 *   The taxonomy to be created. The name field must be left blank. The
 *   display_name field is mandatory.
 *
 *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
 *
 * @typedef CreateTaxonomyRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.CreateTaxonomyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const CreateTaxonomyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * DeleteTaxonomy.
 *
 * @property {string} name
 *   Required. Resource name of the taxonomy to be deleted. All policy tags in
 *   this taxonomy will also be deleted.
 *
 * @typedef DeleteTaxonomyRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.DeleteTaxonomyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const DeleteTaxonomyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateTaxonomy.
 *
 * @property {Object} taxonomy
 *   The taxonomy to update. Only description, display_name, and activated
 *   policy types can be updated.
 *
 *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
 *
 * @property {Object} updateMask
 *   The update mask applies to the resource. For the `FieldMask` definition,
 *   see
 *   https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
 *   If not set, defaults to all of the fields that are allowed to update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTaxonomyRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdateTaxonomyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const UpdateTaxonomyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ListTaxonomies.
 *
 * @property {string} parent
 *   Required. Resource name of a project to list the taxonomies of.
 *
 * @property {number} pageSize
 *   The maximum number of items to return. If not set, defaults to 50.
 *
 * @property {string} pageToken
 *   The next_page_token value returned from a previous list request, if any. If
 *   not set, defaults to an empty string.
 *
 * @typedef ListTaxonomiesRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListTaxonomiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const ListTaxonomiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * ListTaxonomies.
 *
 * @property {Object[]} taxonomies
 *   Taxonomies that the project contains.
 *
 *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListTaxonomiesResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const ListTaxonomiesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * GetTaxonomy.
 *
 * @property {string} name
 *   Required. Resource name of the taxonomy to be returned.
 *
 * @typedef GetTaxonomyRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.GetTaxonomyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const GetTaxonomyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreatePolicyTag.
 *
 * @property {string} parent
 *   Required. Resource name of the taxonomy that the newly created policy tag
 *   belongs to.
 *
 * @property {Object} policyTag
 *   The policy tag to be created. The name, and taxonomy_display_name field
 *   must be left blank. The display_name field is mandatory and must not be
 *   duplicated with existing policy tags in the same taxonomy.
 *
 *   This object should have the same structure as [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}
 *
 * @typedef CreatePolicyTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.CreatePolicyTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const CreatePolicyTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * DeletePolicyTag.
 *
 * @property {string} name
 *   Required. Resource name of the policy tag to be deleted. All its descendant
 *   policy tags will also be deleted.
 *
 * @typedef DeletePolicyTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.DeletePolicyTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const DeletePolicyTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdatePolicyTag.
 *
 * @property {Object} policyTag
 *   The policy tag to update. Only the description, display_name, and
 *   parent_policy_tag fields can be updated.
 *
 *   This object should have the same structure as [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}
 *
 * @property {Object} updateMask
 *   The update mask applies to the resource. Only display_name, description and
 *   parent_policy_tag can be updated and thus can be listed in the mask. If
 *   update_mask is not provided, all allowed fields (i.e. display_name,
 *   description and parent) will be updated. For more information including the
 *   `FieldMask` definition, see
 *   https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
 *   If not set, defaults to all of the fields that are allowed to update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdatePolicyTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdatePolicyTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const UpdatePolicyTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ListPolicyTags.
 *
 * @property {string} parent
 *   Required. Resource name of a taxonomy to list the policy tags of.
 *
 * @property {number} pageSize
 *   The maximum number of items to return. If not set, defaults to 50.
 *
 * @property {string} pageToken
 *   The next_page_token value returned from a previous List request, if any. If
 *   not set, defaults to an empty string.
 *
 * @typedef ListPolicyTagsRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListPolicyTagsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const ListPolicyTagsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * ListPolicyTags.
 *
 * @property {Object[]} policyTags
 *   Policy Tags that are in this taxonomy.
 *
 *   This object should have the same structure as [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListPolicyTagsResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const ListPolicyTagsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * GetPolicyTag.
 *
 * @property {string} name
 *   Required. Resource name of the policy tag to be returned.
 *
 * @typedef GetPolicyTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.GetPolicyTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/policytagmanager.proto}
 */
const GetPolicyTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};