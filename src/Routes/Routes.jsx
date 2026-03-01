import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import NotFound from "../Components/NotFound/NotFound";
import Jobs from "../Pages/Admin/Job/Jobs";
import Profile from "../Pages/Profile/Profile";
import FindJobs from "../Pages/FindJobs/FindJobs";
import JobDetails from "../Pages/FindJobs/JobDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'jobs-listing',
                Component: Jobs
            },
            {
                path: 'profile',
                Component: Profile
            },
            {
                path: 'find-jobs',
                Component: FindJobs
            },
            {
                path: 'find-jobs/:id',
                Component: JobDetails
            }
        ]
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    },
    {
        path: '/*',
        Component: NotFound
    }
]);