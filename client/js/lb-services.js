// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getSchema
             * @methodOf lbServices.User
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Users/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getAbsoluteSchema
             * @methodOf lbServices.User
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Users/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#save
             * @methodOf lbServices.User
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Users/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getDetailSchema
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Users/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getModelRelationSchema
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Users/getModelRelationSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.CompanyInfo
 * @header lbServices.CompanyInfo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CompanyInfo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "CompanyInfo",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/CompanyInfos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#create
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/CompanyInfos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#createMany
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/CompanyInfos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#upsert
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/CompanyInfos",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#exists
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/CompanyInfos/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#findById
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/CompanyInfos/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#find
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/CompanyInfos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#findOne
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/CompanyInfos/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#updateAll
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/CompanyInfos/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#deleteById
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/CompanyInfos/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#count
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/CompanyInfos/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#prototype$updateAttributes
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/CompanyInfos/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#createChangeStream
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/CompanyInfos/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#getSchema
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/CompanyInfos/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#getAbsoluteSchema
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/CompanyInfos/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#save
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/CompanyInfos/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#getDetailSchema
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/CompanyInfos/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#getModelRelationSchema
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/CompanyInfos/getModelRelationSchema",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#updateOrCreate
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#update
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#destroyById
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.CompanyInfo#removeById
             * @methodOf lbServices.CompanyInfo
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `CompanyInfo` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.CompanyInfo#modelName
        * @propertyOf lbServices.CompanyInfo
        * @description
        * The name of the model represented by this $resource,
        * i.e. `CompanyInfo`.
        */
        R.modelName = "CompanyInfo";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Employee
 * @header lbServices.Employee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employee",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Employees/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__findById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__updateById__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Employees/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__get__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Queries accessTokens of Employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Employees/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__create__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Employees/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__delete__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Employees/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$__count__accessTokens
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Counts accessTokens of Employee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Employees/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#create
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createMany
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Employees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#upsert
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Employees",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#exists
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Employees/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Employees/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#find
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Employees",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#findOne
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Employees/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#updateAll
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Employees/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#deleteById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Employees/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#count
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Employees/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#prototype$updateAttributes
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Employees/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#createChangeStream
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Employees/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#login
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Employees/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#logout
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Employees/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#confirm
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Employees/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#resetPassword
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Employees/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getSchema
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Employees/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getAbsoluteSchema
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Employees/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#save
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Employees/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getDetailSchema
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Employees/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getModelRelationSchema
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Employees/getModelRelationSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#isAdmin
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `isAdmin` – `{boolean=}` -
             */
            "isAdmin": {
              url: urlBase + "/Employees/isAdmin",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employee#getCurrent
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Employees" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employee#updateOrCreate
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#update
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#destroyById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employee#removeById
             * @methodOf lbServices.Employee
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employee` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCachedCurrent
         * @methodOf lbServices.Employee
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Employee#login} or
         * {@link lbServices.Employee#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Employee instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#isAuthenticated
         * @methodOf lbServices.Employee
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Employee#getCurrentId
         * @methodOf lbServices.Employee
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Employee#modelName
        * @propertyOf lbServices.Employee
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employee`.
        */
        R.modelName = "Employee";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Customer",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Customers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__findById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__updateById__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.orders.findById() instead.
            "prototype$__findById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.destroyById() instead.
            "prototype$__destroyById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.updateById() instead.
            "prototype$__updateById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.addresses.findById() instead.
            "prototype$__findById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.addresses.destroyById() instead.
            "prototype$__destroyById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.addresses.updateById() instead.
            "prototype$__updateById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.subscriptions.findById() instead.
            "prototype$__findById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.subscriptions.destroyById() instead.
            "prototype$__destroyById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.subscriptions.updateById() instead.
            "prototype$__updateById__subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__get__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Customers/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__create__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__delete__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$__count__accessTokens
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Counts accessTokens of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Customers/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders() instead.
            "prototype$__get__orders": {
              isArray: true,
              url: urlBase + "/Customers/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.create() instead.
            "prototype$__create__orders": {
              url: urlBase + "/Customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.destroyAll() instead.
            "prototype$__delete__orders": {
              url: urlBase + "/Customers/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.count() instead.
            "prototype$__count__orders": {
              url: urlBase + "/Customers/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.addresses() instead.
            "prototype$__get__addresses": {
              isArray: true,
              url: urlBase + "/Customers/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use Customer.addresses.create() instead.
            "prototype$__create__addresses": {
              url: urlBase + "/Customers/:id/addresses",
              method: "POST",
            },

            // INTERNAL. Use Customer.addresses.destroyAll() instead.
            "prototype$__delete__addresses": {
              url: urlBase + "/Customers/:id/addresses",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.addresses.count() instead.
            "prototype$__count__addresses": {
              url: urlBase + "/Customers/:id/addresses/count",
              method: "GET",
            },

            // INTERNAL. Use Customer.subscriptions() instead.
            "prototype$__get__subscriptions": {
              isArray: true,
              url: urlBase + "/Customers/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use Customer.subscriptions.create() instead.
            "prototype$__create__subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use Customer.subscriptions.destroyAll() instead.
            "prototype$__delete__subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.subscriptions.count() instead.
            "prototype$__count__subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#create
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createMany
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#upsert
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Customers",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#exists
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Customers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Customers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#find
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Customers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#findOne
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Customers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#updateAll
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Customers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#deleteById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Customers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#count
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Customers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#prototype$updateAttributes
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Customers/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#createChangeStream
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Customers/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#login
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Customers/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#logout
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Customers/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#confirm
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Customers/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#resetPassword
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Customers/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getSchema
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Customers/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getAbsoluteSchema
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Customers/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#save
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Customers/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getDetailSchema
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Customers/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getModelRelationSchema
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Customers/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Order.customer() instead.
            "::get::Order::customer": {
              url: urlBase + "/Orders/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use Address.customer() instead.
            "::get::Address::customer": {
              url: urlBase + "/Addresses/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use Subscription.customer() instead.
            "::get::Subscription::customer": {
              url: urlBase + "/Subscriptions/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Customer#getCurrent
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Customers" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Customer#updateOrCreate
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#update
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#destroyById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Customer#removeById
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCachedCurrent
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Customer#login} or
         * {@link lbServices.Customer#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Customer instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#isAuthenticated
         * @methodOf lbServices.Customer
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#getCurrentId
         * @methodOf lbServices.Customer
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Customer#modelName
        * @propertyOf lbServices.Customer
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Customer`.
        */
        R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.orders
     * @header lbServices.Customer.orders
     * @object
     * @description
     *
     * The object `Customer.orders` groups methods
     * manipulating `Order` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orders Customer.orders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#orders
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries orders of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#count
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Counts orders of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#create
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#createMany
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#destroyAll
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Deletes all orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#destroyById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Delete a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#findById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Find a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Customer::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.orders#updateById
             * @methodOf lbServices.Customer.orders
             *
             * @description
             *
             * Update a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Customer::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.addresses
     * @header lbServices.Customer.addresses
     * @object
     * @description
     *
     * The object `Customer.addresses` groups methods
     * manipulating `Address` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#addresses Customer.addresses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#addresses
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries addresses of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#count
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Counts addresses of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.addresses.count = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::count::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#create
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Creates a new instance in addresses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.create = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::create::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#createMany
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Creates a new instance in addresses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.createMany = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::createMany::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#destroyAll
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Deletes all addresses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.addresses.destroyAll = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::delete::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#destroyById
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Delete a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.addresses.destroyById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::destroyById::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#findById
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Find a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.findById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::findById::Customer::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.addresses#updateById
             * @methodOf lbServices.Customer.addresses
             *
             * @description
             *
             * Update a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.updateById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::updateById::Customer::addresses"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.subscriptions
     * @header lbServices.Customer.subscriptions
     * @object
     * @description
     *
     * The object `Customer.subscriptions` groups methods
     * manipulating `Subscription` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#subscriptions Customer.subscriptions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Customer#subscriptions
             * @methodOf lbServices.Customer
             *
             * @description
             *
             * Queries subscriptions of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::get::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#count
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Counts subscriptions of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.subscriptions.count = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::count::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#create
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.create = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::create::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#createMany
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Creates a new instance in subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.createMany = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::createMany::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#destroyAll
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Deletes all subscriptions of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyAll = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::delete::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#destroyById
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Delete a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.subscriptions.destroyById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::destroyById::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#findById
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Find a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.findById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::findById::Customer::subscriptions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Customer.subscriptions#updateById
             * @methodOf lbServices.Customer.subscriptions
             *
             * @description
             *
             * Update a related item by id for subscriptions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for subscriptions
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R.subscriptions.updateById = function() {
          var TargetResource = $injector.get("Subscription");
          var action = TargetResource["::updateById::Customer::subscriptions"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Product",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Products/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Product.orders.findById() instead.
            "prototype$__findById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.orders.destroyById() instead.
            "prototype$__destroyById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.updateById() instead.
            "prototype$__updateById__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.orders.link() instead.
            "prototype$__link__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.orders.unlink() instead.
            "prototype$__unlink__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.exists() instead.
            "prototype$__exists__orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.orders() instead.
            "prototype$__get__orders": {
              isArray: true,
              url: urlBase + "/Products/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Product.orders.create() instead.
            "prototype$__create__orders": {
              url: urlBase + "/Products/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Product.orders.destroyAll() instead.
            "prototype$__delete__orders": {
              url: urlBase + "/Products/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.count() instead.
            "prototype$__count__orders": {
              url: urlBase + "/Products/:id/orders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#create
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createMany
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Products",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#upsert
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Products",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#exists
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Products/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Products/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#find
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Products",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#findOne
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Products/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#updateAll
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Products/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#deleteById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Products/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#count
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#prototype$updateAttributes
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Products/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#createChangeStream
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Products/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#getSchema
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Products/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#getAbsoluteSchema
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Products/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#save
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Products/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#getDetailSchema
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Products/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Product#getModelRelationSchema
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Products/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Order.products.findById() instead.
            "::findById::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Order.products.destroyById() instead.
            "::destroyById::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.updateById() instead.
            "::updateById::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.products.link() instead.
            "::link::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.products.unlink() instead.
            "::unlink::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.exists() instead.
            "::exists::Order::products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Order.products() instead.
            "::get::Order::products": {
              isArray: true,
              url: urlBase + "/Orders/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Order.products.create() instead.
            "::create::Order::products": {
              url: urlBase + "/Orders/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Order.products.createMany() instead.
            "::createMany::Order::products": {
              isArray: true,
              url: urlBase + "/Orders/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Order.products.destroyAll() instead.
            "::delete::Order::products": {
              url: urlBase + "/Orders/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.count() instead.
            "::count::Order::products": {
              url: urlBase + "/Orders/:id/products/count",
              method: "GET",
            },

            // INTERNAL. Use ProductOrder.product() instead.
            "::get::ProductOrder::product": {
              url: urlBase + "/ProductOrders/:id/product",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Product#updateOrCreate
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Product#update
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Product#destroyById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Product#removeById
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Product#modelName
        * @propertyOf lbServices.Product
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Product`.
        */
        R.modelName = "Product";

    /**
     * @ngdoc object
     * @name lbServices.Product.orders
     * @header lbServices.Product.orders
     * @object
     * @description
     *
     * The object `Product.orders` groups methods
     * manipulating `Order` instances related to `Product`.
     *
     * Call {@link lbServices.Product#orders Product.orders()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Product#orders
             * @methodOf lbServices.Product
             *
             * @description
             *
             * Queries orders of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#count
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Counts orders of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#create
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#createMany
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Creates a new instance in orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#destroyAll
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Deletes all orders of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#destroyById
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Delete a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#exists
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Check the existence of orders relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.exists = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::exists::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#findById
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Find a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#link
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Add a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.link = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::link::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#unlink
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Remove the orders relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.orders.unlink = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::unlink::Product::orders"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Product.orders#updateById
             * @methodOf lbServices.Product.orders
             *
             * @description
             *
             * Update a related item by id for orders.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for orders
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Product::orders"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Order",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Orders/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Order.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/Orders/:id/customer",
              method: "GET",
            },

            // INTERNAL. Use Order.invoices() instead.
            "prototype$__get__invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "GET",
            },

            // INTERNAL. Use Order.invoices.create() instead.
            "prototype$__create__invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "POST",
            },

            // INTERNAL. Use Order.invoices.update() instead.
            "prototype$__update__invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "PUT",
            },

            // INTERNAL. Use Order.invoices.destroy() instead.
            "prototype$__destroy__invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "DELETE",
            },

            // INTERNAL. Use Order.deliveries() instead.
            "prototype$__get__deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "GET",
            },

            // INTERNAL. Use Order.deliveries.create() instead.
            "prototype$__create__deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "POST",
            },

            // INTERNAL. Use Order.deliveries.update() instead.
            "prototype$__update__deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "PUT",
            },

            // INTERNAL. Use Order.deliveries.destroy() instead.
            "prototype$__destroy__deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.findById() instead.
            "prototype$__findById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "GET",
            },

            // INTERNAL. Use Order.products.destroyById() instead.
            "prototype$__destroyById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.updateById() instead.
            "prototype$__updateById__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.products.link() instead.
            "prototype$__link__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Order.products.unlink() instead.
            "prototype$__unlink__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.exists() instead.
            "prototype$__exists__products": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Orders/:id/products/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Order.products() instead.
            "prototype$__get__products": {
              isArray: true,
              url: urlBase + "/Orders/:id/products",
              method: "GET",
            },

            // INTERNAL. Use Order.products.create() instead.
            "prototype$__create__products": {
              url: urlBase + "/Orders/:id/products",
              method: "POST",
            },

            // INTERNAL. Use Order.products.destroyAll() instead.
            "prototype$__delete__products": {
              url: urlBase + "/Orders/:id/products",
              method: "DELETE",
            },

            // INTERNAL. Use Order.products.count() instead.
            "prototype$__count__products": {
              url: urlBase + "/Orders/:id/products/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#create
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Orders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createMany
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Orders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#upsert
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Orders",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#exists
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Orders/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Orders/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#find
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Orders",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#findOne
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Orders/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#updateAll
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Orders/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#deleteById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Orders/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#count
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Orders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#prototype$updateAttributes
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Orders/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#createChangeStream
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Orders/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#getSchema
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Orders/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#getAbsoluteSchema
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Orders/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#save
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Orders/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#getDetailSchema
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Orders/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Order#getModelRelationSchema
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Orders/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.findById() instead.
            "::findById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.destroyById() instead.
            "::destroyById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.updateById() instead.
            "::updateById::Customer::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.orders() instead.
            "::get::Customer::orders": {
              isArray: true,
              url: urlBase + "/Customers/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Customer.orders.create() instead.
            "::create::Customer::orders": {
              url: urlBase + "/Customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.createMany() instead.
            "::createMany::Customer::orders": {
              isArray: true,
              url: urlBase + "/Customers/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Customer.orders.destroyAll() instead.
            "::delete::Customer::orders": {
              url: urlBase + "/Customers/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.orders.count() instead.
            "::count::Customer::orders": {
              url: urlBase + "/Customers/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Product.orders.findById() instead.
            "::findById::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "GET",
            },

            // INTERNAL. Use Product.orders.destroyById() instead.
            "::destroyById::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.updateById() instead.
            "::updateById::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.orders.link() instead.
            "::link::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Product.orders.unlink() instead.
            "::unlink::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.exists() instead.
            "::exists::Product::orders": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Products/:id/orders/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Product.orders() instead.
            "::get::Product::orders": {
              isArray: true,
              url: urlBase + "/Products/:id/orders",
              method: "GET",
            },

            // INTERNAL. Use Product.orders.create() instead.
            "::create::Product::orders": {
              url: urlBase + "/Products/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Product.orders.createMany() instead.
            "::createMany::Product::orders": {
              isArray: true,
              url: urlBase + "/Products/:id/orders",
              method: "POST",
            },

            // INTERNAL. Use Product.orders.destroyAll() instead.
            "::delete::Product::orders": {
              url: urlBase + "/Products/:id/orders",
              method: "DELETE",
            },

            // INTERNAL. Use Product.orders.count() instead.
            "::count::Product::orders": {
              url: urlBase + "/Products/:id/orders/count",
              method: "GET",
            },

            // INTERNAL. Use Invoice.order() instead.
            "::get::Invoice::order": {
              url: urlBase + "/Invoices/:id/order",
              method: "GET",
            },

            // INTERNAL. Use Delivery.order() instead.
            "::get::Delivery::order": {
              url: urlBase + "/Deliveries/:id/order",
              method: "GET",
            },

            // INTERNAL. Use ProductOrder.order() instead.
            "::get::ProductOrder::order": {
              url: urlBase + "/ProductOrders/:id/order",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Order#updateOrCreate
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Order#update
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Order#destroyById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Order#removeById
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Order#modelName
        * @propertyOf lbServices.Order
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Order`.
        */
        R.modelName = "Order";


            /**
             * @ngdoc method
             * @name lbServices.Order#customer
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Order::customer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.invoices
     * @header lbServices.Order.invoices
     * @object
     * @description
     *
     * The object `Order.invoices` groups methods
     * manipulating `Invoice` instances related to `Order`.
     *
     * Call {@link lbServices.Order#invoices Order.invoices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Order#invoices
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches hasOne relation invoices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R.invoices = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::get::Order::invoices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.invoices#create
             * @methodOf lbServices.Order.invoices
             *
             * @description
             *
             * Creates a new instance in invoices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R.invoices.create = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::create::Order::invoices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.invoices#createMany
             * @methodOf lbServices.Order.invoices
             *
             * @description
             *
             * Creates a new instance in invoices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R.invoices.createMany = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::createMany::Order::invoices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.invoices#destroy
             * @methodOf lbServices.Order.invoices
             *
             * @description
             *
             * Deletes invoices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.invoices.destroy = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::destroy::Order::invoices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.invoices#update
             * @methodOf lbServices.Order.invoices
             *
             * @description
             *
             * Update invoices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R.invoices.update = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::update::Order::invoices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.deliveries
     * @header lbServices.Order.deliveries
     * @object
     * @description
     *
     * The object `Order.deliveries` groups methods
     * manipulating `Delivery` instances related to `Order`.
     *
     * Call {@link lbServices.Order#deliveries Order.deliveries()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Order#deliveries
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Fetches hasOne relation deliveries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R.deliveries = function() {
          var TargetResource = $injector.get("Delivery");
          var action = TargetResource["::get::Order::deliveries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.deliveries#create
             * @methodOf lbServices.Order.deliveries
             *
             * @description
             *
             * Creates a new instance in deliveries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R.deliveries.create = function() {
          var TargetResource = $injector.get("Delivery");
          var action = TargetResource["::create::Order::deliveries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.deliveries#createMany
             * @methodOf lbServices.Order.deliveries
             *
             * @description
             *
             * Creates a new instance in deliveries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R.deliveries.createMany = function() {
          var TargetResource = $injector.get("Delivery");
          var action = TargetResource["::createMany::Order::deliveries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.deliveries#destroy
             * @methodOf lbServices.Order.deliveries
             *
             * @description
             *
             * Deletes deliveries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.deliveries.destroy = function() {
          var TargetResource = $injector.get("Delivery");
          var action = TargetResource["::destroy::Order::deliveries"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.deliveries#update
             * @methodOf lbServices.Order.deliveries
             *
             * @description
             *
             * Update deliveries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R.deliveries.update = function() {
          var TargetResource = $injector.get("Delivery");
          var action = TargetResource["::update::Order::deliveries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.products
     * @header lbServices.Order.products
     * @object
     * @description
     *
     * The object `Order.products` groups methods
     * manipulating `Product` instances related to `Order`.
     *
     * Call {@link lbServices.Order#products Order.products()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Order#products
             * @methodOf lbServices.Order
             *
             * @description
             *
             * Queries products of Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#count
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Counts products of Order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.products.count = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::count::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#create
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.create = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::create::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#createMany
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.createMany = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::createMany::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#destroyAll
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyAll = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::delete::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#destroyById
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.destroyById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::destroyById::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#exists
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Check the existence of products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.exists = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::exists::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#findById
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.findById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::findById::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#link
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Add a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.link = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::link::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#unlink
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Remove the products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.products.unlink = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::unlink::Order::products"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Order.products#updateById
             * @methodOf lbServices.Order.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.products.updateById = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::updateById::Order::products"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Invoice
 * @header lbServices.Invoice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Invoice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Invoice",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Invoices/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Invoice.order() instead.
            "prototype$__get__order": {
              url: urlBase + "/Invoices/:id/order",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#create
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Invoices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#createMany
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Invoices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#upsert
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Invoices",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#exists
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Invoices/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#findById
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Invoices/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#find
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Invoices",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#findOne
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Invoices/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#updateAll
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Invoices/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#deleteById
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Invoices/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#count
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Invoices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#prototype$updateAttributes
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Invoices/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#createChangeStream
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Invoices/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#getSchema
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Invoices/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#getAbsoluteSchema
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Invoices/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#save
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Invoices/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#getDetailSchema
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Invoices/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Invoice#getModelRelationSchema
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Invoices/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Order.invoices() instead.
            "::get::Order::invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "GET",
            },

            // INTERNAL. Use Order.invoices.create() instead.
            "::create::Order::invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "POST",
            },

            // INTERNAL. Use Order.invoices.createMany() instead.
            "::createMany::Order::invoices": {
              isArray: true,
              url: urlBase + "/Orders/:id/invoices",
              method: "POST",
            },

            // INTERNAL. Use Order.invoices.update() instead.
            "::update::Order::invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "PUT",
            },

            // INTERNAL. Use Order.invoices.destroy() instead.
            "::destroy::Order::invoices": {
              url: urlBase + "/Orders/:id/invoices",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Invoice#updateOrCreate
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Invoice#update
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Invoice#destroyById
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Invoice#removeById
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Invoice` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Invoice#modelName
        * @propertyOf lbServices.Invoice
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Invoice`.
        */
        R.modelName = "Invoice";


            /**
             * @ngdoc method
             * @name lbServices.Invoice#order
             * @methodOf lbServices.Invoice
             *
             * @description
             *
             * Fetches belongsTo relation order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Invoice::order"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Address
 * @header lbServices.Address
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Address` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Address",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Addresses/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Address.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/Addresses/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#create
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Addresses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#createMany
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Addresses",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#upsert
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Addresses",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#exists
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Addresses/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#findById
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Addresses/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#find
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Addresses",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#findOne
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Addresses/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#updateAll
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Addresses/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#deleteById
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Addresses/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#count
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Addresses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#prototype$updateAttributes
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Addresses/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#createChangeStream
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Addresses/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#getSchema
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Addresses/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#getAbsoluteSchema
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Addresses/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#save
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Addresses/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#getDetailSchema
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Addresses/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#getModelRelationSchema
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Addresses/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Customer.addresses.findById() instead.
            "::findById::Customer::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.addresses.destroyById() instead.
            "::destroyById::Customer::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.addresses.updateById() instead.
            "::updateById::Customer::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/addresses/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.addresses() instead.
            "::get::Customer::addresses": {
              isArray: true,
              url: urlBase + "/Customers/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use Customer.addresses.create() instead.
            "::create::Customer::addresses": {
              url: urlBase + "/Customers/:id/addresses",
              method: "POST",
            },

            // INTERNAL. Use Customer.addresses.createMany() instead.
            "::createMany::Customer::addresses": {
              isArray: true,
              url: urlBase + "/Customers/:id/addresses",
              method: "POST",
            },

            // INTERNAL. Use Customer.addresses.destroyAll() instead.
            "::delete::Customer::addresses": {
              url: urlBase + "/Customers/:id/addresses",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.addresses.count() instead.
            "::count::Customer::addresses": {
              url: urlBase + "/Customers/:id/addresses/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Address#updateOrCreate
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Address#update
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Address#destroyById
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Address#removeById
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Address#modelName
        * @propertyOf lbServices.Address
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Address`.
        */
        R.modelName = "Address";


            /**
             * @ngdoc method
             * @name lbServices.Address#customer
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Address::customer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Delivery
 * @header lbServices.Delivery
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Delivery` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Delivery",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Deliveries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Delivery.order() instead.
            "prototype$__get__order": {
              url: urlBase + "/Deliveries/:id/order",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#create
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Deliveries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#createMany
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Deliveries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#upsert
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Deliveries",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#exists
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Deliveries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#findById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Deliveries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#find
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Deliveries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#findOne
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Deliveries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#updateAll
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Deliveries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#deleteById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Deliveries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#count
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Deliveries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#prototype$updateAttributes
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Deliveries/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#createChangeStream
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Deliveries/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#getSchema
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Deliveries/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#getAbsoluteSchema
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Deliveries/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#save
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Deliveries/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#getDetailSchema
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Deliveries/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Delivery#getModelRelationSchema
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Deliveries/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Order.deliveries() instead.
            "::get::Order::deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "GET",
            },

            // INTERNAL. Use Order.deliveries.create() instead.
            "::create::Order::deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "POST",
            },

            // INTERNAL. Use Order.deliveries.createMany() instead.
            "::createMany::Order::deliveries": {
              isArray: true,
              url: urlBase + "/Orders/:id/deliveries",
              method: "POST",
            },

            // INTERNAL. Use Order.deliveries.update() instead.
            "::update::Order::deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "PUT",
            },

            // INTERNAL. Use Order.deliveries.destroy() instead.
            "::destroy::Order::deliveries": {
              url: urlBase + "/Orders/:id/deliveries",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Delivery#updateOrCreate
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#update
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#destroyById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Delivery#removeById
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Delivery` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Delivery#modelName
        * @propertyOf lbServices.Delivery
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Delivery`.
        */
        R.modelName = "Delivery";


            /**
             * @ngdoc method
             * @name lbServices.Delivery#order
             * @methodOf lbServices.Delivery
             *
             * @description
             *
             * Fetches belongsTo relation order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Delivery::order"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Subscription
 * @header lbServices.Subscription
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Subscription` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Subscription",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Subscriptions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Subscription.customer() instead.
            "prototype$__get__customer": {
              url: urlBase + "/Subscriptions/:id/customer",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#create
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Subscriptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#createMany
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Subscriptions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#upsert
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Subscriptions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#exists
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Subscriptions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#findById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Subscriptions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#find
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Subscriptions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#findOne
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Subscriptions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#updateAll
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Subscriptions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#deleteById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Subscriptions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#count
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Subscriptions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#prototype$updateAttributes
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Subscriptions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#createChangeStream
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Subscriptions/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#getSchema
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/Subscriptions/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#getAbsoluteSchema
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/Subscriptions/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#save
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/Subscriptions/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#getDetailSchema
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/Subscriptions/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Subscription#getModelRelationSchema
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/Subscriptions/getModelRelationSchema",
              method: "POST",
            },

            // INTERNAL. Use Customer.subscriptions.findById() instead.
            "::findById::Customer::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "GET",
            },

            // INTERNAL. Use Customer.subscriptions.destroyById() instead.
            "::destroyById::Customer::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.subscriptions.updateById() instead.
            "::updateById::Customer::subscriptions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Customers/:id/subscriptions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Customer.subscriptions() instead.
            "::get::Customer::subscriptions": {
              isArray: true,
              url: urlBase + "/Customers/:id/subscriptions",
              method: "GET",
            },

            // INTERNAL. Use Customer.subscriptions.create() instead.
            "::create::Customer::subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use Customer.subscriptions.createMany() instead.
            "::createMany::Customer::subscriptions": {
              isArray: true,
              url: urlBase + "/Customers/:id/subscriptions",
              method: "POST",
            },

            // INTERNAL. Use Customer.subscriptions.destroyAll() instead.
            "::delete::Customer::subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions",
              method: "DELETE",
            },

            // INTERNAL. Use Customer.subscriptions.count() instead.
            "::count::Customer::subscriptions": {
              url: urlBase + "/Customers/:id/subscriptions/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Subscription#updateOrCreate
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#update
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#destroyById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Subscription#removeById
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Subscription` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Subscription#modelName
        * @propertyOf lbServices.Subscription
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Subscription`.
        */
        R.modelName = "Subscription";


            /**
             * @ngdoc method
             * @name lbServices.Subscription#customer
             * @methodOf lbServices.Subscription
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Subscription::customer"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/containers/:container/download/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getSchema
             * @methodOf lbServices.Container
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/containers/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getAbsoluteSchema
             * @methodOf lbServices.Container
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/containers/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#save
             * @methodOf lbServices.Container
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/containers/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getDetailSchema
             * @methodOf lbServices.Container
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/containers/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getModelRelationSchema
             * @methodOf lbServices.Container
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/containers/getModelRelationSchema",
              method: "POST",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ProductOrder
 * @header lbServices.ProductOrder
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ProductOrder` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ProductOrder",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ProductOrders/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ProductOrder.order() instead.
            "prototype$__get__order": {
              url: urlBase + "/ProductOrders/:id/order",
              method: "GET",
            },

            // INTERNAL. Use ProductOrder.product() instead.
            "prototype$__get__product": {
              url: urlBase + "/ProductOrders/:id/product",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#create
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ProductOrders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#createMany
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ProductOrders",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#upsert
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/ProductOrders",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#exists
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ProductOrders/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#findById
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Find a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ProductOrders/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#find
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ProductOrders",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#findOne
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ProductOrders/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#updateAll
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/ProductOrders/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#deleteById
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ProductOrders/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#count
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ProductOrders/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#prototype$updateAttributes
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Update attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/ProductOrders/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#createChangeStream
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ProductOrders/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#getSchema
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Send the schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getSchema": {
              url: urlBase + "/ProductOrders/getSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#getAbsoluteSchema
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Send the absolute schema of the model requested.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getAbsoluteSchema": {
              url: urlBase + "/ProductOrders/getAbsoluteSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#save
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Remote method for saving data with its depedencies
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` -
             *
             *  - `schema` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{object=}` -
             */
            "save": {
              url: urlBase + "/ProductOrders/save",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#getDetailSchema
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Get the detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getDetailSchema": {
              url: urlBase + "/ProductOrders/getDetailSchema",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#getModelRelationSchema
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Get the relation detail schema for a particular model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `schema` – `{object=}` -
             */
            "getModelRelationSchema": {
              url: urlBase + "/ProductOrders/getModelRelationSchema",
              method: "POST",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#updateOrCreate
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#update
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#destroyById
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#removeById
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductOrder` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.ProductOrder#modelName
        * @propertyOf lbServices.ProductOrder
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ProductOrder`.
        */
        R.modelName = "ProductOrder";


            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#order
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Fetches belongsTo relation order.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Order` object.)
             * </em>
             */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::ProductOrder::order"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ProductOrder#product
             * @methodOf lbServices.ProductOrder
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::ProductOrder::product"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
