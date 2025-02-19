
import catFace from '../../assets/services/cat-face.jpg'
import dogHair from '../../assets/services/dog.jpg'
import dogFace from '../../assets/services/dogFace.jpg'
import bone from '../../assets/services/harr.png'
const PetServices = () => {
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h1 className='text-3xl font-medium'>All Types of Grooming Services</h1>
                <p>For professional dog and cat grooming needs Fanatic clearly</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-4'>
                <div className='flex items-center gap-2 border border-orange-400 p-4'>
                    <img className='w-24 h-24 mx-auto' src={catFace} alt="" />
                    <div>
                        <h2 className='text-2xl font-medium'>Bath & Bursh</h2>
                        <p className=''>Regular bath and brushing keep pets clean, healthy, and free from dirt or parasites. It also reduces shedding and improves their coat&apos;s shine.</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 border border-orange-400 p-4 '>
                    <img className='w-24 h-24 mx-auto' src={dogHair} alt="" />
                    <div>
                        <h2 className='text-2xl font-medium'>Hair Styling</h2>
                        <p className=''>Pet hair styling enhances their appearance and keeps their coat manageable. It also helps prevent matting and improves overall hygiene.</p>
                    </div>
                </div>


                <div className='flex items-center gap-2 border border-orange-400 p-4'>
                    <img className='w-24 h-24 mx-auto' src={dogFace} alt="" />
                    <div>
                        <h2 className='text-2xl font-medium'>Trim & Groom</h2>
                        <p className=''>Regular trim and grooming keep pets neat, healthy, and comfortable. It prevents matting, controls shedding, and enhances their overall appearance.</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 border border-orange-400 p-4'>
                    <img className='w-24 h-24 mx-auto' src={bone} alt="" />
                    <div>
                        <h2 className='text-2xl font-medium'>Pet Grooming</h2>
                        <p className=''>Pet grooming involves cleaning, trimming, and brushing to keep a pet healthy and looking its best. Regular grooming also helps detect health issues early and promotes a shiny coat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetServices;