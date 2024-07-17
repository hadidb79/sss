import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES, Routes } from "../../routes/routers";
import { State } from "../../store/userSlice";
interface UserProps {
  user: State;
  path: string;
  setConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileFooter = ({ user, path, setConfirmed }: UserProps) => {
  const navigate = useNavigate();
  let infoIsNOtEmpty: undefined | string;
  switch (path) {
    case "plans":
      infoIsNOtEmpty = user.email_address && user.name && user.phone_number;
      break;
    case "addOns":
      infoIsNOtEmpty =
        user.plans_type && user.plans_price && user.plans_subscription;
      break;
    default:
      infoIsNOtEmpty = user.add_ons_type && user.add_ons_price;
      break;
  }

  function prevPage() {
    let count = 0;
    const paths = PAGE_ROUTES.map((item: Routes) => {
      return item.path;
    });
    count++;
    navigate(-1);
    console.log(count);
  }
  return (
    <>
      {path === "f" ? (
        <Box
          sx={{
            height: "7vh",
            backgroundColor: "white",
            width: "100%",

            position: "absolute",
            bottom: 0,
            right: 0,
            display: { xs: "flex", sm: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            px: 5,
          }}
        >
          <Button
            onClick={() => {
              prevPage();
              localStorage.setItem("user", JSON.stringify(user));
            }}
            variant="text"
            sx={{
              textTransform: "none ",
              textAlign: "end",

              color: "black",
              display: { xs: "block" },
            }}
          >
            Get back
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("user", JSON.stringify(user));
              infoIsNOtEmpty && path !== "f" && navigate(`/${path}`);
              setConfirmed(true);
              console.log(user);
            }}
            variant="outlined"
            sx={{
              textTransform: "none ",
              textAlign: "end",
              backgroundColor: "blueviolet",
              color: "white",
              "&:hover": {
                color: "white",
                background: "rgb(118, 59, 154)",
                cursor: "pointer",
              },
            }}
          >
            {path === "f" ? "Confirm" : "Next Step"}
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            height: "7vh",
            backgroundColor: "white",
            width: "100vw",
            zIndex: 4,
            position: "absolute",
            bottom: 0,
            left: 0,
            display: { xs: "flex", sm: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            px: 5,
          }}
        >
          <Button
            onClick={() => {
              prevPage();
              localStorage.setItem("user", JSON.stringify(user));
            }}
            variant="text"
            sx={{
              textTransform: "none ",
              textAlign: "end",
              color: "black",
              display: { xs: "block" },
            }}
          >
            Get back
          </Button>
          <Button
            onClick={() => {
              localStorage.setItem("user", JSON.stringify(user));
              infoIsNOtEmpty && path !== "f" && navigate(`/${path}`);
              setConfirmed(true);
              console.log(user);
            }}
            variant="outlined"
            sx={{
              textTransform: "none ",
              textAlign: "end",
              backgroundColor: "blueviolet",
              color: "white",
              "&:hover": {
                color: "white",
                background: "rgb(118, 59, 154)",
                cursor: "pointer",
              },
            }}
          >
            {path === "f" ? "Confirm" : "Next Step"}
          </Button>
        </Box>
      )}
    </>
  );
};
export default MobileFooter;
