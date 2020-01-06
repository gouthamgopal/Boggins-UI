import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="header">Boggins AI.</h1>
      </div>
      <div className="content">
        <h2>SRGAN that generates better resolution images</h2>
      </div>
      <footer>
        {/* <div>Created By</div> */}
        <div className="footer">
          <div>Bobby Rathore</div>
          <div>Goutham Gopal</div>
          <div>Yifan Yin</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
