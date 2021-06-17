import React, { useEffect, useState } from 'react';
import api from '../../api';
import PageControl from '../filterControls/pageControl';
import Lifter from './lifter';


const LiftersContainer = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [lifters, setLifters] = useState([]);
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(50)

    /* 
    let [lifters, totalLifters] = await Promise.all([
        api.getLifters(stuff),
        api.getFullList()

    ])


    */

    

    useEffect(() => { 
        const fetchData = async (stuff) => {
            
            try {
                setLoading(true);
                setError(false);
                const [lifters, totalLifters] = await Promise.all([
                    api.getLifters(stuff),
                    // For some reason trying to call api.getFullList function always results in a 500 error that is the reason why I used this. I'm too lazy to try and play around with it, it could be environment variable, im fairly certain its correct but in any case enjoy this fetch request and es6 multiple promises code i wrote. 
                    fetch("http://localhost:5001/api/lifters/")
            
                ])

                if (!lifters.ok) {
                                throw new Error('Flagrant API Error');
                             }

                if (!totalLifters.ok) {
                                throw new Error('Flagrant API Error');
                             }



                const fuckery = await lifters.json()
                setLifters(fuckery)

                const shittery = await totalLifters.json()
                 const totalFuckingPages = shittery.length

                 console.log(totalFuckingPages/20)

                 setTotalPages(totalFuckingPages / 20);



                //const lifters = await result.json();

               // const 
                // setLifters(lifters)

            } catch (error) {
                setError(true);

            } finally {
                setLoading(false);
            }
        }
        fetchData(1);

        // Fetching TOTAL number of shit

        // const fetchtotalNumber = async () => {
            
        //     try {
        //         const result = await api.getFullList();
        //         if (!result.ok) {
        //             throw new Error('Flagrant API Error');
        //         }
        //         const lifters = await result.json();
        //         const totalFuckingPages = lifters.length;
        //         console.log(totalFuckingPages)
        //         setTotalPages(totalFuckingPages)
        //         console.log(totalPages)

        //     } catch (error) {
        //         setError(true);

        //     } 
        // }

        // fetchtotalNumber();

        
        

    }, [])


    
    const style = {
        padding: '20px'
    }

   const nextPage = (page) => {
       
       const newPage = page + 1 

       // This is hardcoded atm while i figure out a better fix
       if (newPage > totalPages){
            return console.log(`Theres no more fucking pages`)
       }

       const fetchData = async (stuff) => {
            
        try {
            const result = await api.getLifters(stuff);
            if (!result.ok) {
                throw new Error('Flagrant API Error');
            }
            const lifters = await result.json();
            setLifters(lifters)

        } catch (error) {
            setError(true);

        }
    }
       fetchData(newPage)
       setPage(newPage)
    
   }

   const previousPage = (page) => {
       if(page === 1){
           return (console.log('There isnt a fucking page before this one'))
       }

       const fetchData = async (stuff) => {
            
        try {
            const result = await api.getLifters(stuff);
            if (!result.ok) {
                throw new Error('Flagrant API Error');
            }
            const lifters = await result.json();
            setLifters(lifters)

        } catch (error) {
            setError(true);

        } 
    }

       



       const newPage = page - 1 

       fetchData(newPage)

       setPage(newPage)
   }

    return (
        <div style={style}>
            <h2>Lifters</h2>
            {loading && <div>Accesing Database via Hypertext Transfer Protocol...</div>}
            {error && <div>Brutal Error</div>}
            <PageControl currentPage={page} totalPages={totalPages }  onNext={() => nextPage(page)} onPrev={() => previousPage(page)}/>
            {lifters.map(lifter => (<Lifter key={lifter.id} firstName={lifter.firstName} lastName={lifter.lastName} proMember={lifter.proMember} workouts={lifter.workouts}/>))}
        </div>
    );
}
export default LiftersContainer
