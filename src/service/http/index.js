/**
 * Service for sending network requests.
 */

const CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' }
const COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' }
const JSON_CONTENT_TYPE = { 'Content-Type': 'application/json' }

import cors from './interceptor/cors'
import body from './interceptor/body'
import jsonp from './interceptor/jsonp'
import before from './interceptor/before'
import method from './interceptor/method'
import header from './interceptor/header'
import timeout from './interceptor/timeout'
import Client from './client/index'
import Request from './request'

import {assign, defaults, error} from '../util'

export default function Http(options) {

  var self = this || {},
    client = Client(self)

  defaults(options || {}, self.$options, Http.options)

  Http.interceptors.forEach((handler) => {
    client.use(handler)
  })

  return client(new Request(options)).then((response) => {
    return response.ok
      ? response
      : Promise.reject(response)
  }, (response) => {
    if (response instanceof Error) {
      error(response)
    }
    return Promise.reject(response)
  })
}

Http.interceptors = [before, timeout, method, body, jsonp, header, cors]
Http.options = {}

Http.headers = {
  put: JSON_CONTENT_TYPE,
  post: JSON_CONTENT_TYPE,
  patch: JSON_CONTENT_TYPE,
  delete: JSON_CONTENT_TYPE,
  custom: CUSTOM_HEADERS,
  common: COMMON_HEADERS
};

['get', 'delete', 'head', 'jsonp'].forEach((method) => {

  Http[method] = function (url, options) {
    return this(assign(options || {}, {url, method}))
  }

});

['post', 'put', 'patch'].forEach((method) => {

  Http[method] = function (url, body, options) {
    options.params = body
    return this(assign(options || {}, {url, method, body}))
  }

})
