import {
  Box,
  Button,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, addUser } from "../../store/userSlice";
import MobileFooter from "../footer/MobileFooter";
import NextPage from "../NextPage";
export type FormValue = {
  name: string;
  email_address: string;
  phone_number: string;
};
const PersonalInfo = () => {
  const user: State = useSelector((state: any) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  const [nameError, setNameError] = useState(false);
  const [phoneError, setNPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [path, setPath] = useState("plans");
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    email_address: "",
    phone_number: "",
  });

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.name)

    function formatEmail(value: string) {
      return `${value}@gmail.com`;
    }

    if (e.target.name === "name" && e.target.value.length <= 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    // console.log(e.target.value.length);

    // console.log(formatEmail(e.target.value.slice(0,e.target.value.length-10)));
    // console.log( e.target.value);

    if (
      e.target.name === "email_address" &&
      formatEmail(e.target.value.slice(0, e.target.value.length - 10)) !==
        e.target.value
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (e.target.name === "phone_number" && e.target.value.length < 11) {
      setNPhoneError(true);
    } else {
      setNPhoneError(false);
    }

    setFormValue((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  useEffect(() => {
    dispatch(
      addUser({
        ...user,
        ["name"]: formValue["name" as keyof FormValue],
        ["email_address"]: formValue["email_address" as keyof FormValue],
        ["phone_number"]: formValue["phone_number" as keyof FormValue],
      })
    );
  }, [formValue]);

  return (
    <Box>
      <Box
        textAlign="start"
        component="form"
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
        <Typography variant="h5">Personal Info</Typography>
        <Typography fontSize={14}>
          Please provide your name , email address and phone number
        </Typography>
        <Box component="form" sx={{ height: "60%", mt: { xs: 1, sm: 10 } }}>
          <InputLabel>Name</InputLabel>
          <TextField
            size="small"
            rows={0}
            name="name"
            value={formValue.name}
            onChange={handleValue}
            error={nameError}
            fullWidth
            sx={{ mb: { xs: 1, sm: 5 } }}
            helperText={nameError && "name must be at least 4 characters"}
          />

          <InputLabel>Email Address</InputLabel>
          <TextField
            required
            size="small"
            name="email_address"
            value={formValue.email_address}
            onChange={handleValue}
            fullWidth
            sx={{ mb: { xs: 1, sm: 5 } }}
            helperText={emailError && "email must contain @gmail.com"}
            inputProps={{
              type: "email",
            }}
            error={emailError}
          />

          <InputLabel>Phone Number</InputLabel>
          <TextField
            size="small"
            name="phone_number"
            value={formValue.phone_number}
            onChange={handleValue}
            fullWidth
            sx={{ mb: { xs: 1, sm: 6 } }}
            error={phoneError}
            helperText={
              phoneError && "phone_number cant be less than 11 characters"
            }
          />
        </Box>
        <NextPage setIsValuable={() => {}} path={path} user={user} />
      </Box>
      <MobileFooter setConfirmed={() => {}} path={path} user={user} />
    </Box>
  );
};

export default PersonalInfo;
