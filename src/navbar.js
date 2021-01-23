import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>bharath blog</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#3333FF",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>

        {/* the above are normal anchor tag which will request frequently to the server */}
        {/* but when we use the Link to tag the js bundle will handle the request everytime when we request  */}
      </div>
    </nav>
  );
};

export default Navbar;
