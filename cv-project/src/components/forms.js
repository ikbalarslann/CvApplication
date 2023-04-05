import React, { Component } from "react";

class FGeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="nameInput">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            id="nameInput"
            name="name"
          />

          <label htmlFor="emailInput">Email</label>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            type="text"
            id="emailInput"
            name="email"
          />

          <label htmlFor="phoneInput">Phone number</label>
          <input
            onChange={this.handleChange}
            value={this.state.phoneNumber}
            type="text"
            id="phoneInput"
            name="phoneNumber"
          />

          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}
class FEducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      major: "",
      dateOfStudy: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  onSubmitTask(event) {
    event.preventDefault();
    // Add code to submit form data
  }

  render() {
    return (
      <div>
        <h2>Educational Experience</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="schoolName">School name</label>
          <input
            onChange={this.handleChange}
            value={this.state.schoolName}
            type="text"
            id="schoolName"
          />

          <label htmlFor="major">Major</label>
          <input
            onChange={this.handleChange}
            value={this.state.major}
            type="text"
            id="major"
          />

          <label htmlFor="dateOfStudy">Date of study</label>
          <input
            onChange={this.handleChange}
            value={this.state.dateOfStudy}
            type="text"
            id="dateOfStudy"
          />

          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}

class FPracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      timeSpent: '',
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  onEditTask = () => {
    // Implement edit functionality here
  };

  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="companyNameInput">Company name</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="companyNameInput"
            value={this.state.companyName}
          />

          <label htmlFor="positionTitleInput">Position title</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="positionTitleInput"
            value={this.state.positionTitle}
          />

          <label htmlFor="mainTasksInput">Main tasks of the job</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="mainTasksInput"
            value={this.state.mainTasks}
          />

          <label htmlFor="timeSpentInput">How much time spent in each job</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="timeSpentInput"
            value={this.state.timeSpent}
          />

          <button type="submit">Submit</button>
          <button type="button" onClick={this.onEditTask}>Edit</button>
        </form>
      </div>
    );
  }
}



export  {
  FGeneralInformation,
  FEducationalExperience,
  FPracticalExperience,
};
