import "./loader";
import React from "react";
// import * from "./Images";
import "./ImageDisplay.css";
import ImageGallery from "react-image-gallery";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import $ from "jquery";

var imageList = [];
var images = [];

function importAll(r) {
  return r.keys().map(r);
}

imageList = importAll(
  require.context("./Images/Results", false, /\.(jpg|png|svg|gif)$/)
);
imageList.map(image => {
  var ob = {};
  console.log(String(image).split("."));
  ob.original = image;
  ob.thumbnail = image;
  ob.originalTitle =
    String(image).split(".")[1] === "F"
      ? "F.R.I.E.N.D.S"
      : String(image).split(".")[1];
  ob.description =
    String(image).split(".")[1] === "F"
      ? "F.R.I.E.N.D.S"
      : String(image).split(".")[1];
  images.push(ob);
});

// var magnify = () => {
//   console.log($(this));
// };
function SetTitle() {
  var title = $("span");
  title.addClass("new_loc");
  console.log(title);
}

class ImageDisplay extends React.Component {
  componentDidMount() {
    SetTitle();
  }
  render() {
    return (
      <div className="image-container">
        <ImageGallery items={images} infinite={false} />
      </div>
    );
  }
}

export default ImageDisplay;
