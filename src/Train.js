import React from "react";
import "./Train.css";
import gif from "./Images/hp.gif";

const Train = () => {
  return (
    <div>
      <div className="CenterText">
        {/* <div>
        <input type="file" />
      </div> */}
        <div className="Later">Coming Soon.</div>
        <img src={gif} alt="loading.." className="loader" />
      </div>

      <div class="subText">Anytime before AI winter.</div>
    </div>
  );
};

export default Train;
