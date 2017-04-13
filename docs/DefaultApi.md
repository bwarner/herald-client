# HealthlineApplicationGateway.DefaultApi

All URIs are relative to *http://localhost:10010/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkHealth**](DefaultApi.md#checkHealth) | **GET** /health-check | 
[**conditon**](DefaultApi.md#conditon) | **GET** /symptoms/conditon | 
[**suggest**](DefaultApi.md#suggest) | **GET** /symptoms/suggest | 


<a name="checkHealth"></a>
# **checkHealth**
> HealthResponse checkHealth()



Return status of application

### Example
```javascript
var HealthlineApplicationGateway = require('healthline_application_gateway');

var apiInstance = new HealthlineApplicationGateway.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkHealth(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HealthResponse**](HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="conditon"></a>
# **conditon**
> LandingResponse conditon(includeSymptom)



Returns Ad configuration object

### Example
```javascript
var HealthlineApplicationGateway = require('healthline_application_gateway');

var apiInstance = new HealthlineApplicationGateway.DefaultApi();

var includeSymptom = ["includeSymptom_example"]; // [String] | Condition Name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.conditon(includeSymptom, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeSymptom** | [**[String]**](String.md)| Condition Name | 

### Return type

[**LandingResponse**](LandingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="suggest"></a>
# **suggest**
> SuggestResponse suggest(searchTerms)



Returns list of matching symptoms

### Example
```javascript
var HealthlineApplicationGateway = require('healthline_application_gateway');

var apiInstance = new HealthlineApplicationGateway.DefaultApi();

var searchTerms = "searchTerms_example"; // String | Search terms


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suggest(searchTerms, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerms** | **String**| Search terms | 

### Return type

[**SuggestResponse**](SuggestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

