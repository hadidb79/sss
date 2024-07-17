import { Box, Typography, Container, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";
import { useDispatch, useSelector } from "react-redux";
import { State, addUser } from "../../store/userSlice";
import MobileFooter from "../footer/MobileFooter";
import NextPage from "../NextPage";
import useHandleData from "../../hooks/useHandleData";
import { SubscriptionsBtns } from "../../constants/plans";
const Plans = () => {
  const user: State = useSelector((state: any) => state.user);

  const [isActive, setIsActive] = useState<string>("");
  const [path, setPath] = useState<string>("addOns");

  const dispatch = useDispatch();
  const handleData = useHandleData(user, "plans");
  function handleToggle(name: string) {
    setIsActive(name);
    console.log(name);

    dispatch(
      addUser({
        ...user,
        plans_subscription: name,
      })
    );
  }

  console.log(user);

  function Buttonn({ name, selected, onClick }: any) {
    return (
      <Button
        onClick={() => onClick(name)}
        sx={{
          textTransform: "none",
          color: `${name === selected ? "#0f0f59" : "rgb(112, 110, 110)"}`,
          fontWeight: "bold",
        }}
      >
        {name}
      </Button>
    );
  }

  return (
    <Box>
      <Box
        component="div"
        textAlign="start"
        sx={{
          width: { xs: "80%", sm: "700px" },
          height: { xs: "400px", sm: "500px" },
          backgroundColor: "white",
          borderRadius: 4,
          position: { xs: "absolute", sm: "relative" },
          top: { xs: "50%", sm: 0 },
          left: { xs: "50%", sm: 0 },
          transform: { xs: "translate(-50%,-50%)", sm: "none" },
          p: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h5">Select Plans</Typography>
        <Typography fontSize={14}>
          You have the option of monthly or yearly billing
        </Typography>

        <Stack
          onClick={(e) => handleData(e)}
          sx={{ mt: { xs: 1, sm: 7 } }}
          component="div"
        >
          <Box
            sx={{
              border: "3px solid  #9d9d9d",
              borderRadius: "10px",
              mb: { xs: 1, sm: 6 },
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "700px" },
              height: "50px",
              "&:hover": {
                background: "#fdf3ff",
                cursor: "pointer",
                borderColor: "#894596",
              },
              transition: ".4s all",
            }}
          >
            <Container
              id="1"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <ArchiveIcon sx={{ mr: 3 }} />
              <Stack sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography sx={{ fontWeight: "bold" }}>Archive</Typography>
                <Typography>$9/mo</Typography>
              </Stack>
            </Container>
            <Container id="1"></Container>
          </Box>
          <Box
            id="2"
            sx={{
              border: "3px solid #9d9d9d",
              borderRadius: "10px",
              mb: { xs: 1, sm: 6 },
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "700px" },

              height: "50px",
              "&:hover": {
                background: "#fdf3ff",
                cursor: "pointer",
                borderColor: "#894596",
              },
              transition: ".4s all",
            }}
          >
            <Container
              id="2"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <EditAttributesIcon sx={{ mr: 3 }} />
              <Stack sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography id="2" sx={{ fontWeight: "bold" }}>
                  Advanced
                </Typography>
                <Typography id="2">$12/mo</Typography>
              </Stack>
            </Container>
            <Container id="2"></Container>
          </Box>
          <Box
            id="3"
            sx={{
              border: "3px solid  #9d9d9d",
              borderRadius: "10px",
              mb: { xs: 1, sm: 6 },
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "100%", sm: "700px" },

              height: "50px",
              "&:hover": {
                background: "#fdf3ff",
                cursor: "pointer",
                borderColor: "#894596",
              },
              transition: ".4s all",
            }}
          >
            <Container
              id="3"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <SportsEsportsIcon sx={{ mr: 3 }} />
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: 70,
                }}
              >
                <Typography id="3" sx={{ fontWeight: "bold" }}>
                  Pro
                </Typography>
                <Typography id="3">$15/mo</Typography>
              </Stack>
            </Container>
            <Container id="3"></Container>
          </Box>
          <Box
            component="div"
            sx={{
              position: "relative",
              width: 200,
              height: 50,
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "7px",
              backgroundColor: "#eee",
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 17,
                left: 85,
                backgroundColor: "#0f0f59",
                width: 30,
                height: 17,
                borderRadius: 10,
              }}
            >
              <Box
                sx={{
                  top: 2.9,
                  left: 10,
                  position: "absolute",
                  width: 10,
                  height: 10,
                  bgcolor: "white",
                  borderRadius: "50%",
                  transform: `translateX(${
                    isActive === "Monthly"
                      ? "-80%"
                      : isActive === "Yearly"
                      ? "+80%"
                      : "0"
                  })`,
                  transition: ".3s all",
                }}
              ></Box>
            </Box>
            {SubscriptionsBtns.map((btn: string, index: number) => {
              return (
                <Buttonn
                  name={btn}
                  selected={isActive}
                  onClick={handleToggle}
                />
              );
            })}
          </Box>
        </Stack>
        <NextPage setIsValuable={() => {}} path={path} user={user} />
      </Box>

      <MobileFooter setConfirmed={() => {}} path={path} user={user} />
    </Box>
  );
};

export default Plans;
