import React from 'react';
import {withRouter} from 'react-router';
import {PRODUCT_API, ADRESS} from '../../env';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.match.params.id ? true : false,
            isCreate: this.props.match.params.id ? false : true,
            product: {
                name : null,
                price : null,
                quantity : null
            }
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateProduct(product) {
        this.setState({
            product: product
        });
    }

    mountProductToPost(product) {
        return {
            name: product.name,
            price: product.price,
            quantity: product.quantity
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let loading = true;
        this.setState({loading});
        if(this.state.isCreate) {
            this.postObject();
        } else {
            this.replaceObject();
        }
    }

    postObject() {
        fetch(PRODUCT_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.mountProductToPost(this.state.product))
        }).then((response) => response.json())
        .then((product) => {
            window.alert('Product created successfully');
            window.location.href = `${ADRESS.EDIT}/${product.id}`;
        });

    }

    replaceObject() {
        fetch(`${PRODUCT_API}/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.mountProductToPost(this.state.product))
        }).then(() => {
            const loading = false;
            this.setState({loading});
            window.alert('Product edited successfully');
        });
    }

    handleNameChange(event) {
        let {product} = this.state;
        product.name = event.target.value;
        this.updateProduct(product);
    }

    handlePriceChange(event) {
        let {product} = this.state;
        product.price = event.target.value;
        this.updateProduct(product);
    }

    handleQuantityChange(event) {
        let {product} = this.state;
        product.quantity = event.target.value;
        this.updateProduct(product);
    }

    componentDidMount() {
        if(this.state.isCreate) {
            return;
        }
        
        fetch(`${PRODUCT_API}/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(product => this.setState({
                product: product,
                loading: false
            }));
    }

    deleteOperation() {
        if(!window.confirm('Are you sure to delete the product?'))
        {
            return;
        }
        fetch(`${PRODUCT_API}/${this.props.match.params.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }).then(() => {
            window.alert('Product deleted successfully');
            window.location.href = ADRESS.ROOT;
        });
    }


    render() {
        const {product} = this.state;
        const headerText = this.state.isCreate ? 
            'Creating new product' : 
            `Editing product id#${this.state.product.id}`;

        return (
            <div>
                <h1>{ headerText }</h1>
                <p></p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"  value={product.name == null ? '' : product.name}  onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Price:
                        <input type="number" value={product.price == null ? '' : product.price} onChange={this.handlePriceChange} />
                    </label>
                    <label>
                        Quantity:
                        <input type="number" value={product.quantity == null ? '' : product.quantity} onChange={this.handleQuantityChange} />
                    </label>
                    <p></p>
                    <input type="submit" value="Send" disabled={this.state.loading}/>
                    {!this.state.isCreate && (
                        <button type="button" onClick={() => this.deleteOperation()}>DELETE</button>
                    )}
                </form>
            </div>
        );
    }
}

export default withRouter(Product);
