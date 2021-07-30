import { Button, Checkbox, TextField } from "@material-ui/core";
import { Component } from "react";

class FormMaterial extends Component {
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
        <Button variant="outlined" color="secondary">
          Test material
        </Button>
        <form onSubmit={this.submitForm}>
          <p>Enter name</p>
          <TextField type="text" />
          <p>Enter age</p>
          <TextField type="number" onChange={this.ageChanged} />
          <p>Enter date</p>
          <TextField type="date" />
          <TextField type="time" />
          <p>Male?</p>
          <Checkbox checked />
          <p>Submit form</p>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default FormMaterial;
