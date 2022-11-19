// Copyright 2022 Google LLC
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

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta1/policy_tag_manager_serialization_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './policy_tag_manager_serialization_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Policy tag manager serialization API service allows clients to manipulate
 *  their taxonomies and policy tags data with serialized format.
 * @class
 * @memberof v1beta1
 */
export class PolicyTagManagerSerializationClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  policyTagManagerSerializationStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of PolicyTagManagerSerializationClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
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
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new PolicyTagManagerSerializationClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof PolicyTagManagerSerializationClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      entryPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}'
      ),
      entryGroupPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}'
      ),
      locationPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}'
      ),
      policyTagPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/taxonomies/{taxonomy}/policyTags/{policy_tag}'
      ),
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
      tagPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/entryGroups/{entry_group}/entries/{entry}/tags/{tag}'
      ),
      tagTemplatePathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/tagTemplates/{tag_template}'
      ),
      tagTemplateFieldPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/tagTemplates/{tag_template}/fields/{field}'
      ),
      taxonomyPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/taxonomies/{taxonomy}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.policyTagManagerSerializationStub) {
      return this.policyTagManagerSerializationStub;
    }

    // Put together the "service stub" for
    // google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization.
    this.policyTagManagerSerializationStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.datacatalog.v1beta1.PolicyTagManagerSerialization'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.datacatalog.v1beta1
            .PolicyTagManagerSerialization,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const policyTagManagerSerializationStubMethods = [
      'importTaxonomies',
      'exportTaxonomies',
    ];
    for (const methodName of policyTagManagerSerializationStubMethods) {
      const callPromise = this.policyTagManagerSerializationStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.policyTagManagerSerializationStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'datacatalog.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'datacatalog.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
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
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta1/policy_tag_manager_serialization.import_taxonomies.js</caption>
   * region_tag:datacatalog_v1beta1_generated_PolicyTagManagerSerialization_ImportTaxonomies_async
   */
  importTaxonomies(
    request?: protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      (
        | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  importTaxonomies(
    request: protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  importTaxonomies(
    request: protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    callback: Callback<
      protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  importTaxonomies(
    request?: protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
          | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesResponse,
      (
        | protos.google.cloud.datacatalog.v1beta1.IImportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.importTaxonomies(request, options, callback);
  }
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
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta1/policy_tag_manager_serialization.export_taxonomies.js</caption>
   * region_tag:datacatalog_v1beta1_generated_PolicyTagManagerSerialization_ExportTaxonomies_async
   */
  exportTaxonomies(
    request?: protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      (
        | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  exportTaxonomies(
    request: protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  exportTaxonomies(
    request: protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    callback: Callback<
      protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  exportTaxonomies(
    request?: protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
          | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesResponse,
      (
        | protos.google.cloud.datacatalog.v1beta1.IExportTaxonomiesRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.exportTaxonomies(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

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
    return this.pathTemplates.entryPathTemplate.render({
      project: project,
      location: location,
      entry_group: entryGroup,
      entry: entry,
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
    return this.pathTemplates.entryPathTemplate.match(entryName).project;
  }

  /**
   * Parse the location from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromEntryName(entryName: string) {
    return this.pathTemplates.entryPathTemplate.match(entryName).location;
  }

  /**
   * Parse the entry_group from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the entry_group.
   */
  matchEntryGroupFromEntryName(entryName: string) {
    return this.pathTemplates.entryPathTemplate.match(entryName).entry_group;
  }

  /**
   * Parse the entry from Entry resource.
   *
   * @param {string} entryName
   *   A fully-qualified path representing Entry resource.
   * @returns {string} A string representing the entry.
   */
  matchEntryFromEntryName(entryName: string) {
    return this.pathTemplates.entryPathTemplate.match(entryName).entry;
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
    return this.pathTemplates.entryGroupPathTemplate.render({
      project: project,
      location: location,
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
    return this.pathTemplates.entryGroupPathTemplate.match(entryGroupName)
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
    return this.pathTemplates.entryGroupPathTemplate.match(entryGroupName)
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
    return this.pathTemplates.entryGroupPathTemplate.match(entryGroupName)
      .entry_group;
  }

  /**
   * Return a fully-qualified location resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @returns {string} Resource name string.
   */
  locationPath(project: string, location: string) {
    return this.pathTemplates.locationPathTemplate.render({
      project: project,
      location: location,
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
    return this.pathTemplates.locationPathTemplate.match(locationName).project;
  }

  /**
   * Parse the location from Location resource.
   *
   * @param {string} locationName
   *   A fully-qualified path representing Location resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromLocationName(locationName: string) {
    return this.pathTemplates.locationPathTemplate.match(locationName).location;
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
    return this.pathTemplates.policyTagPathTemplate.render({
      project: project,
      location: location,
      taxonomy: taxonomy,
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
    return this.pathTemplates.policyTagPathTemplate.match(policyTagName)
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
    return this.pathTemplates.policyTagPathTemplate.match(policyTagName)
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
    return this.pathTemplates.policyTagPathTemplate.match(policyTagName)
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
    return this.pathTemplates.policyTagPathTemplate.match(policyTagName)
      .policy_tag;
  }

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
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
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
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
    return this.pathTemplates.tagPathTemplate.render({
      project: project,
      location: location,
      entry_group: entryGroup,
      entry: entry,
      tag: tag,
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
    return this.pathTemplates.tagPathTemplate.match(tagName).project;
  }

  /**
   * Parse the location from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTagName(tagName: string) {
    return this.pathTemplates.tagPathTemplate.match(tagName).location;
  }

  /**
   * Parse the entry_group from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the entry_group.
   */
  matchEntryGroupFromTagName(tagName: string) {
    return this.pathTemplates.tagPathTemplate.match(tagName).entry_group;
  }

  /**
   * Parse the entry from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the entry.
   */
  matchEntryFromTagName(tagName: string) {
    return this.pathTemplates.tagPathTemplate.match(tagName).entry;
  }

  /**
   * Parse the tag from Tag resource.
   *
   * @param {string} tagName
   *   A fully-qualified path representing Tag resource.
   * @returns {string} A string representing the tag.
   */
  matchTagFromTagName(tagName: string) {
    return this.pathTemplates.tagPathTemplate.match(tagName).tag;
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
    return this.pathTemplates.tagTemplatePathTemplate.render({
      project: project,
      location: location,
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
    return this.pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
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
    return this.pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
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
    return this.pathTemplates.tagTemplatePathTemplate.match(tagTemplateName)
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
    return this.pathTemplates.tagTemplateFieldPathTemplate.render({
      project: project,
      location: location,
      tag_template: tagTemplate,
      field: field,
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
    return this.pathTemplates.tagTemplateFieldPathTemplate.match(
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
    return this.pathTemplates.tagTemplateFieldPathTemplate.match(
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
    return this.pathTemplates.tagTemplateFieldPathTemplate.match(
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
    return this.pathTemplates.tagTemplateFieldPathTemplate.match(
      tagTemplateFieldName
    ).field;
  }

  /**
   * Return a fully-qualified taxonomy resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} taxonomy
   * @returns {string} Resource name string.
   */
  taxonomyPath(project: string, location: string, taxonomy: string) {
    return this.pathTemplates.taxonomyPathTemplate.render({
      project: project,
      location: location,
      taxonomy: taxonomy,
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
    return this.pathTemplates.taxonomyPathTemplate.match(taxonomyName).project;
  }

  /**
   * Parse the location from Taxonomy resource.
   *
   * @param {string} taxonomyName
   *   A fully-qualified path representing Taxonomy resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromTaxonomyName(taxonomyName: string) {
    return this.pathTemplates.taxonomyPathTemplate.match(taxonomyName).location;
  }

  /**
   * Parse the taxonomy from Taxonomy resource.
   *
   * @param {string} taxonomyName
   *   A fully-qualified path representing Taxonomy resource.
   * @returns {string} A string representing the taxonomy.
   */
  matchTaxonomyFromTaxonomyName(taxonomyName: string) {
    return this.pathTemplates.taxonomyPathTemplate.match(taxonomyName).taxonomy;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.policyTagManagerSerializationStub && !this._terminated) {
      return this.policyTagManagerSerializationStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
