import React, { useState } from "react";
// import "./Form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="demoForm">
      <h2>Sign up</h2>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          defaultValue={email}
          onChange={(e) => {
            // console.log(e.target.value);
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          defaultValue={password}
          onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={() => {}}>
        Sign up
      </button>
    </form>
  );
}
