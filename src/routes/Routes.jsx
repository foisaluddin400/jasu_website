
import { Root } from "../layout/Root";

import { ContuctUsPage } from "../Pages/ContactUsPage/ContuctUsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";

import { SubmitTicketPage } from "../Pages/SubmitTicketPage.jsx/SubmitTicketPage";
import { BlogPage } from "../Pages/CataloguePage/CataloguePage";
import { Login } from "../Auth/Login";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Verification } from "../Auth/Verification";
import { NewPassword } from "../Auth/NewPassword";
import { SignUp } from "../Auth/SignUp";
import { ProfilePage } from "../Pages/ProfilePage/ProfilePage";
import { OngoingTicketPage } from "../Pages/ProfilePage/OngoingTicketPage";
import CategogueDetails from "../components/catelougue/CategogueDetails";
import ProccessDetails from "../components/catelougue/ProccessDetails";
import UpdateProfile from "../Pages/ProfilePage/UpdateProfile";
import Faq from "../Pages/Faq/Faq";
import PrivacyPolicy from "../Pages/ProfilePage/PrivacyPolicy";
import TermsAndConditions from "../Pages/ProfilePage/TermsAndConditions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
           
            {
                path: '/contactUs',
                element: <ContuctUsPage></ContuctUsPage>
            },
            {
                path: '/catelogue',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/categogue/categogueDetails',
                element: <CategogueDetails></CategogueDetails>
            },
            {
                path: '/categogue/proccessDetails',
                element: <ProccessDetails></ProccessDetails>
            },
            {
                path: '/submit-a-ticket',
                element: <SubmitTicketPage></SubmitTicketPage>
            },

            {
                path: '/profilePage',
                element: <ProfilePage></ProfilePage>
            },
             {
                path: '/privacyPolicy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
             {
                path: '/TermsAndCondition',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/profilePage/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/profilePage/ongoing-tickets',
                element: <OngoingTicketPage></OngoingTicketPage>
            },
        ]
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>
    },

    {
        path: '/auth/verification',
        element: <Verification></Verification>
    },
    {
        path: '/auth/update-password',
        element: <NewPassword></NewPassword>
    }
]);