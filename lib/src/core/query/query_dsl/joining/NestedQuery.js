"use strict";
var lodash_1 = require("lodash");
var lodash_2 = require("lodash");
var allowedOptions = ["score_mode", "inner_hits"];
function NestedQuery(path, filter, options) {
    if (options === void 0) { options = {}; }
    return {
        nested: lodash_1.assign({
            path: path, filter: filter
        }, lodash_2.pick(options, allowedOptions))
    };
}
exports.NestedQuery = NestedQuery;
//# sourceMappingURL=NestedQuery.js.map