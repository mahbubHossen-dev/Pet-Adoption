
import { CiTrophy } from 'react-icons/ci';
import { MdMiscellaneousServices, MdRateReview } from 'react-icons/md';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Achievements = () => {

    const [ref, isVisible] = useInView({
        threshold: 1,
    })

    return (
        <div>
            <div className='bg-[#FCB98B] rounded-md container mx-auto py-20 mb-16 md:mt-24 dark:bg-gray-600'>
                <div className=' w-2/3 mx-auto md:p-12'>
                    <div>
                        <h1 className='text-3xl font-medium text-center pb-8 dark:text-white/90'>Our Achievements</h1>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className='flex gap-3 bg-white rounded-3xl p-12  shadow-md dark:bg-[#1F2937]'>
                            <div>
                                <CiTrophy className='text-5xl text-orange-500' />
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-bold'><div ref={ref}>{isVisible ? <CountUp end={2500} /> : ''}</div></h1>
                                <p className='text-sm ml-1'>USERS</p>
                            </div>
                        </div>
                        <div className='flex gap-3 bg-white rounded-3xl p-12 shadow-md dark:bg-[#1F2937]'>
                            <div>
                                <MdMiscellaneousServices className='text-5xl text-orange-500' />
                            </div>
                            <div className=''>
                                <h1 className='text-2xl font-bold'><div ref={ref}>{isVisible ? <CountUp end={4320} /> : ''}</div></h1>
                                <p className='text-sm ml-1'>Pets</p>
                            </div>
                        </div>
                        <div className='flex gap-3 bg-white rounded-3xl p-12 shadow-md dark:bg-[#1F2937]'>
                            <div>
                                <MdRateReview className='text-5xl text-orange-500' />
                            </div>
                            
                            <div className=''>
                                <h1 className='text-2xl font-bold'><div ref={ref}>{isVisible ? <CountUp end={5670} /> : ''}</div></h1>
                                <p className='text-sm ml-1'>Campaigns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;