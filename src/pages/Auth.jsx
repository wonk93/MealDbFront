// import { Box, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <box>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/signup"}>
        <button>Signup</button>
      </Link>
    </box>
  );
}