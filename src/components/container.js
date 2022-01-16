import axios from "axios";
import { useState, useEffect } from "react";
import "./container.css"

const Container = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="div" key={post.id}>
            <h5><h1 className="id">user ID:</h1>{post.userId}</h5>
            <h5><h1 className="tit">post title:</h1>{post.title}</h5>
            <h5><h1 className="bod">post body:</h1>{post.body}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Container;
