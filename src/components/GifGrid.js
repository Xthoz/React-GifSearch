
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './hooks/useFetchGifs';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({category}) => {
  
// const [Imagenes, setImagenes] = useState([])
const {data :Imagenes, loading} = useFetchGifs( category );


//   useEffect( () => {
//   getGifs(category)
//                     .then(setImagenes);
  
// }, [category])
   
   
  
  return (
    <>
    <h3> {category} </h3>
    { loading && <p>Cargando ...</p>}
     
   <div className='card-grid'>
        
        
          {
            Imagenes.map( (img) => 
            <GifGridItem 
            key = {img.id}
            img = {img} 
            />)
          }
        
    </div> 
    </>
  )
}


