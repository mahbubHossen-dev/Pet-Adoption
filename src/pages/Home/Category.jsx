import { Button } from '@headlessui/react';
import React, { useState } from 'react';

const Category = () => {

    const [category, setCategory] = useState()
    
    
    return (
        <div className='space-x-2 text-center mt-16'>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Cats
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Dogs
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Rabbit
            </Button>
            <Button onClick={(e) => setCategory(e.target.innerText)} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Fish
            </Button>
        </div>
    );
};

export default Category;