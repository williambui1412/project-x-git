import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../components/Home/Slider';
import Banner from '../../components/Home/Banner';
import DealOfTheWeek from '../../components/Home/DealOfTheWeek';
import Benefit from '../../components/Common/Benefit';
import NewArrivals from './NewArrivals';
class HomePage extends PureComponent {



    render() {

        

        return (
            <div>
              
                <Slider />
                <Banner />
                <div className="new_arrivals">
                    <div className="container">
                      <NewArrivals />
                    </div>
                </div>
                
                <DealOfTheWeek />
                <Benefit />
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;