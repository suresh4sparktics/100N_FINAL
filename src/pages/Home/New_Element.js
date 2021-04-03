import { Grid } from "@material-ui/core";
import React from "react";
import { ScrollElement } from "react-scroll";
var createReactClass = require("create-react-class");

var Element = createReactClass({
  render: function () {
    return (
      <Grid
        {...this.props}
        ref={(el) => {
          this.props.parentBindings.domNode = el;
        }}
      >
        {this.props.children}
      </Grid>
    );
  },
});

export default ScrollElement(Element);
