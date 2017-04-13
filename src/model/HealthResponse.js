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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HealthlineApplicationGateway) {
      root.HealthlineApplicationGateway = {};
    }
    root.HealthlineApplicationGateway.HealthResponse = factory(root.HealthlineApplicationGateway.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HealthResponse model module.
   * @module model/HealthResponse
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>HealthResponse</code>.
   * @alias module:model/HealthResponse
   * @class
   * @param status {String} 
   */
  var exports = function(status) {
    var _this = this;

    _this['status'] = status;
  };

  /**
   * Constructs a <code>HealthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthResponse} obj Optional instance to populate.
   * @return {module:model/HealthResponse} The populated <code>HealthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));

