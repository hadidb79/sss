import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Hidden,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../store/userSlice";
import MobileFooter from "../footer/MobileFooter";
import LastPage from "../LastPage";

const Finish = () => {
  const user: State = useSelector((state: any) => state.user);
  const [path, setPath] = useState("f");
  const [confirmed, setConfirmed] = useState(false);
  const USER: State = JSON.parse(localStorage.getItem("user") as string);

  return (
    <Box>
      {confirmed ? (
        <LastPage />
      ) : (
        <Box
          component="div"
          textAlign="start"
          sx={{
            width: { xs: "80%", sm: "700px" },
            height: { xs: "380px", sm: "500px" },
            backgroundColor: "white",
            borderRadius: 4,
            position: { xs: "absolute", sm: "relative" },
            top: { xs: "50%", sm: 0 },
            left: { xs: "50%", sm: 0 },
            transform: { xs: "translate(-50%,-50%)", sm: "none" },
            p: { xs: 2, sm: 0 },
          }}
        >
          <Typography variant="h5">Confirm your information</Typography>
          <Typography fontSize={14}>
            Make sure that its you <strong>{USER?.name?.toUpperCase()}</strong>
          </Typography>

          <Stack sx={{ mt: 7 }} component="div">
            <Box
              sx={{
                border: "3px solid  #9d9d9d",
                borderRadius: "10px",
                mb: 6,
                display: "flex",
                justifyContent: "space-between",
                width: { xs: "95%", sm: "700px" },
                height: "auto",
              }}
            >
              <Container
                sx={{
                  pt: 1,
                  pb: 3,
                  // mb:5
                }}
              >
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: { xs: "60vw", sm: "670px" },
                    pb: 3,
                  }}
                >
                  <Typography>
                    {USER?.plans_type}
                    {`(${USER?.plans_subscription})`}
                  </Typography>
                  <Typography>{USER?.plans_price}</Typography>
                </Container>
                <Divider />
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: { xs: "60vw", sm: "670px" },
                    mt: 2,
                  }}
                >
                  <Typography>{USER?.add_ons_type}</Typography>
                  <Typography>{USER?.add_ons_price}</Typography>
                </Container>
              </Container>
              <Container></Container>
            </Box>
          </Stack>
          <MobileFooter setConfirmed={setConfirmed} user={user} path={path} />
        </Box>
      )}
    </Box>
  );
};

export default Finish;
