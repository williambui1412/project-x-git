import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.css'

class Header extends PureComponent {
    render() {
        return (
            <>
							<header className="header trans_300">
								{/* <!-- Top Navigation --> */}
								<div className="top_nav">
									<div className="container">
										<div className="row">
											<div className="col-md-6">
												<div className="top_nav_left">free shipping on all u.s orders over $50</div>
											</div>
											<div className="col-md-6 text-right">
												<div className="top_nav_right">
													<ul className="top_nav_menu">

														{/* <!-- Currency / Language / My Account --> */}
														<li className="language">
															<a href="test">
																English
																<i className="fa fa-angle-down"></i>
															</a>
															<ul className="language_selection">
																<li><a href="test">French</a></li>
																<li><a href="test">Italian</a></li>
																<li><a href="test">German</a></li>
																<li><a href="test">Spanish</a></li>
															</ul>
														</li>
														<li className="account">
															<a href="test">
																My Account
																<i className="fa fa-angle-down"></i>
															</a>
															<ul className="account_selection">
																<li><a href="test"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
																<li><a href="test"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* <!-- Main Navigation --> */}

								<div className="main_nav_container">
									<div className="container">
										<div className="row">
											<div className="col-lg-12 text-right">
												<div className="logo_container">
													<a href="test">Nordic<span>Shop</span></a>
												</div>
												<nav className="navbar">
													<ul className="navbar_menu">
														<li><a href="test">home</a></li>
														<li><a href="categories.html">shop</a></li>
														<li><a href="test">promotion</a></li>
														<li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
														<li><a href="contact.html">contact</a></li>
													</ul>
													<ul className="navbar_user">
														<li className="checkout">
															<a href="test">
																<i className="fa fa-shopping-cart" aria-hidden="true"></i>
																<span id="checkout_items" className="checkout_items">2</span>
															</a>
														</li>
													</ul>
													<div className="hamburger_container">
														<i className="fa fa-bars" aria-hidden="true"></i>
													</div>
												</nav>
											</div>
										</div>
									</div>
								</div>

							</header>

							<div className="fs_menu_overlay"></div>
							<div className="hamburger_menu">
								<div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
								<div className="hamburger_menu_content text-right">
									<ul className="menu_top_nav">
										<li className="menu_item has-children">
											<a href="test">
												usd
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="menu_selection">
												<li><a href="test">cad</a></li>
												<li><a href="test">aud</a></li>
												<li><a href="test">eur</a></li>
												<li><a href="test">gbp</a></li>
											</ul>
										</li>
										<li className="menu_item has-children">
											<a href="test">
												English
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="menu_selection">
												<li><a href="test">French</a></li>
												<li><a href="test">Italian</a></li>
												<li><a href="test">German</a></li>
												<li><a href="test">Spanish</a></li>
											</ul>
										</li>
										<li className="menu_item has-children">
											<a href="test">
												My Account
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="menu_selection">
												<li><a href="test"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
												<li><a href="test"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
											</ul>
										</li>
										<li className="menu_item"><a href="test">home</a></li>
										<li className="menu_item"><a href="categories.html">shop</a></li>
										<li className="menu_item"><a href="test">promotion</a></li>
										<li className="menu_item"><a href="test">pages</a></li>
										<li className="menu_item"><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
										<li className="menu_item"><a href="test">contact</a></li>
									</ul>
								</div>
							</div>

            </>
        );
    }
}

Header.propTypes = {

};

export default Header;