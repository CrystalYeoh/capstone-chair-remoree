import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>);
        }
    }

    renderComments(comments) {
        console.log(comments);

        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



        if (comments != null) {

            return (
                <div>
                    <h4>Comments</h4>
                    {comments.map((com) =>
                        <div key={com.id}>
                            <p className="text-left">
                                {com.comment}
                            </p>
                            <p className="text-left">
                                --{com.author} ,{new Intl.DateTimeFormat(com.date)}
                            </p>
                        </div>
                    )}
                </div>)
            
        }else {
            return (<div></div>);
        }
    }

    render() {
        return (
                    <div className="row" >
                        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.selectedDish)}</div>
                        <div className="col-12 col-md-5 m-1">{this.renderComments(this.props.selectedDish ? this.props.selectedDish.comments : null)}</div>
                    </div>
        );
    }

}

export default DishDetail