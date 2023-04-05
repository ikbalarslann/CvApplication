import Display from "./components/display";
import {
  FGeneralInformation,
  FEducationalExperience,
  FPracticalExperience,
} from "./components/forms";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
      },
    });
  };
  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <FGeneralInformation />
        <FEducationalExperience />
        <FPracticalExperience />
      </div>
    );
  }
}

export default App;
