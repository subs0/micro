"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSIONS = exports.isEmpty = exports.isRequired = exports.Category = void 0;
var Category;
(function (Category) {
    Category["resources"] = "resources";
    Category["data-sources"] = "data-sources";
    Category["guides"] = "guides";
    Category["overview"] = "overview";
    Category["resource"] = "resource";
    Category["data"] = "data";
})(Category = exports.Category || (exports.Category = {}));
const isRequired = (str) => str.includes('!');
exports.isRequired = isRequired;
const isEmpty = (obj) => obj.constructor === Object && Object.keys(obj).length === 0;
exports.isEmpty = isEmpty;
/**
 * new versions can be found by looking in the 'network' tab in the browser
 * inspector when visiting the terraform registry page for a provider and
 * search (ctrl + f) for 'include=provider.'
 */
exports.VERSIONS = {
    'terraform-provider-aws': {
        '5.19.0': '43126',
        '5.20.0': '43475',
        '5.21.0': '43740',
    },
};
//# sourceMappingURL=constants.js.map