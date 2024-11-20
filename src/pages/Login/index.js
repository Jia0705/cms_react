function Login () {
    return (
        <div className="container my-5 mx-auto" style={{maxwidth :"500px"}}>
      <h1 className="h1 mb-4 text-center">Login</h1>

      <div className="card p-4">
        <form method="GET" action="/Dashboard">
          <div className="mb-2">
            <label for="email" className="visually-hidden">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="visually-hidden">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      </div>
    );
}

export default Login;