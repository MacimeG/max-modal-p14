"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, props.message, " "), /*#__PURE__*/_react.default.createElement("button", {
    onClick: props.close,
    className: "close-button"
  }, "Close"));
};
var _default = Modal;
exports.default = _default;