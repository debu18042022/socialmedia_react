import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { myContextdata } from "./ContextData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  let { register_user, logindata, setlogindata } = useContext(myContextdata);

  const checkUserLogin = () => {
    let flag = 0;
    if (email && password) {
      register_user.map((item) => {
        if (item.r_email === email) {
          flag = 1;
          if (item.r_password === password) {
            setlogindata(item.r_username);
            navigate("./feed");
          } else {
            alert("password not match");
          }
        }
      });
      if (flag === 0) {
        alert("you hava not registered yet");
      }
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
      <Box sx={{ border: "1px solid gray", textAlign: "center" }}>
        <Grid sx={{ padding: 4 }}>
          <Grid sx={{ mt: 5, mb: 5 }}>
            <Typography variant="h4">Socio Media</Typography>
          </Grid>
          <Grid sx={{ mt: 3, mb: 3 }}>
            <TextField
              id="outlined-required"
              label="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid sx={{ mt: 3, mb: 3 }}>
            <TextField
              id="outlined-required"
              label="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid sx={{ mb: 5 }}>
            {/* <Button variant="contained" component={Link} to="/feed"> */}
            <Button variant="contained" onClick={checkUserLogin}>
              Login
            </Button>
          </Grid>
          <Grid>
            <Typography sx={{ display: "inline-block", marginRight: "5px" }}>
              Don't have an account ?
            </Typography>
            <Button component={Link} to="/signup">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
