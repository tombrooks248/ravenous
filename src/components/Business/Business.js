import React from 'react';
import ReactDOM from 'react-dom';
import './Business.css';



class Business extends React.Component {
    render () {
        return( 
            <div class="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt=''/>
                </div>
                    <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>Bordertown</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    </div>
                    <div class="Business-reviews">
                        <h3>{this.props.business.category}</h3>
                        <h3 className="rating"> {this.props.business.rating} stars</h3>
                        <p>{this.props.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;