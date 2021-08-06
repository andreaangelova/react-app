import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
