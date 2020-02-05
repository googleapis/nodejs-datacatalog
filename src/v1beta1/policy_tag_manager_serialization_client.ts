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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as gax from 'google-gax';
import {
  APICallback,
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
} from 'google-gax';
import * as path from 'path';

import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './policy_tag_manager_serialization_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Policy tag manager serialization API service allows clients to manipulate
 *  their taxonomies and policy tags data with serialized format.
 * @class
 * @memberof v1beta1
 */
export class PolicyTagManagerSerializationClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _pathTemplates: {[name: string]: gax.PathTemplate};
  private _terminated = false;
  auth: gax.GoogleAuth;
  policyTagManagerSerializationStub: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of PolicyTagManagerSerializationClient.
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

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this
      .constructor as typeof PolicyTagManagerSerializationClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this
      .constructor as typeof PolicyTagManagerSerializationClient).scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth as gax.GoogleAuth;

    // Determine the client header string.
    const clientHeader = [`gax/${gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
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

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      taxonomyPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/taxonomies/{taxonomy}'
      ),
      policyTagPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/taxonomies/{taxonomy}/policyTags/{policy_tag}'
      ),
      tagPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}/tags/{tag}'
      ),
      tagTemplatePathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/tagTemplates/{tag_template}'
      ),
      tagTemplateFieldPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/tagTemplates/{tag_template}/fields/{field}'
      ),
      entryPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}'
      ),
      entryGroupPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}'
      ),
      projectPathTemplate: new gaxModule.PathTemplate('projects/{project}'),
      locationPathTemplate: new gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.
    this.policyTagManagerSerializationStub = gaxGrpc.createStub(
      opts.fallback
        ? (protos as protobuf.Root).lookupService(
            'google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization'
          )
        : // tslint:disable-next-line no-any
          (protos as any).google.cloud.datacatalog.v1beta1
            .PolicyTagManagerSerialization,
      opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const policyTagManagerSerializationStubMethods = [
      'importTaxonomies',
      'exportTaxonomies',
    ];

    for (const methodName of policyTagManagerSerializationStubMethods) {
      const innerCallPromise = this.policyTagManagerSerializationStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          return stub[methodName].apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const apiCall = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName] ||
          this._descriptors.stream[methodName] ||
          this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
        return apiCall(argument, callOptions, callback);
      };
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

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  importTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      (
        | protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  importTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      | protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Imports all taxonomies and their policy tags to a project as new
   * taxonomies.
   *
   * This method provides a bulk taxonomy / policy tag creation using nested
   * proto structure.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of project that the newly created taxonomies will
   *   belong to.
   * @param {google.cloud.datacatalog.v1beta1.InlineSource} request.inlineSource
   *   Inline source used for taxonomies import
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ImportTaxonomiesResponse]{@link google.cloud.datacatalog.v1beta1.ImportTaxonomiesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  importTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
          | protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      | protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      (
        | protosTypes.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    return this._innerApiCalls.importTaxonomies(request, options, callback);
  }
  exportTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    options?: gax.CallOptions
  ): Promise<
    [
      protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      (
        | protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  exportTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    options: gax.CallOptions,
    callback: Callback<
      protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      | protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
      | undefined,
      {} | undefined
    >
  ): void;
  /**
   * Exports all taxonomies and their policy tags in a project.
   *
   * This method generates SerializedTaxonomy protos with nested policy tags
   * that can be used as an input for future ImportTaxonomies calls.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. Resource name of the project that taxonomies to be exported
   *   will share.
   * @param {string[]} request.taxonomies
   *   Required. Resource names of the taxonomies to be exported.
   * @param {boolean} request.serializedTaxonomies
   *   Export taxonomies as serialized taxonomies.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ExportTaxonomiesResponse]{@link google.cloud.datacatalog.v1beta1.ExportTaxonomiesResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   */
  exportTaxonomies(
    request: protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    optionsOrCallback?:
      | gax.CallOptions
      | Callback<
          protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
          | protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
          | undefined,
          {} | undefined
        >,
    callback?: Callback<
      protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      | protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
      | undefined,
      {} | undefined
    >
  ): Promise<
    [
      protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      (
        | protosTypes.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    return this._innerApiCalls.exportTaxonomies(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified taxonomy resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} taxonomy
   * @returns {string} Resource name string.
   */
  taxonomyPath(project: string, location: string, taxonomy: string) {
    return this._pathTemplates.taxonomyPathTemplate.render({
      project,
      location,
      taxonomy,
    });
  }

  /**
   * Parse the project from Taxonomy resource.
   *
   * @param {string} taxonomyName
   *   A fully-qualified path representing Taxonomy resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTaxonomyName(taxonomyName: string) {
    return this._pathTemplates.taxonomyPathTemplate.match(taxonomyName).project;
  }

  /**
   * Parse the location from Taxonomy resource.
   *
   * @param {string} taxonomyName
   *   A fully-qualified path representing Taxonomy resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTaxonomyName(taxonomyName: string) {
    return this._pathTemplates.taxonomyPathTemplate.match(taxonomyName)
      .location;
  }

  /**
   * Parse the taxonomy from Taxonomy resource.
   *
   * @param {string} taxonomyName
   *   A fully-qualified path representing Taxonomy resource.
   * @returns {string} A string representing the taxonomy.
   */
  matchTaxonomyFromTaxonomyName(taxonomyName: string) {
    return this._pathTemplates.taxonomyPathTemplate.match(taxonomyName)
      .taxonomy;
  }

  /**
   * Return a fully-qualified policyTag resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} taxonomy
   * @param {string} policy_tag
   * @returns {string} Resource name string.
   */
  policyTagPath(
    project: string,
    location: string,
    taxonomy: string,
    policyTag: string
  ) {
    return this._pathTemplates.policyTagPathTemplate.render({
      project,
      location,
      taxonomy,
      policy_tag: policyTag,
    });
  }

  /**
   * Parse the project from PolicyTag resource.
   *
   * @param {string} policyTagName
   *   A fully-qualified path representing PolicyTag resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromPolicyTagName(policyTagName: string) {
    return this._pathTemplates.policyTagPathTemplate.match(policyTagName)
      .project;
  }

  /**
   * Parse the location from PolicyTag resource.
   *
   * @param {string} policyTagName
   *   A fully-qualified path representing PolicyTag resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromPolicyTagName(policyTagName: string) {
    return this._pathTemplates.policyTagPathTemplate.match(policyTagName)
      .location;
  }

  /**
   * Parse the taxonomy from PolicyTag resource.
   *
   * @param {string} policyTagName
   *   A fully-qualified path representing PolicyTag resource.
   * @returns {string} A string representing the taxonomy.
   */
  matchTaxonomyFromPolicyTagName(policyTagName: string) {
    return this._pathTemplates.policyTagPathTemplate.match(policyTagName)
      .taxonomy;
  }

  /**
   * Parse the policy_tag from PolicyTag resource.
   *
   * @param {string} policyTagName
   *   A fully-qualified path representing PolicyTag resource.
   * @returns {string} A string representing the policy_tag.
   */
  matchPolicyTagFromPolicyTagName(policyTagName: string) {
    return this._pathTemplates.policyTagPathTemplate.match(policyTagName)
      .policy_tag;
  }

  /**
   * Return a fully-qualified tag resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} entry_group
   * @param {string} entry
   * @param {string} tag
   * @returns {string} Resource name string.
   */
  tagPath(
    project: string,
    location: string,
    entryGroup: string,
    entry: string,
    tag: string
  ) {
    return this._pathTemplates.tagPathTemplate.render({
      project,
      location,
      entry_group: entryGroup,
      entry,
      tag,
    });
  }

  /**
   * Parse the project from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTagName(tagName: string) {
    return this._pathTemplates.tagPathTemplate.match(tagName).project;
  }

  /**
   * Parse the location from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTagName(tagName: string) {
    return this._pathTemplates.tagPathTemplate.match(tagName).location;
  }

  /**
   * Parse the entry_group from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the entry_group.
   */
  matchEntryGroupFromTagName(tagName: string) {
    return this._pathTemplates.tagPathTemplate.match(tagName).entry_group;
  }

  /**
   * Parse the entry from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the entry.
   */
  matchEntryFromTagName(tagName: string) {
    return this._pathTemplates.tagPathTemplate.match(tagName).entry;
  }

  /**
   * Parse the tag from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the tag.
   */
  matchTagFromTagName(tagName: string) {
    return this._pathTemplates.tagPathTemplate.match(tagName).tag;
  }

  /**
   * Return a fully-qualified tagTemplate resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} tag_template
   * @returns {string} Resource name string.
   */
  tagTemplatePath(project: string, location: string, tagTemplate: string) {
    return this._pathTemplates.tagTemplatePathTemplate.render({
      project,
      location,
      tag_template: tagTemplate,
    });
  }

  /**
   * Parse the project from TagTemplate resource.
   *
   * @param {string} tagTemplateName
   *   A fully-qualified path representing TagTemplate resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTagTemplateName(tagTemplateName: string) {
    return this._pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
      .project;
  }

  /**
   * Parse the location from TagTemplate resource.
   *
   * @param {string} tagTemplateName
   *   A fully-qualified path representing TagTemplate resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTagTemplateName(tagTemplateName: string) {
    return this._pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
      .location;
  }

  /**
   * Parse the tag_template from TagTemplate resource.
   *
   * @param {string} tagTemplateName
   *   A fully-qualified path representing TagTemplate resource.
   * @returns {string} A string representing the tag_template.
   */
  matchTagTemplateFromTagTemplateName(tagTemplateName: string) {
    return this._pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
      .tag_template;
  }

  /**
   * Return a fully-qualified tagTemplateField resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} tag_template
   * @param {string} field
   * @returns {string} Resource name string.
   */
  tagTemplateFieldPath(
    project: string,
    location: string,
    tagTemplate: string,
    field: string
  ) {
    return this._pathTemplates.tagTemplateFieldPathTemplate.render({
      project,
      location,
      tag_template: tagTemplate,
      field,
    });
  }

  /**
   * Parse the project from TagTemplateField resource.
   *
   * @param {string} tagTemplateFieldName
   *   A fully-qualified path representing TagTemplateField resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromTagTemplateFieldName(tagTemplateFieldName: string) {
    return this._pathTemplates.tagTemplateFieldPathTemplate.match(
      tagTemplateFieldName
    ).project;
  }

  /**
   * Parse the location from TagTemplateField resource.
   *
   * @param {string} tagTemplateFieldName
   *   A fully-qualified path representing TagTemplateField resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTagTemplateFieldName(tagTemplateFieldName: string) {
    return this._pathTemplates.tagTemplateFieldPathTemplate.match(
      tagTemplateFieldName
    ).location;
  }

  /**
   * Parse the tag_template from TagTemplateField resource.
   *
   * @param {string} tagTemplateFieldName
   *   A fully-qualified path representing TagTemplateField resource.
   * @returns {string} A string representing the tag_template.
   */
  matchTagTemplateFromTagTemplateFieldName(tagTemplateFieldName: string) {
    return this._pathTemplates.tagTemplateFieldPathTemplate.match(
      tagTemplateFieldName
    ).tag_template;
  }

  /**
   * Parse the field from TagTemplateField resource.
   *
   * @param {string} tagTemplateFieldName
   *   A fully-qualified path representing TagTemplateField resource.
   * @returns {string} A string representing the field.
   */
  matchFieldFromTagTemplateFieldName(tagTemplateFieldName: string) {
    return this._pathTemplates.tagTemplateFieldPathTemplate.match(
      tagTemplateFieldName
    ).field;
  }

  /**
   * Return a fully-qualified entry resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} entry_group
   * @param {string} entry
   * @returns {string} Resource name string.
   */
  entryPath(
    project: string,
    location: string,
    entryGroup: string,
    entry: string
  ) {
    return this._pathTemplates.entryPathTemplate.render({
      project,
      location,
      entry_group: entryGroup,
      entry,
    });
  }

  /**
   * Parse the project from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromEntryName(entryName: string) {
    return this._pathTemplates.entryPathTemplate.match(entryName).project;
  }

  /**
   * Parse the location from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromEntryName(entryName: string) {
    return this._pathTemplates.entryPathTemplate.match(entryName).location;
  }

  /**
   * Parse the entry_group from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the entry_group.
   */
  matchEntryGroupFromEntryName(entryName: string) {
    return this._pathTemplates.entryPathTemplate.match(entryName).entry_group;
  }

  /**
   * Parse the entry from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the entry.
   */
  matchEntryFromEntryName(entryName: string) {
    return this._pathTemplates.entryPathTemplate.match(entryName).entry;
  }

  /**
   * Return a fully-qualified entryGroup resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} entry_group
   * @returns {string} Resource name string.
   */
  entryGroupPath(project: string, location: string, entryGroup: string) {
    return this._pathTemplates.entryGroupPathTemplate.render({
      project,
      location,
      entry_group: entryGroup,
    });
  }

  /**
   * Parse the project from EntryGroup resource.
   *
   * @param {string} entryGroupName
   *   A fully-qualified path representing EntryGroup resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromEntryGroupName(entryGroupName: string) {
    return this._pathTemplates.entryGroupPathTemplate.match(entryGroupName)
      .project;
  }

  /**
   * Parse the location from EntryGroup resource.
   *
   * @param {string} entryGroupName
   *   A fully-qualified path representing EntryGroup resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromEntryGroupName(entryGroupName: string) {
    return this._pathTemplates.entryGroupPathTemplate.match(entryGroupName)
      .location;
  }

  /**
   * Parse the entry_group from EntryGroup resource.
   *
   * @param {string} entryGroupName
   *   A fully-qualified path representing EntryGroup resource.
   * @returns {string} A string representing the entry_group.
   */
  matchEntryGroupFromEntryGroupName(entryGroupName: string) {
    return this._pathTemplates.entryGroupPathTemplate.match(entryGroupName)
      .entry_group;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this._pathTemplates.projectPathTemplate.render({
      project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this._pathTemplates.projectPathTemplate.match(projectName).project;
  }

  /**
   * Return a fully-qualified location resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @returns {string} Resource name string.
   */
  locationPath(project: string, location: string) {
    return this._pathTemplates.locationPathTemplate.render({
      project,
      location,
    });
  }

  /**
   * Parse the project from Location resource.
   *
   * @param {string} locationName
   *   A fully-qualified path representing Location resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromLocationName(locationName: string) {
    return this._pathTemplates.locationPathTemplate.match(locationName).project;
  }

  /**
   * Parse the location from Location resource.
   *
   * @param {string} locationName
   *   A fully-qualified path representing Location resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromLocationName(locationName: string) {
    return this._pathTemplates.locationPathTemplate.match(locationName)
      .location;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    if (!this._terminated) {
      return this.policyTagManagerSerializationStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
