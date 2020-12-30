import React from 'react';
import ReactDOM from 'react-dom';
import './business.css';


const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
    render () {
        return( 
            <div class="Business">
                <div className="image-container">
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
                </div>
                    <h2>{this.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.address}</p>
                        <p>Bordertown</p>
                        <p>{this.state} {this.zipCode}</p>
                    </div>
                    <div class="Business-reviews">
                        <h3>{this.category}</h3>
                        <h3 className="rating"> {this.rating} stars</h3>
                        <p>90 reviews</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;