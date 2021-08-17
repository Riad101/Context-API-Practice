import React, { useContext } from 'react';

const Header = (props) => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h3>this is header{category}</h3>
            <button onClick={()=> setCount(category+1)}>Increment</button>
        </div>
    );
};

export default Header;