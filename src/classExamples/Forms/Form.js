import { Component } from "react";

class Form extends Component {
  state = { name: "John" };

  ageChanged = (e) => {
    console.log(e.target.value);
    if (e.target.value > 100) {
      alert("Its not true");
    }
    console.log(this);
  };
  submitForm = (e) => {
    e.preventDefault();
    alert("You have submitted the form");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <p>Enter name</p>
          <input type="text"></input>
          <p>Enter age</p>
          <input type="number" onChange={this.ageChanged}></input>
          <p>Enter date</p>
          <input type="date"></input>
          <p>Male?</p>
          <input type="checkbox"></input>
          <p>Submit form</p>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
