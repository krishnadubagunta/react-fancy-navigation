'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

const ReactFancyNavigation = (props) => {
    return React.createElement("div", null,
        React.createElement("header", null, "Div Header"),
        React.createElement("pre", { dangerouslySetInnerHTML: { __html: JSON.stringify(props, undefined, 2) } }));
};

module.exports = ReactFancyNavigation;
