import React, { Component } from "react";

class Display extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    );
  }
}

export default Display;
