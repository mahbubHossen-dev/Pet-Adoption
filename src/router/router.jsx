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
                path: '/signup',
                element: <Register></Register>
            },
            
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/addPet',
                element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
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
            }
        ],
    },
    
])
export default router;