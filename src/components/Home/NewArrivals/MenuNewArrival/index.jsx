import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NewArrivals.css'

class MenuNewArrivals extends PureComponent {
	
	handleMenuActive = (menu) =>{
		const { onActiveMenuClick } = this.props;
		if (onActiveMenuClick) {
			onActiveMenuClick( menu );
		}
	};

 
	render() {

		const { itemMenu , activeMenuId } = this.props;
		
		return (
			<>
				<div className="row">
					<div className="col text-center">
						<div className="section_title new_arrivals_title">
							<h2>New Arrivals</h2>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col text-center">
						<div className="new_arrivals_sorting">
							<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
								{
									itemMenu.map(menu=>{

										const isActive = menu.id === activeMenuId;

										return( 
											<li 
											key={ menu.id }
											onClick= { () => this.handleMenuActive(menu) }
											className= { isActive ? 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center active' : 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center'} >{menu.name}</li>
										)
									})
								}
								 
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
}

MenuNewArrivals.propTypes = {
	itemMenu: PropTypes.array,
	activeMenuId: PropTypes.string,
	onActiveMenuClick: PropTypes.func,
};
MenuNewArrivals.defaultProps = {
	itemMenu: [],
	activeMenuId: null,
	onActiveMenuClick: null,
}

export default MenuNewArrivals;