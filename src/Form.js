import React, { useState } from "react";
// import "./Form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validateFields = (fieldName, value) => {
    const fieldValidationErrors = formErrors;
    switch (fieldName) {
      case "email":
        setEmailValid(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        // console.log("email validation", emailValid);
        fieldValidationErrors.email = emailValid ? "" : "is invalid";
        setFormErrors(fieldValidationErrors);
        // console.log(formErrors);
        break;
      case "password":
        setPasswordValid(value.length >= 6);
        // console.log("password validation", passwordValid);
        fieldValidationErrors.password = passwordValid
          ? ""
          : "must contain more than 6 characters";
        setFormErrors(fieldValidationErrors);
        // console.log(formErrors);
        break;
      default:
        break;
    }
    validateForm();
  };

  const validateForm = () => {
    setFormValid(emailValid && passwordValid);
    // console.log("form valid: ", formValid);
  };

  const errorClass = (error)=>{
    return(error.length === 0 ? '' : 'has-error')
  }

  return (
    <form className="demoForm">
      <h2>Sign up</h2>
      <div className={`form-group ${errorClass(formErrors.email)}`}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          defaultValue={email}
          onChange={(e) => {
            // console.log(e.target.value);
            setEmail(e.target.value);
            validateFields("email", e.target.value);
          }}
        />
      </div>
      <div className={`form-group ${errorClass(formErrors.password)}`}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          defaultValue={password}
          onChange={(e) => {
            // console.log(e.target.value);
            setPassword(e.target.value);
            validateFields("password", e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!formValid}
        onClick={() => {}}
      >
        Sign up
      </button>
    </form>
  );
}
