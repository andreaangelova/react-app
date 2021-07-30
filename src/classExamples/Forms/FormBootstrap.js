import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class FormBootstrap extends Component {
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
        <Button variant="primary" size="sm" disabled>
          This is from bootstrap
        </Button>
        <Form onSubmit={this.submitForm}>
          <label>Enter name</label>
          <Form.Control type="text" className="form-control" />
          <p>Enter age</p>
          <input type="number" onChange={this.ageChanged}></input>
          <p>Enter date</p>
          <input type="date"></input>
          <p>Male?</p>
          <input type="checkbox"></input>
          <p>Submit form</p>
          <input type="submit"></input>
        </Form>
      </div>
    );
  }
}

export default FormBootstrap;
