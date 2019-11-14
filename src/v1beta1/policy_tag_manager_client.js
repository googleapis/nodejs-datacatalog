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

'use strict';

const gapicConfig = require('./policy_tag_manager_client_config.json');
const gax = require('google-gax');
const path = require('path');

const VERSION = require('../../package.json').version;

/**
 * Policy tag manager API service allows clients to manage their taxonomies and
 * policy tags data.
 *
 * @class
 * @memberof v1beta1
 */
class PolicyTagManagerClient {
  /**
   * Construct an instance of PolicyTagManagerClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */
  constructor(opts) {
    opts = opts || {};
    this._descriptors = {};

    if (global.isBrowser) {
      // If we're in browser, we use gRPC fallback.
      opts.fallback = true;
    }

    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !global.isBrowser && opts.fallback ? gax.fallback : gax;

    const servicePath =
      opts.servicePath || opts.apiEndpoint || this.constructor.servicePath;

    // Ensure that options include the service address and port.
    opts = Object.assign(
      {
        clientConfig: {},
        port: this.constructor.port,
        servicePath,
      },
      opts
    );

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = this.constructor.scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth;

    // Determine the client header string.
    const clientHeader = [];

    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    }
    clientHeader.push(`gax/${gaxModule.version}`);
    if (opts.fallback) {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    } else {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    clientHeader.push(`gapic/${VERSION}`);
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }

    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'protos.json'
    );
    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/protos.json') : nodejsProtoPath
    );

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.datacatalog.v1beta1.PolicyTagManager',
      gapicConfig,
      opts.clientConfig,
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.datacatalog.v1beta1.PolicyTagManager.
    const policyTagManagerStub = gaxGrpc.createStub(
      opts.fallback
        ? protos.lookupService(
            'google.cloud.datacatalog.v1beta1.PolicyTagManager'
          )
        : protos.google.cloud.datacatalog.v1beta1.PolicyTagManager,
      opts
    );

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const policyTagManagerStubMethods = [
      'createTaxonomy',
      'deleteTaxonomy',
      'updateTaxonomy',
      'listTaxonomies',
      'getTaxonomy',
      'createPolicyTag',
      'deletePolicyTag',
      'updatePolicyTag',
      'listPolicyTags',
      'getPolicyTag',
      'getIamPolicy',
      'setIamPolicy',
      'testIamPermissions',
    ];
    for (const methodName of policyTagManagerStubMethods) {
      const innerCallPromise = policyTagManagerStub.then(
        stub => (...args) => {
          return stub[methodName].apply(stub, args);
        },
        err => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        null
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'datacatalog.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'datacatalog.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback) {
    return this.auth.getProjectId(callback);
  }

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Creates a new taxonomy in a given project.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   Required. Resource name of the project that the newly created taxonomy
   *   belongs to.
   * @param {Object} [request.taxonomy]
   *   The taxonomy to be created. The name field must be left blank. The
   *   display_name field is mandatory.
   *
   *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.createTaxonomy({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTaxonomy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createTaxonomy(request, options, callback);
  }

  /**
   * Deletes a taxonomy. This operation will also delete all
   * policy tags in this taxonomy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Required. Resource name of the taxonomy to be deleted. All policy tags in
   *   this taxonomy will also be deleted.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.deleteTaxonomy({}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTaxonomy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deleteTaxonomy(request, options, callback);
  }

  /**
   * Updates a taxonomy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} [request.taxonomy]
   *   The taxonomy to update. Only description, display_name, and activated
   *   policy types can be updated.
   *
   *   This object should have the same structure as [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}
   * @param {Object} [request.updateMask]
   *   The update mask applies to the resource. For the `FieldMask` definition,
   *   see
   *   https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   *   If not set, defaults to all of the fields that are allowed to update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.updateTaxonomy({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateTaxonomy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'taxonomy.name': request.taxonomy.name,
    });

    return this._innerApiCalls.updateTaxonomy(request, options, callback);
  }

  /**
   * Lists all taxonomies in a project in a particular location.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   Required. Resource name of a project to list the taxonomies of.
   * @param {number} [request.pageSize]
   *   The maximum number of items to return. If not set, defaults to 50.
   * @param {string} [request.pageToken]
   *   The next_page_token value returned from a previous list request, if any. If
   *   not set, defaults to an empty string.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListTaxonomiesResponse]{@link google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListTaxonomiesResponse]{@link google.cloud.datacatalog.v1beta1.ListTaxonomiesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listTaxonomies({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTaxonomies(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listTaxonomies(request, options, callback);
  }

  /**
   * Gets a taxonomy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Required. Resource name of the taxonomy to be returned.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Taxonomy]{@link google.cloud.datacatalog.v1beta1.Taxonomy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.getTaxonomy({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTaxonomy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getTaxonomy(request, options, callback);
  }

  /**
   * Creates a policy tag in a taxonomy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   Required. Resource name of the taxonomy that the newly created policy tag
   *   belongs to.
   * @param {Object} [request.policyTag]
   *   The policy tag to be created. The name, and taxonomy_display_name field
   *   must be left blank. The display_name field is mandatory and must not be
   *   duplicated with existing policy tags in the same taxonomy.
   *
   *   This object should have the same structure as [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.createPolicyTag({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createPolicyTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.createPolicyTag(request, options, callback);
  }

  /**
   * Deletes a policy tag. Also deletes all of its descendant policy tags.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Required. Resource name of the policy tag to be deleted. All its descendant
   *   policy tags will also be deleted.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error)} [callback]
   *   The function which will be called with the result of the API call.
   * @returns {Promise} - The promise which resolves when API call finishes.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.deletePolicyTag({}).catch(err => {
   *   console.error(err);
   * });
   */
  deletePolicyTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.deletePolicyTag(request, options, callback);
  }

  /**
   * Updates a policy tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {Object} [request.policyTag]
   *   The policy tag to update. Only the description, display_name, and
   *   parent_policy_tag fields can be updated.
   *
   *   This object should have the same structure as [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}
   * @param {Object} [request.updateMask]
   *   The update mask applies to the resource. Only display_name, description and
   *   parent_policy_tag can be updated and thus can be listed in the mask. If
   *   update_mask is not provided, all allowed fields (i.e. display_name,
   *   description and parent) will be updated. For more information including the
   *   `FieldMask` definition, see
   *   https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   *   If not set, defaults to all of the fields that are allowed to update.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.updatePolicyTag({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updatePolicyTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'policy_tag.name': request.policyTag.name,
    });

    return this._innerApiCalls.updatePolicyTag(request, options, callback);
  }

  /**
   * Lists all policy tags in a taxonomy.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.parent]
   *   Required. Resource name of a taxonomy to list the policy tags of.
   * @param {number} [request.pageSize]
   *   The maximum number of items to return. If not set, defaults to 50.
   * @param {string} [request.pageToken]
   *   The next_page_token value returned from a previous List request, if any. If
   *   not set, defaults to an empty string.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [ListPolicyTagsResponse]{@link google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ListPolicyTagsResponse]{@link google.cloud.datacatalog.v1beta1.ListPolicyTagsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.listPolicyTags({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listPolicyTags(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent,
    });

    return this._innerApiCalls.listPolicyTags(request, options, callback);
  }

  /**
   * Gets a policy tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.name]
   *   Required. Resource name of the policy tag to be returned.
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [PolicyTag]{@link google.cloud.datacatalog.v1beta1.PolicyTag}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.getPolicyTag({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getPolicyTag(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      name: request.name,
    });

    return this._innerApiCalls.getPolicyTag(request, options, callback);
  }

  /**
   * Gets the IAM policy for a taxonomy or a policy tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.resource]
   *   REQUIRED: The resource for which the policy is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {Object} [request.options]
   *   OPTIONAL: A `GetPolicyOptions` object for specifying options to
   *   `GetIamPolicy`. This field is only used by Cloud IAM.
   *
   *   This object should have the same structure as [GetPolicyOptions]{@link google.iam.v1.GetPolicyOptions}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.getIamPolicy({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }

  /**
   * Sets the IAM policy for a taxonomy or a policy tag.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.resource]
   *   REQUIRED: The resource for which the policy is being specified.
   *   See the operation documentation for the appropriate value for this field.
   * @param {Object} [request.policy]
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   *
   *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.setIamPolicy({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setIamPolicy(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }

  /**
   * Returns permissions that a caller has on specified resources.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} [request.resource]
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   See the operation documentation for the appropriate value for this field.
   * @param {string[]} [request.permissions]
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param {Object} [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html} for the details.
   * @param {function(?Error, ?Object)} [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * const datacatalog = require('@google-cloud/datacatalog');
   *
   * const client = new datacatalog.v1beta1.PolicyTagManagerClient({
   *   // optional auth parameters.
   * });
   *
   *
   * client.testIamPermissions({})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  testIamPermissions(request, options, callback) {
    if (options instanceof Function && callback === undefined) {
      callback = options;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }
}

module.exports = PolicyTagManagerClient;
