import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostContent } from "../utils/util";

const Details = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const fetchPost = useCallback(() => {
    fetchPostContent(slug, setLoading, setPost);
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (post?.title.length === 0) {
    return <p>Something went wrong</p>;
  }

  // const { title, likes, dislikes, published_date, content } = post;

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <header className="details_header">
            <h1 className="details_heading"> {post?.title}</h1>
            <div className="post_details">
              <div>
                <p className="details_date">{post?.published_date}</p>
              </div>
              <div className="reactions-group">
                <button className="reactBtn">
                  Like 👍🏾
                  <span style={{ marginLeft: 5 }}>{post?.likes.length}</span>
                </button>
                <button className="reactBtn unlikeBtn">
                  Dislike 👎🏾
                  <span style={{ marginLeft: 5 }}>{post?.dislikes.length}</span>
                </button>
              </div>
            </div>
          </header>
          <main className="details_body">{post?.content}</main>
        </div>
      )}
    </>
  );
};

export default Details;
