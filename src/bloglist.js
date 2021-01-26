import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
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
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <br />
       
        </div>
      ))}
    </div>
  );
};

export default BlogList;
