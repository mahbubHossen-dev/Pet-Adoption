import { useQuery } from "@tanstack/react-query";
import Chart from "../../../components/Chart";
import axios from "axios";


const OverView = () => {



    const { data: donationData = [], isLoading } = useQuery({
        queryKey: ['donationCampaigns'],
        queryFn: async () => {
            const { data } = await axios.get(`https://pet-adoption-server-psi.vercel.app/donations`)
            return data
        }
    })
    
    
    return (
        <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total Pets</h3>
                    <p className="text-lg">20</p>
                </div>
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total Campaigns</h3>
                    <p className="text-lg">35</p>
                </div>
                <div className="bg-orange-300 p-6 rounded-2xl text-white">
                    <h3 className="font-bold text-xl">Total Adoption Request</h3>
                    <p className="text-lg">10</p>
                </div>
            </div>
            <div className="">

                <Chart donationData={donationData} />

            </div>
        </div>
    );
};

export default OverView;