import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import startvideo from "../videos/bust.mp4";
const Start = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };
  return (
    <>
    <div style= {{
      display: "flex",
      position: "absolute",
      objectFit: "cover",
    }}>
    <video src={startvideo} autoPlay  muted loop  width="100%" height="100%" ></video>
    </div>
    
    <div
      style={{
        position: "relative",
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center",
        marginTop: "600px",
        zIndex: 1,
      }}
    >

        <input
          type="text"
          placeholder="Enter Name"
          ref={inputRef}
          className="form-control" />
        <MDBBtn style={{backgroundColor: "#20C20E" ,width: "100%" }} className="mt-2" onClick={handleClick}>
          Start Game
        </MDBBtn>
      </div></>
  );
};

export default Start;
