import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const Modal = ({postData,cancelModal,}) => {

  return (
    <div className={`card modal`}>
      <div className="close-div-icon">
        <IoCloseSharp className="close_icon" onClick={cancelModal} />
      </div>
      <img src={postData.thumbnail.large} alt="post_image" className="image" />

      <div className="content-div">
        <h2 className="title">{postData.title}</h2>
        <p className="content">{postData.content}</p>
        <div className="author-div" style={{justifyContent:"start", gap:"20px"}}>
            <img src={postData.author.avatar} alt="avatar" className="avatar"/>
          <p className="author">{postData.author.name + " - Product Owner"}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
