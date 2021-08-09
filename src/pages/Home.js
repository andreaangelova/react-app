import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <p>You can find any book you like</p>
      <p>Choose type</p>
      <Link to="/books?type=action">Action</Link>
      <br />
      <Link to="/books?type=romance">Romance</Link>
      <br />
      <Link to="/books">All Books</Link>
    </div>
  );
};

export default Home;
