import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

function AccessToken() {
  const location = useLocation();
  const navigate = useNavigate();

  const token = location.state;

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
          maxWidth: 700,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <CardContent
          sx={{
            padding: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            Google Sign-In Successful
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              marginBottom: 3,
            }}
          >
            Your access token is shown below.
          </Typography>

          <Box
            sx={{
              backgroundColor: "#f1f3f4",
              padding: 2,
              borderRadius: 2,
              wordBreak: "break-all",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "monospace",
              }}
            >
              {token}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate("/")}
            sx={{
              marginTop: 3,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Back to Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AccessToken;