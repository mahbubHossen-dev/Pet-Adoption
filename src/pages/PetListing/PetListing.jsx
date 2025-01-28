import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import toast from 'react-hot-toast';
import Container from '../../components/Container';
import PetCard from '../../components/PetCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const PetListing = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // Intersection Observer to track the last element
  const { ref, inView } = useInView();

  // Infinite Query for fetching pets
  const {
    data = { pages: [] }, // Default value to avoid undefined errors
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['allPets', search, category],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/pets?category=${category.toLowerCase()}&search=${search}&page=${pageParam}&limit=6`
        );

        // API response validation
        const { results = [], nextPage = null } = response.data || {};
        if (!Array.isArray(results)) {
          throw new Error('Invalid data format');
        }
        return { results, nextPage };
      } catch (error) {
        console.error('Error fetching pets:', error.response?.data || error.message);
        toast.error(error.response?.data || 'Something went wrong!');
        return { results: [], nextPage: null }; // Return empty results on error
      }
    },
    getNextPageParam: (lastPage) => lastPage?.nextPage || undefined,
  });

  // Fetch the next page when the last item comes into view
  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);


  console.log(data)

  // Handle error state
  if (isError) {
    return (
      <p className="text-center text-red-500">
        Failed to load pets. Please try again.
      </p>
    );
  }

  return (
    <div>
      <Container>
        <h1 className="text-center text-2xl mb-6">Not Adopted Pets</h1>

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <select
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="Category"
            name="status"
            className="border py-2 px-2 rounded w-60"
          >
            <option value="Category" disabled>
              Category
            </option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
          </select>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by name"
            className="border-2 p-2 rounded-full"
          />
        </div>

        {/* Pet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.pages?.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page?.results?.map((pet) => (
                <PetCard key={pet._id} pet={pet} />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Infinite Scroll Loading */}
        <div ref={ref} className="text-center mt-4">
          {isFetchingNextPage && <LoadingSpinner />}
          {!hasNextPage && (
            <p className="text-gray-500">No more pets to load.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PetListing;



// import Container from '../../components/Container';
// import PetCard from '../../components/PetCard';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
// import { useState } from 'react';
// import { Select } from '@headlessui/react'
// import toast from 'react-hot-toast';
// import LoadingSpinner from '../../components/LoadingSpinner';

// const PetListing = () => {
//     const [search, setSearch] = useState("")
//     const [category, setCategory] = useState("")


//     const { data: pets = [], isLoading } = useQuery({
//         queryKey: ['allPets', search, category],
//         queryFn: async () => {
//             try {
//                 const { data } = await axios.get(`http://localhost:3000/pets?category=${category.toLowerCase()}&search=${search}`)
//                 // const filter = data.filter(pet => pet.adopted === false)
//                 // console.log(filter)
//                 return data
//             } catch (error) {
//                 console.log(error.response.data)
//                 toast.error(error.response.data)
//             }
//         }
//     })

    

//     if(isLoading){
//             return <LoadingSpinner></LoadingSpinner>
//         }
//     // co
//     return (
//         <div>
//             <Container>
//                 <div className=''>
//                 <h1 className='text-center text-2xl mb-6'>Not Adopted Pets</h1>
//                     <div className='flex justify-between items-center'>
//                         <Select onChange={(e) => setCategory(e.target.value)} defaultValue={'Category'} name="status" aria-label="Project status" className="border data-[hover]:shadow w-60 py-2 px-2 data-[focus]:bg-blue-100">
//                             <option value="Category" disabled>Category</option>
//                             <option value="Cat">Cat</option>
//                             <option value="Dog">Dog</option>

//                             <option value="Bird">Bird</option>
//                             <option value="Fish">Fish</option>
//                         </Select>

//                         <div className=''>
//                             <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search by name' className='border-2 mb-6 p-2 rounded-full' />
//                         </div>
//                     </div>
//                     <div>
                        
//                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//                             {
//                                 pets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default PetListing;