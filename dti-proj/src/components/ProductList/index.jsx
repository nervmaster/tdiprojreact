import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_API, ADRESS } from '../../env';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch(PRODUCT_API)
            .then(response => response.json())
            .then(products => this.setState({products: products}));
    }

    render() {
        const list = this.state.products.map((product) => {
            return (
                <li key={product.id}>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <Link to={`${ADRESS.EDIT}/${product.id}`}><button>Edit</button></Link>
                    <p>---------------------</p>
                </li>
            );
        })

        return (
            <div className="product-list">
                <ul>{list}</ul>
            </div>
        );
    }

}

export default ProductList;