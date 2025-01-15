import { useNavigate, Link, useParams } from "react-router-dom";
import { useState } from "react";

function ManagePostsEdit() {
  const navigate = useNavigate();
  const { post_id } = useParams();

  // 1. load the posts data from the localstorage (done)
  const stringPosts = localStorage.getItem("posts");
  //turn string to arr
  let posts = JSON.parse(stringPosts);
  //if not found, return empty
  if (!posts) {
    posts = [];
  }
  // 2. FIND the selected post from the posts data using the post_id (done) [x]
  const foundPost = posts.find((post) => post.id === post_id);

  // 3. assign the title, content, and status of the selected post as the default value for the states
  const [title, setTitle] = useState(foundPost ? foundPost.title : "");
  const [content, setContent] = useState(foundPost ? foundPost.content : "");
  const [status, setStatus] = useState(foundPost ? foundPost.status : "");

  const handlePostUpdate = () => {
    // use .map to update the selected post data inside the posts data(title, content, status)
    let newData = posts.map((post) =>
      post.id === post_id
        ? { ...post, title: title, content: content, status: status }
        : post
    );
    // convert the posts array into string format (JSON string) (done)
    let updatePosts = JSON.stringify(newData);
    // save the updated posts into local storage (done)
    localStorage.setItem("posts", updatePosts);
    // redirect back to /manage-posts (done)
    navigate("/manage-posts");
  };
  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Edit Post</h1>
        </div>
        <div className="card mb-2 p-4">
          <form>
            <div className="mb-3">
              <label for="post-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="post-title"
                value={title}
                onChange={(event) => {
                  // update the taskName state (done)
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="post-content"
                rows="10"
                value={content}
                onChange={(event) => {
                  // update the taskName state (done)
                  setContent(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Status
              </label>
              <select
                className="form-control"
                id="post-status"
                name="status"
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
                value={status}
              >
                <option value="review">Pending for Review</option>
                <option value="publish">Publish</option>
              </select>
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  // call the handlePostUpdate function (done)
                  handlePostUpdate();
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-primary">
          <Link to="/manage-posts" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagePostsEdit;
