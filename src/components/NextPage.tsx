import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { State } from "../store/userSlice";
import { addUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { FormValue } from "./infoCon/PersonalInfo";
type UserProps = {
  user: State;
  path: string;
  // isValuable? :boolean,
  setIsValuable: React.Dispatch<React.SetStateAction<boolean>>;
};
const NextPage = ({ user, path, setIsValuable }: UserProps) => {
  let IsNOtEmpty: undefined | string;
  switch (path) {
    case "plans":
      IsNOtEmpty = user.email_address && user.name && user.phone_number;
      break;
    case "addOns":
      IsNOtEmpty =
        user.plans_type && user.plans_price && user.plans_subscription;
      break;
    default:
      IsNOtEmpty = user.add_ons_type && user.add_ons_price;
      break;
  }

  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        IsNOtEmpty && navigate(`/${path}`);
        path === "f" && setIsValuable(true);
        localStorage.setItem("user", JSON.stringify(user));
      }}
      variant="outlined"
      sx={{
        textTransform: "none ",
        textAlign: "end",
        backgroundColor: "blueviolet",
        color: "white",
        display: { xs: "none", sm: "flex" },
        "&:hover": {
          color: "white",
          background: "rgb(118, 59, 154)",
          cursor: "pointer",
        },
        mt: 7,
      }}
    >
      Next Step
    </Button>
  );
};

export default NextPage;
