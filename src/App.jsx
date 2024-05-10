import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";

const App = () => {
  const [postData, setPostData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    getPostData();
  }, []);

  // fatched post data here
  const getPostData = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      );
      const postData = await response.json();
      setPostData(postData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const openModal = (index) => {
    setModalData(postData[index]);
    setModalIsOpen(true);
  };

  return (
    <>
      <div className={`main-container ${modalIsOpen ? "effect" : null}`}>
        <div className={`container `}>
          {postData?.map((postData, index) => (
            <Card
              key={postData.id}
              postData={postData}
              openModal={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      {modalIsOpen ? (
        <Modal postData={modalData} cancelModal={() => setModalIsOpen(false)} />
      ) : null}
    </>
  );
};

export default App;
