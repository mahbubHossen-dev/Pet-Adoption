import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';



const useGetAllData = (payload) => {
    console.log(payload)
    const axiosSecure = useAxiosSecure()
    const { data = [], isLoading } = useQuery({
        queryKey: [payload],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`http://localhost:3000/${payload}`)
            // console.log(data)
            return data
        }
    })
    return data
};

export default useGetAllData;