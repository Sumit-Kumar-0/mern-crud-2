import React, { useState } from "react";
import Layout from "../components/Layout";

export default function SingleUser() {
    const [user, setUser] = useState()

  return (
    <Layout>
      <div className="single">
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <div className="btns">
          <button>delete</button>
          <button>edit</button>
        </div>
      </div>
    </Layout>
  );
}
