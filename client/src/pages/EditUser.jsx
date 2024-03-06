import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const {id} = useParams()

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getSingleUser = async () => {
    
    const newUser = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await newUser.json();
    console.log(response);
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <Layout>
      <form className="add-user">
        <h1>add a new user</h1>
        <div className="input">
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={data.name}
            placeholder="type your name..."
          />
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={data.email}
            placeholder="type your email..."
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={data.password}
            placeholder="type your password..."
          />
        </div>
        <button type="submit">add user</button>
      </form>
    </Layout>
  );
}
