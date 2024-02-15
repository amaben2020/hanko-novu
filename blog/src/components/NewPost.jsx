import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    setContent("");
    setTitle("");
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h2>MyBlog</h2>
        </Link>

        <div>
          <button className="newPostBtn logOut">Log out</button>
        </div>
      </nav>
      <main className="main">
        <h2 className="heading">Create new post</h2>
        <form className="newPost_form" onSubmit={handleSubmit}>
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            className="newPost_title"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <textarea
            rows={10}
            className="newPost_content"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="newPostBtn submitBtn" type="submit">
            Create Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewPost;
