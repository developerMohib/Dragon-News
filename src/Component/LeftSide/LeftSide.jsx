import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
    const [category, setCategory] = useState([]) ;
    useEffect( () => {
        fetch(`/categories.json`)
        .then(res => res.json())
        .then(data => setCategory(data))
    } ,[])
    
    return (
        <div>
            <h1 className="font-bold text-xl" > All Caterogy</h1>
            {
                // category.map(cate => console.log(cate) )
                category.map(cate => <NavLink className="block bg-gray-300 my-2 p-2 rounded-lg" key={cate.id}> {cate.name} </NavLink> )
            }
        </div>
    );
};

export default LeftSide;