import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

export default function AllUser() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:8080/api/v1/user/all");
    const result = await res.json();
    setData(result.allUsers);
  };

  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/user/edit/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  // const getSingleUser = (id) => {
  //   navigate(`/user/${id}`)
  // };

  const deleteSingleUser = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    getData();
  };

  return (
    <Layout>
      <div className="all">
        {data ? (
          data.map((user, i) => (
            // <div onClick={() => getSingleUser(user._id)} className="single" key={i}>
            <div className="single" key={i}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <div className="btns">
                <button onClick={() => deleteSingleUser(user._id)}>
                  delete
                </button>
                <button onClick={() => editHandler(user._id)}>edit</button>
                <button>see</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
    </Layout>
  );
}
