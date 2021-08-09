import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <h2>logo</h2>
      <ul className="ulNav">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <NavLink activeClassName="active" to="/home">
            Home link
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/books">
            Books link
          </NavLink>
        </li>
      </ul>
      <button onClick={props.setIsLoggedIn}>Log in</button>
    </nav>
  );
};

export default Nav;
