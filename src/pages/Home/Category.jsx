import { Button } from '@headlessui/react';

const Category = ({setCategory}) => {
    
    return (
        <div className='space-x-2 text-center mt-16'>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Cat
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Dog
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Bird
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-orange-500 font-md font-medium py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Fish
            </Button>
        </div>
    );
};

export default Category;