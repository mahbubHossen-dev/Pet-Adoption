

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import image1 from "../../assets/testimonials_Image/client1.jpg"
import image2 from "../../assets/testimonials_Image/client-2.jpg"
import image3 from "../../assets/testimonials_Image/client-3.jpg"
import image4 from "../../assets/testimonials_Image/client-4.jpg"
import image5 from "../../assets/testimonials_Image/client-5.jpg"
import image6 from "../../assets/testimonials_Image/client-6.jpg"

const Feedback = () => {
    return (
        <div className='w-full '>
            <h2 className='text-2xl text-center text-white/90 dark:text-black'>Client Feedback</h2>
            <Swiper navigation={true} loop={true} direction='horizontal' modules={[Navigation]} className="mySwiper rounded-md mt-10">
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image1} alt="" />
                        <h4 className='font-medium'>Henry</h4>
                        <p className='w-2/4'>Adopting a pet brings so much joy and companionship to your life. It&apos;s a rewarding experience for both you and the animal.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image2} alt="" />
                        <h4 className='font-medium'>Charlie</h4>
                        <p className='w-2/4'>Adopting a pet saves lives and gives a loving home to an animal in need. It&apos;s one of the most selfless things you can do.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image3} alt="" />
                        <h4 className='font-medium'>Finley</h4>
                        <p className='w-2/4'>Adoption provides a second chance for a pet to experience love and care. It&apos;s a beautiful way to make a difference.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image4} alt="" />
                        <h4 className='font-medium'>William</h4>
                        <p className='w-2/4'>A rescued pet offers unconditional love and gratitude. Adopting is an incredibly fulfilling experience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image5} alt="" />
                        <h4 className='font-medium'>Isabella</h4>
                        <p className='w-2/4'>By adopting, you&apos;re not only giving a pet a home but also making space for another animal in need. It&apos;s a win-win.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center text-center space-y-2 dark:text-black'>
                        <img className='rounded-full w-24' src={image6} alt="" />
                        <h4 className='font-medium'>Freya</h4>
                        <p className='w-2/4'>Adopting a pet teaches responsibility and compassion. It’s an opportunity to enrich both your life and theirs.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Feedback;