import { Link } from 'react-router-dom';
import Card from '../../components/card';


function Home() {
    return (
    <div className="container mx-auto my-5" style={{maxWidth:"500px"}}>
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      <Card title="1" desc="some text here" />
      <Card title="2" desc="some text here"/>
      <Card title="3" desc="some text here" />

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-link btn-sm">Login</Link>
        <Link to="/signup" className="btn btn-link btn-sm">Sign Up</Link>
      </div>
    </div>


    );
    
}

export default Home;