import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuNewArrivals from '../../../components/Home/NewArrivals/MenuNewArrival';
import ProductList from '../../../components/Home/NewArrivals/ProductList/Index';

class NewArrivals extends PureComponent {

	
	constructor(props) {
		super(props);

		this.state = {
			currentItemProduct: [],
			itemMenu: [],
			itemProduct: [],
			
		};
	}



	componentDidMount() {
		fetch("https://js-post-api.herokuapp.com/api/categories?fbclid=IwAR0pcsjoxSf0jaFuyXwtlfeFrLGwxZLbZqRG7CLDc-cExJMKmITMRIy0OrY")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					itemMenu: result
				});
			},
		)

		fetch("https://js-post-api.herokuapp.com/api/products?categoryId=32a63859-293f-4e5b-817e-968e28bf309d&_page=1&_limit=10&fbclid=IwAR0g4yIkQWx6VfWYiulN_OVRGq73emOXr6oLvDZhiYEB8yXQugnCUVFtCs0")
		.then(res => res.json())
		.then(
			(result2) => {
				this.setState({
					itemProduct: result2.data
				});
			},
		)
	};

	handleMenuActive = (itemMenu) => {
		this.setState({ activeMenuId: itemMenu.id});

		this.setState(prevState => {
			const { itemProduct } = this.state;
			const newProductList = itemProduct;
			const newProductList2 = newProductList.filter(newProductList => newProductList.categoryId === itemMenu.id ); 			 
			console.log( newProductList2 );
			return {
        itemProduct: newProductList2,
      };
		})
	};


	render() {

		const { itemMenu, activeMenuId, itemProduct } = this.state;
		const { currentItemProduct } = itemProduct;
	 
				
		return (
				<>
					{ itemProduct }
					<MenuNewArrivals 
					itemMenu={ itemMenu }
					activeMenuId = { activeMenuId }
					onActiveMenuClick={this.handleMenuActive}
					/>
					<ProductList 
					itemProduct={ itemProduct }  
					/>
				</>
		);
	}
}

NewArrivals.propTypes = {

};

export default NewArrivals;