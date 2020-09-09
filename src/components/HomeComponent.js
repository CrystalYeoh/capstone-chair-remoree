import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Intro } from './IntroComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item }) {

    return (
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    if (props.leadersLoading) {
        return (
            <Loading />
        );
    } else if (props.leadersErrMess) {
        return (
            <h4>{props.leadersErrMess} </h4>
        );
    } else {
        const leaders = props.leaders.map((leader) => {
            return (
            <div className="col-12 col-md m-1">
                <RenderCard item={leader} />
            </div>);
        });
        return (
            <div className="container">
                <div className="row">
                    <Intro />
                </div>
                <div className="row align-items-start">
                    {leaders}
                </div>
            </div>
        );
    }
}

export default Home;