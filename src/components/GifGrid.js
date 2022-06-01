import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

   // const [count, setCount] = useState(0);

const {data:images, loading} = useFetchGifs( category );

console.log(loading);


/*     const [images, setImages] = useState([])  */

    //getGifts();

  return (
    <>
        <h3>{ category}</h3>  
        {loading && <p>loading</p>}
            <div className='card-grid'>
            
                {
                    images.map( img => (
                    // <li key={id}> { title }  </li>
                    <GifGridItem 
                            key = { img.id}
                            {...img} 
                        />
                    ))
                }
        </div>
    </>
  )
}
