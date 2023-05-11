import React from "react";
import "./index.less";
var Button = function Button(_ref) {
  var type = _ref.type,
    children = _ref.children;
  switch (type) {
    case 'primary':
      return /*#__PURE__*/React.createElement("button", {
        className: "primary"
      }, children);
    case 'success':
      return /*#__PURE__*/React.createElement("button", {
        className: "success"
      }, children);
    case 'warning':
      return /*#__PURE__*/React.createElement("button", {
        className: "warning"
      }, children);
    case 'error':
      return /*#__PURE__*/React.createElement("button", {
        className: "error"
      }, children);
    case 'dashed':
      return /*#__PURE__*/React.createElement("button", {
        className: "dashed"
      }, children);
    default:
      return /*#__PURE__*/React.createElement("button", {
        className: "default"
      }, children);
  }
};
export default Button;