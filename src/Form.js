import React from "react";
// import "./Form.css";

export default function Form() {
  return (
    <form className="demoForm">
      <h2>Sign up</h2>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
  );
}
