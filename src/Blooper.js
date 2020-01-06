import React from "react";
import ImageGallery from "react-image-gallery";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./Blooper.css";
import $ from "jquery";

var imageList = [];
var images = [];

function importAll(r) {
  return r.keys().map(r);
}

imageList = importAll(
  require.context("./Images/bloopers", false, /\.(jpg|png|svg|gif)$/)
);
imageList.map(image => {
  var ob = {};
  // console.log(
  //   String(image)
  //     .split(".")[0]
  //     .split("/static/media/")[1]
  // );
  ob.original = image;
  ob.thumbnail = image;
  ob.originalTitle = String(image).split(".")[1];
  ob.description = String(image).split(".")[1];
  images.push(ob);
});

function SetTitle() {
  var title = $("span");
  title.addClass("new_loc");
  console.log(title);
}

class Blooper extends React.Component {
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

export default Blooper;
