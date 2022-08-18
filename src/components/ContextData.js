import React from "react";
import { useState } from "react";
import { createContext } from "react";
import "./Data.json";
const data = require("./Data.json");
export const myContextdata = createContext();
const ContextData = (props) => {
  const tempUsers = data.Data;
  const [postdata, setPostdata] = useState([]);
  const [register_user, setRegister_user] = useState([]);
  const [logindata, setlogindata] = useState("");
  const [img, setImg] = useState("");
  const [caption, setCaption] = useState("");
  const [postArray, setPostArray] = useState(tempUsers);
  const [comment, setComment] = useState("");
  // console.log(tempUsers);
  return (
    <div>
      <myContextdata.Provider
        value={{
          postdata,
          setPostdata,
          register_user,
          setRegister_user,
          logindata,
          setlogindata,
          img,
          setImg,
          caption,
          setCaption,
          postArray,
          setPostArray,
          comment,
          setComment,
        }}
      >
        {props.children}
      </myContextdata.Provider>
    </div>
  );
};

export default ContextData;
