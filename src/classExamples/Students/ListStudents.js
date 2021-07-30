import { Component } from "react";

class ListStudents extends Component {
  state = {};
  filterStudents = () => {
    return this.props.showBest
      ? this.props.students.filter((student) => student.grade == "10")
      : this.props.students;
  };
  render() {
    return (
      <div>
        {this.filterStudents().map((student) => (
          <h1 key={student.id}>
            {student.name} has {student.grade}
          </h1>
        ))}
      </div>
    );
  }
}

export default ListStudents;
