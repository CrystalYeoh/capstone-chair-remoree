import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


class Menu extends Component{

    //every component should have react
    render(){ 

        //js .map( operator maps the dishes to   
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }
        );

        console.log('Menu Component render is  invoked.')
        
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>

        );
    }
}

//export it so it can be imported somewhere else when you want to use it, eg App.js
export default Menu;