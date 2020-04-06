import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class ProductList extends PureComponent {
	render() {

		const { itemProduct  } = this.props;

		return (
			<div className="row">
				<div className="col">
					<div className="product-grid" >
						 
						{
							itemProduct.map(itemProduct=>{
								return (
								 
								 
										<div className="product-item men" key={ itemProduct.id }>
											<div className="product discount product_filter">
												<div className="product_image">
													<img src="images/product_1.png" alt="" />
												</div>
												<div className="favorite favorite_left"></div>
												
												{(() => {
													if( itemProduct.isPromotion > 0 ) {
														return(
															<div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>- {itemProduct.promotionPercent} %</span></div>
														)
													} 

												})()}
													
												
												<div className="product_info">
													<h6 className="product_name"><a href="single.html">{ itemProduct.name }</a></h6>
													<div className="product_price">${ itemProduct.salePrice }<span>${ itemProduct.originalPrice }</span></div>
												</div>
											</div>
											<div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
										</div>
							 
								)
								 
							})
						} 
 

						 
					</div>
				</div>
			</div>
		);
	}
}

ProductList.propTypes = {
	itemProduct: PropTypes.array,
	currentCat: PropTypes.string,

};
ProductList.defaultProps = {
	itemProduct: [],
	currentCat: null,
	
};

export default ProductList;