import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h3>this is shipment</h3>
            <button onClick={()=> setCategory(category-1)}>Decrement</button>
        </div>
    );
};

export default Shipment;