import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
function RenderDish({ dish }) {
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
=======
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
                                --{com.author} ,{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(com.date)))}
                            </p>
                        </div>
                    )}
                </div>)
            
        }else {
            return (<div></div>);
        }
>>>>>>> 9cd41469996ef92a0cf169bfde322ede762da57e
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        return (
<<<<<<< HEAD
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
=======
                    <div className="row" >
                        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                        <div className="col-12 col-md-5 m-1">{this.renderComments(this.props.dish ? this.props.dish.comments : null)}</div>
>>>>>>> 9cd41469996ef92a0cf169bfde322ede762da57e
                    </div>
                )}
            </div>)
    } else {
        return (<div></div>);
    }
}

const DishDetail = (props) => {
    return (
        <div className="container" >
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail