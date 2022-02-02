import React from "react";

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        hello!
        {this.props.children}
        {this.props.onClick}
      </div>
    );
  }
}

export default Button;
