import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{ border: '1px solid purple' }}>
            <h3>this is home: {count}</h3>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;