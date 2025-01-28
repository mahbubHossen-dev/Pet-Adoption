import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isLoading} = useQuery({
        queryKey: ['user', user?.email, 'isAdmin'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(data)
            return data?.admin
            
        },
        enabled: !!user?.email
    })
    return [isAdmin]
};

export default useAdmin;