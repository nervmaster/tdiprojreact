import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     products: [{
        //         id: 1,
        //         name: "productA",
        //         price: 1,
        //         quantity: 1
        //     }, {
        //         id: 2,
        //         name: "productB",
        //         price: 1,
        //         quantity: 1
        //     }, {
        //         id: 5,
        //         name: "productC",
        //         price: 1,
        //         quantity: 1
        //     }],
        // }
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/product/')
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
                    <Link to={`/edit/${product.id}`}><button>Edit</button></Link>
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