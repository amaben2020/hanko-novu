export const fetchAllPosts = (setLoading, setPosts) => {
  fetch("http://localhost:4000/posts")
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setPosts(data.posts);
    })
    .catch((err) => console.error(err));
};

export const fetchPostContent = (slug, setLoading, setPost) => {
  fetch("http://localhost:4000/post/details", {
    method: "POST",
    body: JSON.stringify({ slug }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json(res))
    .then((data) => {
      console.log("data", data);
      setLoading(false);
      setPost(data?.post);
    })
    .catch((err) => console.error(err));
};

export const mutateReaction = ({ type, slug, id, setLoading, setMessage }) => {
  fetch(`http://localhost:4000/post/react?type=${type}&id=${id}`, {
    method: "POST",
    body: JSON.stringify({ slug }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      setLoading(true);
      res.json(res);
    })
    .then((res) => {
      setMessage(res);
      setLoading(false);
    });
};
