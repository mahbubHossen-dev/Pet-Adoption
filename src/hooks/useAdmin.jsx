import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: [user, user?.email, 'isAdmin'],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user/admin/${user?.email}`)
            console.log(data)
            return data?.admin
        },
        enabled: !loading && !!user?.email
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;