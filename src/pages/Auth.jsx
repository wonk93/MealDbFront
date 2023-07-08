import { Box, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export default function Auth() {
  return (
    <Box>
      <Link to={"/login"}>
        <Button>Login</Button>
      </Link>
      <Link to={"/signup"}>
        <Button>Signup</Button>
      </Link>
    </Box>
  );
}