import { Box, Button, Typography, Stack, Container } from "@mui/material";
import Bg from "../../images/bggg.png";

import { useDispatch, useSelector } from "react-redux";
import { State, addUser } from "../../store/userSlice";
import { useIsNotEmpty } from "../../hooks/useIsNotEmpty";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES, Routes } from "../../routes/routers";
import { useState } from "react";
const Steps = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState("");
  const user: State = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const IsNotEmpty = useIsNotEmpty(user, path);
  return (
    <Box sx={{}}>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100vw", sm: "100%" },
          height: { xs: "30vh", sm: "100vh" },
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflowX: "hidden",
        }}
        className="steps"
      >
        <Container
          sx={{
            mt: 5,
            textJustify: "left",
            display: { xs: "flex", sm: "grid" },
          }}
        >
          {PAGE_ROUTES.map((route: Routes, index: number) => {
            const isActive = window.location.pathname === route.path;
            return (
              <Button
                value={route.topic}
                onClick={() => {
                  setPath(route.path);
                  dispatch(addUser({ ...user, isAvailable: true }));
                  IsNotEmpty && user.isAvailable && navigate(route.path);
                }}
                variant={isActive ? "neutral" : "text"}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  mb: 5,
                  width: 300,
                }}
              >
                <Typography
                  sx={{
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    border: "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  {route.topic}
                </Typography>
              </Button>
            );
          })}
        </Container>
      </Box>

      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          height: "63vh",
          backgroundColor: "rgb(219, 246, 255)",
          width: "100vw",
          zIndex: 3,
        }}
      ></Box>
    </Box>
  );
};

export default Steps;
