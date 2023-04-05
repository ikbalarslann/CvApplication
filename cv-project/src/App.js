import {
  FGeneralInformation,
  FEducationalExperience,
  FPracticalExperience,
} from "./components/forms";
import React, { Component } from "react";

class App extends Component {
 
  render() {
    

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
