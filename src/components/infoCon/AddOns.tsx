import { Box, Typography, Container, Stack, Checkbox } from "@mui/material";
import { useState } from "react";
import { State } from "../../store/userSlice";
import { useSelector } from "react-redux";

import MobileFooter from "../footer/MobileFooter";
import NextPage from "../NextPage";
import { ADDONS_DATA } from "../../constants/Addons";
import useHandleData from "../../hooks/useHandleData";

interface ElementProps {
  name: string;
  data: AddOns;
  onClick: any;
  selected: string;
}
interface AddOns {
  id: string;
  title: string;
  caption: string;
  price: string;
}
const AddOnes = () => {
  const user: State = useSelector((state: any) => state.user);
  const [isValuable, setIsValuable] = useState<boolean>(false);
  const [path, setPath] = useState<string>("finish");
  const [isActive, setIsActive] = useState<string>("");
  const handleData = useHandleData(user, "addons");

  function handleCheckBox(name: string) {
    setIsActive(name);
    console.log(name);
  }

  const Element = ({ name, data, onClick, selected }: ElementProps) => {
    return (
      <Box
        onClick={() => onClick(name)}
        sx={{
          border: "3px solid  #9d9d9d",
          borderRadius: "10px",
          mb: { xs: 1, sm: 6 },
          display: "flex",
          justifyContent: "space-between",
          width: { xs: "100%", sm: "700px" },
          height: "70px",
          "&:hover": {
            background: "#fdf3ff",
            cursor: "pointer",
            borderColor: "#894596",
          },
          transition: ".4s all",
        }}
      >
        <Container
          id={data.id}
          sx={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <Checkbox checked={name === selected} id={data.id}></Checkbox>
          <Stack
            id={data.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "600px",
            }}
          >
            <Stack id={data.id}>
              <Typography
                id={data.id}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: 10, sm: 20 },
                }}
              >
                {data.title}
              </Typography>
              <Typography id={data.id} sx={{ fontSize: { xs: 10, sm: 20 } }}>
                {data.caption}
              </Typography>
            </Stack>
          </Stack>
          <Typography sx={{ width: "140px", fontSize: { xs: 10, sm: 20 } }}>
            {data.price}
          </Typography>
        </Container>
        <Container id={data.id}></Container>
      </Box>
    );
  };
  console.log(user);

  return (
    <Box>
      <Box
        component="div"
        textAlign="start"
        sx={{
          width: { xs: "80%", sm: "700px" },
          height: { xs: "390px", sm: "500px" },
          backgroundColor: "white",
          borderRadius: 4,
          position: { xs: "absolute", sm: "relative" },
          top: { xs: "50%", sm: 0 },
          left: { xs: "50%", sm: 0 },
          transform: { xs: "translate(-50%,-50%)", sm: "none" },
          p: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h5">Pick add-ons</Typography>
        <Typography fontSize={14}>
          Add ons help enhance your experience
        </Typography>

        <Stack
          onClick={(e) => handleData(e)}
          sx={{ mt: { xs: 3, sm: 7 } }}
          component="div"
        >
          {/* //////////////////// */}
          {ADDONS_DATA.map((data: AddOns, index: number) => {
            return (
              <Element
                selected={isActive}
                name={data.id}
                data={data}
                onClick={handleCheckBox}
              />
            );
          })}
          {/* //////////////////// */}
        </Stack>
        <NextPage setIsValuable={setIsValuable} path={path} user={user} />
      </Box>
      <MobileFooter setConfirmed={() => {}} path={path} user={user} />
    </Box>
  );
};

export default AddOnes;
