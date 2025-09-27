import { Component } from "react";
class Counter extends Component {
  state = { count: 0, animate: false };

  triggerAnimation = () => {
    this.setState({ animate: true });
    setTimeout(() => this.setState({ animate: false }), 300);
  };

  onIncrement = () => {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      this.triggerAnimation
    );
  };

  onDecrement = () => {
    this.setState(
      prevState => ({ count: prevState.count - 1 }),
      this.triggerAnimation
    );
  };

  render() {
    const { count, animate } = this.state;
    return (
      <div className="counter-container">
        <h1 className="counter-title">Counter</h1>
        <div className={`counter-value${animate ? ' counter-value-animate' : ''}`}>{count}</div>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={this.onIncrement}>Increment</button>
          <button className="counter-btn" onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;