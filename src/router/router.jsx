import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PetListing from "../pages/PetListing/PetListing";
import Details from "../pages/Details/Details";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddPet from "../pages/Dashboard/AddPet/AddPet";
import MyAddedPets from "../pages/Dashboard/MyAddedPets/MyAddedPets";
import AdoptionRequest from "../pages/Dashboard/AdoptionRequest/AdoptionRequest";
import CreateCampaign from "../pages/Dashboard/CreateCampaign/CreateCampaign";
import MyDonationCampaign from "../pages/Dashboard/MyDonationCampaign/MyDonationCampaign";
import MyDonations from "../pages/Dashboard/MyDonations/MyDonations";
import UpdateMyPet from "../components/UpdateMyPet";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import EditDonation from "../components/EditDonation";
import Users from "../pages/AdminDashboard/Users/Users";
import { Users2 } from "lucide-react";
import AllPets from "../pages/AdminDashboard/AllPets/AllPets";
import AllDonations from "../pages/AdminDashboard/AllDonations/AllDonations";
import Profile from "../pages/Dashboard/Profile/Profile";
import PetServices from "../pages/Home/PetServices";
import Faq from "../pages/Faq/Faq";
import OverView from "../pages/Dashboard/OverView/OverView";
import Statics from "../pages/Dashboard/Statics/Statics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pets',
                element: <PetListing></PetListing>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                // loader: ()
                loader: ({params}) => fetch(`http://localhost:3000/details/${params.id}`)
            },
            {
                path: '/donationCampaigns',
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/donationDetails/:id',
                element: <DonationDetails></DonationDetails>,
                // loader: ()
                loader: ({params}) => fetch(`http://localhost:3000/donationDetails/${params.id}`)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/petServices',
                element: <PetServices></PetServices>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/addPet',
                element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path: '/dashboard/overview',
                element: <PrivateRoute><OverView></OverView></PrivateRoute>
            },
            {
                path: '/dashboard/statics',
                element: <PrivateRoute><Statics></Statics></PrivateRoute>
            },
            {
                path: '/dashboard/myAddedPets',
                element: <PrivateRoute><MyAddedPets></MyAddedPets></PrivateRoute>
            },
            {
                path: '/dashboard/adoptionRequest',
                element: <PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },
            {
                path: '/dashboard/CreateCampaign',
                element: <PrivateRoute><CreateCampaign></CreateCampaign></PrivateRoute>
            },
            {
                path: '/dashboard/myDonationCampaigns',
                element: <PrivateRoute><MyDonationCampaign></MyDonationCampaign></PrivateRoute>
            },
            {
                path: '/dashboard/myDonations',
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>
            },
            {
                path: '/dashboard/update/:id',
                element: <PrivateRoute><UpdateMyPet></UpdateMyPet></PrivateRoute>
            },
            {
                path: '/dashboard/editDonation/:id',
                element: <PrivateRoute><EditDonation></EditDonation></PrivateRoute>
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>
            },
            {
                path: '/dashboard/allPets',
                element: <AllPets></AllPets>
            },
            {
                path: '/dashboard/allDonations',
                element: <AllDonations></AllDonations>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
        ],
    },
    
])
export default router;