import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h3>this is header:{category}</h3>
            <button onClick={()=> setCategory(category+1)}>Increment</button>
        </div>
    );
};

export default Header;