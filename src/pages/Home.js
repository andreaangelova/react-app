import React from "react";
import { Suspense } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Description = React.lazy(() => import("./Description"));

const Home = () => {
  const [showDescription, setDescription] = useState(false);
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>
        <h1>This is Home page</h1>
        <p>You can find any book you like</p>
        <p>Choose type</p>
        <Link to="/books?type=action">Action</Link>
        <br />
        <Link to="/books?type=romance">Romance</Link>
        <br />
        <Link to="/books">All Books</Link>
        <br />
        <button onClick={() => setDescription(true)}>Show more text</button>
        {showDescription && <Description />}
      </div>
    </Suspense>
  );
};

export default Home;
