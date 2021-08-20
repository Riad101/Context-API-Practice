import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const products = [
    {name: 'Lenovo', category: 'laptop'},{name:'HP', category: 'laptop'},{name:'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'},{name:'Xiaomi', category: 'mobile'},{name:'Nokia', category: 'mobile'},
    {name: 'Kodak', category: 'camera'},{name:'Canon', category: 'camera'},{name:'Sony', category: 'camera'}
]

const Categories = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h2>Select your category: {category}</h2>
            <CategoryDetail></CategoryDetail>
        </div>
    );
};

export default Categories;