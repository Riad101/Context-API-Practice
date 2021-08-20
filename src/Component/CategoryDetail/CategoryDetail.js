

const CategoryDetail = (props) => {
    
    const {name} = props.product;
    return (
        <div>
            <h4>This is category detail has: {name}</h4>
            
        </div>
    );
};

export default CategoryDetail;