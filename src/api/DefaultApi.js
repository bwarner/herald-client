/**
 * Healthline Application Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorResponse', 'model/HealthResponse', 'model/LandingResponse', 'model/SuggestResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/HealthResponse'), require('../model/LandingResponse'), require('../model/SuggestResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.HealthlineApplicationGateway) {
      root.HealthlineApplicationGateway = {};
    }
    root.HealthlineApplicationGateway.DefaultApi = factory(root.HealthlineApplicationGateway.ApiClient, root.HealthlineApplicationGateway.ErrorResponse, root.HealthlineApplicationGateway.HealthResponse, root.HealthlineApplicationGateway.LandingResponse, root.HealthlineApplicationGateway.SuggestResponse);
  }
}(this, function(ApiClient, ErrorResponse, HealthResponse, LandingResponse, SuggestResponse) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the checkHealth operation.
     * @callback module:api/DefaultApi~checkHealthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HealthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return status of application
     * @param {module:api/DefaultApi~checkHealthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HealthResponse}
     */
    this.checkHealth = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HealthResponse;

      return this.apiClient.callApi(
        '/health-check', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the conditon operation.
     * @callback module:api/DefaultApi~conditonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LandingResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns Ad configuration object
     * @param {Array.<String>} includeSymptom Condition Name
     * @param {module:api/DefaultApi~conditonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LandingResponse}
     */
    this.conditon = function(includeSymptom, callback) {
      var postBody = null;

      // verify the required parameter 'includeSymptom' is set
      if (includeSymptom == undefined || includeSymptom == null) {
        throw new Error("Missing the required parameter 'includeSymptom' when calling conditon");
      }


      var pathParams = {
      };
      var queryParams = {
        'includeSymptom': this.apiClient.buildCollectionParam(includeSymptom, 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LandingResponse;

      return this.apiClient.callApi(
        '/symptoms/conditon', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the suggest operation.
     * @callback module:api/DefaultApi~suggestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuggestResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching symptoms
     * @param {String} searchTerms Search terms
     * @param {module:api/DefaultApi~suggestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuggestResponse}
     */
    this.suggest = function(searchTerms, callback) {
      var postBody = null;

      // verify the required parameter 'searchTerms' is set
      if (searchTerms == undefined || searchTerms == null) {
        throw new Error("Missing the required parameter 'searchTerms' when calling suggest");
      }


      var pathParams = {
      };
      var queryParams = {
        'searchTerms': searchTerms
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SuggestResponse;

      return this.apiClient.callApi(
        '/symptoms/suggest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
