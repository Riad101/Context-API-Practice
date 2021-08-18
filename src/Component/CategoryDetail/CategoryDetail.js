import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>This is category detail has: {category}</h4>
            
        </div>
    );
};

export default CategoryDetail;