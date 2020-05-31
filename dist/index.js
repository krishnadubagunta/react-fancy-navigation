'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var ReactFancyNavigation = function ReactFancyNavigation(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, "Div Header"), /*#__PURE__*/React.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(props, undefined, 2)
    }
  }));
};

module.exports = ReactFancyNavigation;
