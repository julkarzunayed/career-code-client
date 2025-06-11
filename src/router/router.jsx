import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import ApplyNow from "../pages/ApplyNow/ApplyNow";
import PrivetRout from "../PrivetRout/PrivetRout";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyAddedJobs from "../pages/MyAddedJobs/MyAddedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/jobsDetails/:id',
        Component: JobDetails,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: '/jobApply/:id',
        element: <PrivetRout>
          <ApplyNow/>
        </PrivetRout>
      },
      {
        path: '/addJob',
        element: <PrivetRout>
          <AddJob/>
        </PrivetRout>
      },
      {
        path: '/myApplications',
        element: <PrivetRout>
          <MyApplications/>
        </PrivetRout>
      },
      {
        path: '/myAddedJobs',
        element: <PrivetRout>
          <MyAddedJobs/>
        </PrivetRout>
      },
      {
        path: '/myAddedJob/:job_id',
        element: <PrivetRout>
          <ViewApplications/>
        </PrivetRout>,
        loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      },
      {
        path:''
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "/logIn",
        Component: LogIn
      }
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);

export default router;