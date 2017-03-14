"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var axios = require("axios");
var ESTransport_1 = require("./ESTransport");
var lodash_1 = require("lodash");
var AxiosESTransport = (function (_super) {
    __extends(AxiosESTransport, _super);
    function AxiosESTransport(host, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.host = host;
        _this.options = lodash_1.defaults(options, {
            headers: {},
            searchUrlPath: "/_search"
        });
        if (_this.options.basicAuth) {
            _this.options.headers["Authorization"] = ("Basic " + btoa(_this.options.basicAuth));
        }
        _this.axios = axios.create({
            baseURL: _this.host,
            timeout: AxiosESTransport.timeout,
            headers: _this.options.headers
        });
        return _this;
    }
    AxiosESTransport.prototype.search = function (query) {
        return this.axios.post(this.options.searchUrlPath, query)
            .then(this.getData);
    };
    AxiosESTransport.prototype.getData = function (response) {
        return response.data;
    };
    return AxiosESTransport;
}(ESTransport_1.ESTransport));
AxiosESTransport.timeout = 5000;
exports.AxiosESTransport = AxiosESTransport;
//# sourceMappingURL=AxiosESTransport.js.map