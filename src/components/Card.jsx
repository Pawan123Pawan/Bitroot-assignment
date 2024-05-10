import React from "react";

const Card = ({ postData, openModal }) => {
  const dateFormatMethod = (eachDate) => {
    const date = new Date(eachDate * 1000); // Convert Unix timestamp to milliseconds
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };
  return (
    <div className="card" onClick={openModal}>
      <div className="overlay-container">
        <img
          src={postData.thumbnail.large}
          alt="post_image"
          className="image"
        />
        <div className="overlay">Learn more</div>
      </div>
      <div className="content-div">
        <div className="indicate-div">
          <span style={{ background: "#00BBD4" }}></span>{" "}
          <span style={{ background: "#fec109" }}></span>
        </div>
        <h2 className="title">{postData.title}</h2>
        <p className="content">{postData.content}</p>
        <div className="author-div">
          <p className="author">{postData.author.name + " - Product Owner"}</p>
          <p className="date">{dateFormatMethod(postData.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
