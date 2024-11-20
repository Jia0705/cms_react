import { Link } from 'react-router-dom';

function UserManage () {
    return(
        <div className="container mx-auto my-5" style={{maxwidth: "700px"}}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Users</h1>
        <div className="text-end">
          <Link to="/UserAdd" className="btn btn-primary btn-sm"
            >Add New User</Link>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>Jack</td>
              <td>jack@gmail.com</td>
              <td><span className="badge bg-success">User</span></td>
              <td className="text-end">
                <div className="buttons">
                  <Link to="/UserEdit"
                    className="btn btn-success btn-sm me-2"
                    ><i className="bi bi-pencil"></i></Link>
                  <Link to="/UserChangePassword"
                    className="btn btn-warning btn-sm me-2"
                    ><i className="bi bi-key"></i></Link>
                  <Link to="#" className="btn btn-danger btn-sm"
                    ><i className="bi bi-trash"></i></Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jane</td>
              <td>jane@gmail.com</td>
              <td><span className="badge bg-info">Editor</span></td>
              <td className="text-end">
                <div className="buttons">
                  <Link to="/UserEdit"
                    className="btn btn-success btn-sm me-2"
                    ><i className="bi bi-pencil"></i></Link>
                  <Link to="/UserChangePassword"
                    className="btn btn-warning btn-sm me-2"
                    ><i className="bi bi-key"></i></Link>
                  <Link to="#" className="btn btn-danger btn-sm"
                    ><i className="bi bi-trash"></i></Link>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>John</td>
              <td>john@gmail.com</td>
              <td><span className="badge bg-primary">Admin</span></td>
              <td className="text-end">
                <div className="buttons">
                  <Link to="/UserEdit"
                    className="btn btn-success btn-sm me-2"
                    ><i className="bi bi-pencil"></i></Link>
                  <Link to="/UserChangePassword"
                    className="btn btn-warning btn-sm me-2"
                    ><i className="bi bi-key"></i></Link>
                  <Link to="#" className="btn btn-danger btn-sm"
                    ><i className="bi bi-trash"></i></Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/Dashboard" className="btn btn-link btn-sm"
          ><i className="bi bi-arrow-left"></i> Back to Dashboard</Link>
      </div>
    </div>
    )
}

export default UserManage;