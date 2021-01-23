import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  //  let name="jack"

  // using State (useState hook)

  // const [name, setName]=useState("Bharath");
  // const [age, setAge]=useState(20);

  // const handleClick=()=>{

  //     console.log("hey ninjas")
  //     setName("jackSparrow")
  //     setAge(25)
  // };

  // blogs data

  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  // above data is hardcoded,

  // below data is fetching from json file in useEffect

  const [blogs, setBlogs] = useState(null);

  // Conditional Loading messages
  const [isPending, setIsPending] = useState(true);

  // setting Error messages
  const [error, setError] = useState(null);

  // useEffect hook

  useEffect(() => {
    console.log("useEffect hook is running");
    // useEffect hook automatically executes when the page is loaded and
    // also when page is reloaded
    console.log(blogs);

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data from the resource");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            console.log(err.message);
            setError(err.message);
          }
        });
    }, 1000);
    return () => {
      console.log("cleared");
      abortCont.abort(); //aborts whatever fetch it is containing
    };
  }, ["http://localhost:8000/blogs"]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {/* <h2>Home page</h2>
            <p>{name} is {age} years old</p>
            <br/>
            <button onClick={handleClick}  type="button" className="btn btn-primary">Click me</button> */}
      {/* usage of props  */}

      {error && <div> {error}</div>}
      {isPending && <div> Loading...! </div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        ></BlogList>
      )}
      {/* Functions as props  */}
      <hr />
      {/* reusing components  */}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's Blogs!"
        ></BlogList>
      )}
      <hr />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's Blogs!"
      ></BlogList> */}
    </div>
  );
};

export default Home;
