import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
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

function RenderComments({comments}) {
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
                            --{com.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}
                        </p>
                    </div>
                )}
            </div>)
    } else {
        return (<div></div>);
    }
}

const DishDetail = (props) => {
    return (
        <div className="row" >
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish ={props.dish}/>
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments = {props.dish ? props.dish.comments : null} />
            </div>
        </div>
    );
}

export default DishDetail