import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div>
        <p>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "Login"} to book appointment
        </p>
      </div>{" "}
    </form>
  );
};

export default Login;
