import { Box ,Typography} from '@mui/material'
import { State } from "../store/userSlice";

const LastPage = () => {
  const USER: State = JSON.parse(localStorage.getItem("user") as string);

  return (
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
          display:"flex",
          alignItems:"center"

        }}
   >
    <Typography>you information successfully confirmed</Typography>
   </Box>
  )
}

export default LastPage
