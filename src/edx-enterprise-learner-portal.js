import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return <div className="py-3 bg-danger text-white">Error</div>;
  },
  domElementGetter() {
    return document.getElementById("@edx/enterprise-learner-portal");
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
