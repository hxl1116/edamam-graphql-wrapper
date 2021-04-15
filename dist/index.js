"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = new class Api {
  constructor() {
    this._read = true;
    this._typeDefs = [];
    this._resolvers = [];
  }

  async _scan(dir) {
    const files = _fs.default.readdirSync(dir).filter(file => _fs.default.lstatSync(_path.default.join(dir, file)).isFile()).filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.js');

    for (let file of files) {
      let obj = await Promise.resolve(`${_path.default.join(dir, file)}`).then(s => _interopRequireWildcard(require(s)));
      if (obj.typeDefs) this._typeDefs.push(obj.typeDefs);
      if (obj.resolvers) this._resolvers.push(obj.resolvers);
    }
  }

  async getSchema() {
    if (this._read) {
      await this._scan(_path.default.join(__dirname, 'api/'));
      this._read = false;
    }

    return (0, _apolloServerExpress.makeExecutableSchema)({
      typeDefs: this._typeDefs,
      resolvers: this._resolvers
    });
  }

}(); // module.exports = {
//     explorer: new Api()
// }


exports.default = _default;