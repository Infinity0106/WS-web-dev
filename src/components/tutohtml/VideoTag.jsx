import React from "react";

export default class VideoTags extends React.Component {
  render() {
    return (
      <div>
        <video controls>
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}
