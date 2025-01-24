import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <nav>
        <Link to="/about">Go to About</Link>
      </nav>
    </>
  );
};

export default Home;
