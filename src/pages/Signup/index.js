import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="container my-5 mx-auto" style={{maxWidth: "500px"}}>
      <h1 className="h1 mb-4 text-center">Sign Up a New Account</h1>

      <div className="card p-4">
        <form method="GET" action="/Dashboard">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm_password" className="form-label"
              >Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              name="confirm_password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-fu">
              Sign Up
            </button>
          </div>
        </form>
      </div>

     
      <div
        className="d-flex justify-content-between align-items-center gap-3 mx-auto pt-3"
      >
        <Link to="/" className="text-decoration-none small"
          ><i className="bi bi-arrow-left-circle"></i> Go back</Link>
        <Link to="/login" className="text-decoration-none small"
          >Already have an account? Login here
          <i className="bi bi-arrow-right-circle"></i></Link>
      </div>
    </div>
    );
}

export default Signup;