import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}

const Menu = (props) => {
    //no need to use this.props because theres no longer a dish
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        )
    }
    );

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


//export it so it can be imported somewhere else when you want to use it, eg App.js
export default Menu;