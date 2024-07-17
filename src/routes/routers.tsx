import { lazy } from "react";
import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Grid } from "@mui/material";
import Steps from "../components/stepsCon/Steps";

export type Routes = {
  path: string;
  element?: JSX.Element;
  title?: string;
  topic?: string;
};

const PersonalInfo = lazy(() => import("../components/infoCon/PersonalInfo"));
const AddOns = lazy(() => import("../components/infoCon/AddOns"));
const Plans = lazy(() => import("../components/infoCon/Plans"));
const Finish = lazy(() => import("../components/infoCon/Finish"));

export const PAGE_ROUTES: Routes[] = [
  {
    path: "/info",
    element: <PersonalInfo />,
    title: "Personal Info",
    topic: "your info",
  },

  {
    path: "/plans",
    element: <Plans />,
    title: "Select your plans",
    topic: "select plans",
  },
  {
    path: "/addOns",
    element: <AddOns />,
    title: "Pick add-ons",
    topic: "add-ons",
  },
  {
    path: "/finish",
    element: <Finish />,
    title: "Finishing up",
    topic: "Finishing up",
  },
];
const ROUTES: RouteObject[] = [
  {
    element: (
      <Grid sx={{}} container>
        <Grid
          alignContent="center"
          sx={{
            boxShadow: { xs: "none", sm: "0px 10px 10px rgba(0,0,0,0.5)" },
          }}
          xs={2}
          sm={3}
          item
        >
          <Steps />
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",

            xs: { position: "absolute", top: "50", left: "50%" },
          }}
          xs={10}
          sm={9}
          item
        >
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Grid>
      </Grid>
    ),
    children: PAGE_ROUTES,
  },
];
export default function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate replace to="/info" /> },
    ...ROUTES,
  ]);

  return <RouterProvider router={router} />;
}
