import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext) ;
    return (
        <div style={{ border: '1px solid purple' }}>
            <h3>this is home: {category}</h3>
            <Categories></Categories>
        </div>
    );
};

export default Home;