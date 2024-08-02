import "./BlogPage.css";
import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});
  const [newBlog, setNewBlog] = useState({ title: "", sub_heading: "", content: "", author: "", date: "" });

  useEffect(() => {
    fetch('https://ibm-sustainable-dev-backend-2.onrender.com/all/blogs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data.data)) {
          setBlogs(data.data || []);
        } else {
          setBlogs([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (index) => {
    setExpanded(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prevState => ({ ...prevState, [name]: value }));
  };

  const addBlog = () => {
    setBlogs(prevBlogs => [...prevBlogs, { ...newBlog, date: new Date().toLocaleDateString() }]);
    setNewBlog({ title: "", sub_heading: "", content: "", author: "", date: "" });
  };

  const deleteBlog = (index) => {
    setBlogs(prevBlogs => prevBlogs.filter((_, i) => i !== index));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='Blog-title'>
      <h1>Blog </h1>

      <div className="new-blog-form">
        <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleInputChange} />
        <input type="text" name="sub_heading" placeholder="Sub-heading" value={newBlog.sub_heading} onChange={handleInputChange} />
        <textarea name="content" placeholder="Content" value={newBlog.content} onChange={handleInputChange} />
        <input type="text" name="author" placeholder="Author" value={newBlog.author} onChange={handleInputChange} />
        <button onClick={addBlog}>Add Content</button>
      </div>

      <div className="blog">
        {blogs.map((blog, index) => (
          <div className="blogcard" key={index}>
            <h2>{blog.title}</h2>
            <h3>{blog.sub_heading}</h3>
            <p className={expanded[index] ? 'expanded' : 'collapsed'}>
              {blog.content}
            </p>
            <button onClick={() => toggleExpand(index)}>
              {expanded[index] ? 'Less details' : 'More details'}
            </button>
            <button onClick={() => deleteBlog(index)}>Delete</button>
            <p><small>By {blog.author} on {blog.date}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
