import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Intro } from './IntroComponent';



function RenderMenuItem({ dish }) {
    if (dish != null) {
        return (
            <div className="row row-content">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <img width="100%" src={"assets/" + dish.image} />
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <h4>{dish.name}</h4>
                        <div>
                            {dish.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div></div>);
    }

}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="container">
                <RenderMenuItem dish={dish} />
            </div>
        )
    }
    );

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }
    else {

        return (
            <div className="container">
                <div className="row" style={{ 'margin-top': 15, 'margin-left': 2 }}>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Product Details</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Product Details</h3>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}


//export it so it can be imported somewhere else when you want to use it, eg App.js
export default Menu;