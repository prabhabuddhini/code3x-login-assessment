import { Routes, Route, useNavigate } from "react-router-dom";
import AccessToken from "./AccessToken";
import "./App.css";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const provider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential =
          GoogleAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;

        navigate("/access-token", { state: token });
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fb",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardContent
          sx={{
            padding: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Welcome
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                textAlign: "center",
              }}
            >
              Sign in with your Google account to continue.
            </Typography>

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleGoogleSignIn}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                padding: 1.5,
                fontSize: "16px",
              }}
            >
              Google Sign-In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/access-token" element={<AccessToken />} />
    </Routes>
  );
}

export default App;