//container component so the others can be presentational component
//do not need any styles
import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

<<<<<<< HEAD
=======

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

>>>>>>> 9cd41469996ef92a0cf169bfde322ede762da57e
    render() {
        const HomePage = () =>{
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
                    promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]} 
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]} 
                />

            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
                comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))} />
            );

        }

        return (
            <div>
<<<<<<< HEAD
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes ={this.state.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={()=><About leaders ={this.state.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
=======
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Mummy's Restaurant Lolz</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId)=>this.onDishSelect(dishId)}/>
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
>>>>>>> 9cd41469996ef92a0cf169bfde322ede762da57e
            </div>
        );
    }
}

export default Main;
