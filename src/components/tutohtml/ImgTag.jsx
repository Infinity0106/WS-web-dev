import React from "react";

export default class ImgTags extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
          alt="My dog pet"
          width={600}
          height={300}
        />
      </div>
    );
  }
}
