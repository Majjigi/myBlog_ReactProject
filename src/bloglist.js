import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  //second way of collecting the props

  // (props) //-> first way of collecting the props

  // const blogs=props.blogs;
  // const title =props.title;

  //   console.log(props, blogs);
  //   console.log(title);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <br />
          <button
            onClick={() => handleDelete(blog.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
