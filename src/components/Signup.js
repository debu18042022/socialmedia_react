import { Button, Grid, styled, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ContextData from "./ContextData";
import { useContext } from "react";
import { myContextdata } from "./ContextData";

const Customgrid = styled(Grid)({
  marginBottom: 7,
});

const Signup = () => {
  let navigate = useNavigate();

  let { register_user, setRegister_user } = useContext(myContextdata);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getRegData = () => {
    if (name && email && username && password) {
      let temp = {
        r_name: name,
        r_email: email,
        r_username: username,
        r_password: password,
      };

      setRegister_user((currentArray) => [...currentArray, temp]);
      console.table(register_user);
      navigate("/");
    } else {
      alert("all fields are required");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <Grid sx={{ paddingRight: 5, paddingLeft: 5 }}>
          <Grid sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4">Socio Media</Typography>
          </Grid>
          <Customgrid>
            <TextField
              label="Full Name"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </Customgrid>
          <Customgrid>
            <TextField
              label="Email"
              placeholder="Enter Full Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Customgrid>
          <Customgrid>
            <TextField
              label="User Name"
              placeholder="Enter User Name"
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
          </Customgrid>
          <Customgrid>
            <TextField
              label="Password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Customgrid>
          <Grid sx={{ mt: 3, mb: 3 }}>
            {/* <Button variant="contained" component={Link} to="/"> */}
            <Button variant="contained" onClick={getRegData}>
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Signup;
