import { Component } from "react";
import ListStudents from "./ListStudents";
import { studentStyles } from "./StudentStyle";

class Students extends Component {
  students = [
    { id: "1", name: "Petko", grade: "10" },
    { id: "2", name: "Jana", grade: "8" },
    { id: "3", name: "Mile", grade: "6" },
    { id: "4", name: "Sabina", grade: "10" },
  ];
  state = {
    showBest: false,
  };

  render() {
    return (
      <div>
        <h1 style={studentStyles.studentH1}>This are the Students</h1>
        <label style={studentStyles.studentLabel}>Show best</label>
        <input
          type="checkbox"
          onChange={() => this.setState({ showBest: !this.state.showBest })}
        />
        <ListStudents
          students={this.students}
          showBest={this.state.showBest}
        ></ListStudents>
      </div>
    );
  }
}

export default Students;
