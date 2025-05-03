import { useQuery } from "@tanstack/react-query";
import Chart from "../../../components/Chart";
import axios from "axios";
import useGetAllData from "../../../hooks/useGetAllData";
import StaticsChart from "../../../components/StaticsChart";


const Statics = () => {

    const donationData = useGetAllData('allDonations')
    const pets = useGetAllData('allPets')
    const users = useGetAllData('users')

    // const { data: donationData = [], isLoading } = useQuery({
    //     queryKey: ['donationCampaigns'],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:3000/allDonations`)
    //         // console.log(data)
    //         return data
    //     }
    // })
    console.log(donationData)
    console.log(pets)
    return (
        <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total Pets</h3>
                    <p className="text-lg">{pets.length}</p>
                </div>
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total Campaigns</h3>
                    <p className="text-lg">{donationData.length}</p>
                </div>
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total User</h3>
                    <p className="text-lg">{users.length}</p>
                </div>
            </div>
            <div className="">
                <StaticsChart donationData={donationData} pets={pets} users={users}/>
            </div>
        </div>
    );
};

export default Statics;