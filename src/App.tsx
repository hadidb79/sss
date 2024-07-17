import { Grid } from "@mui/material";
import Steps from "./components/stepsCon/Steps";
import Router from "./routes/routers";
import Main from "./main";
import Theme from "./theme";
import moment from "jalali-moment";
function App() {
  return (
    <>
      <Theme>
        <Router />
      </Theme>
    </>
  );
}

export default App;
