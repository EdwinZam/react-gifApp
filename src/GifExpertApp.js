import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () =>{

    //const categories = ['One Punch','Samurai X', 'Dragon Ball'];

const [categories, setCategories] = useState(['Naruto']);

/* const handleAdd = () =>{
    //setcategories.push('Sword Art Online');
    // console.log(categories)
   // setcategories ([...categories, 'HunterXHunter']);
    setcategories (cats => [...cats, 'Prueba']);
}
 */
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories}/>
            <hr />
            
            {/* <button onClick={ handleAdd }>Add</button> */}
            <ol>
                {
                    categories.map( category =>
                        <GifGrid 
                            key={ category}
                            category={ category } />
                        )
                }
            </ol>

        </>
    );
}



export default GifExpertApp;