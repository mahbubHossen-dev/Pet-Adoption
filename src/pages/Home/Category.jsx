import { Button } from '@headlessui/react';

const Category = ({setCategory}) => {
    
    return (
        <div className='space-x-2 text-center mt-12 md:mt-24'>
            <Button  onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 focus:bg-[#FCB98B]">
                Cat
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 focus:bg-[#FCB98B]">
                Dog
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 focus:bg-[#FCB98B]">
                Bird
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 focus:bg-[#FCB98B]">
                Fish
            </Button>
        </div>
    );
};

export default Category;