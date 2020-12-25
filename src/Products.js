import React from "react";

export default function Products() {
  return (
    <div className="container" id="signin">
      <h1>Signin Form</h1>
      <input type="email" placeholder="Enter email" />
      <br />
      <input type="password" placeholder="Enter password" />
      <br />
      <input type="submit" value="Signin" />
    </div>
  );
}
