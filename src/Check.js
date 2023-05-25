import React from "react";
import { PropTypes } from "prop-types";

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.pressedButton = this.pressedButton.bind(this);
  }

  pressedButton() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.pressedButton()}>Click</button>
      </div>
    );
  }
}

// Check.defaultProps = {
//     text : "nothing"
// }

// Check.propTypes = {
//     number: PropTypes.number,
//     text: PropTypes.string,
// };

export default Check;
