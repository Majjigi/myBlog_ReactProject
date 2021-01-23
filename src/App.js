import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./blogDetails";

function App() {
  // Embedding expressions in JSX
  //  const name = "JACK";
  const link = "http://www.google.com";
  //const element = <h1>Hello, {name}</h1>;

  return (
    // router links
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          {/* <h1> App component</h1>
        <h1>Hello, {name}</h1> */}

          <Switch>
            {/* exact match route example */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>

          {/* {<a href={link}>click here</a>} */}
          {/* dynamic values can also be printed like below */}

          {/* {"jack"} */}
        </div>
      </div>
    </Router>
  );
}

export default App;
