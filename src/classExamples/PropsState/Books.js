import { Component } from "react";
import Book from "./Book";
import Publish from "./Publish";

class Books extends Component {
  state = {
    books: [
      { id: "1", name: "Book name", author: "Author" },
      { id: "2", name: "Book name 2", author: "Author 2" },
      { id: "3", name: "Book name 3", author: "Author 3" },
    ],
    published: "date 2021",
  };

  changeBooks = () => {
    this.setState({
      books: [
        { id: "4", name: "Book name 4", author: "Author 4" },
        { id: "5", name: "Book name 5", author: "Author 5" },
        { id: "6", name: "Book name 6", author: "Author 6" },
      ],
    });
  };
  render() {
    return (
      <div>
        <h1>Books</h1>
        {this.state.books.map((book) => {
          return (
            <Book key={book.id} name={book.name} author={book.author}></Book>
          );
        })}
        <button onClick={this.changeBooks}>Change Books</button>
        <Publish published={this.state.published}></Publish>
        <button onClick={() => this.setState({ published: "date 2020" })}>
          Change Date
        </button>
      </div>
    );
  }
}

export default Books;
