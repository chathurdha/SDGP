import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
<div className="card">
  <div className="container">
    <h1>Sign In</h1>
    <form>
        <input type="text" placeholder="Division Number" />
        <input type="text" placeholder="NIC"/>
        <input type="password" placeholder="Password"/>
      <button>Sign In</button>
    </form>
  </div>
  </div>);
}

export default SignIn;