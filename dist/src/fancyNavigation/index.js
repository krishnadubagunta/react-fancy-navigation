import React from 'react';
const ReactFancyNavigation = (props) => {
    return React.createElement("div", null,
        React.createElement("header", null, "Pre Header"),
        React.createElement("pre", { dangerouslySetInnerHTML: { __html: JSON.stringify(props, undefined, 2) } }));
};
export default ReactFancyNavigation;
//# sourceMappingURL=index.js.map