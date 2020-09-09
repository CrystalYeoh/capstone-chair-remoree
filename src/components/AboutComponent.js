import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderLeader({ leader, isLoading, errMess }) {

    return (
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={baseUrl + leader.image} alt={leader.name} style={{height:100, width:100}} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    );
}



function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader={leader} />
        );
    });

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else {


        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>More about us!</h2>
                        <p> We are students from Singapore University of Technology and Design (SUTD) and we are building the next generation of task chairs. In light of the global pandemic, many are encouraged to work from home, and this has resulted in longer working hours at our home offices. However, many of us do not have the ergnomics chairs that offices provide. We decided to take this opportunity in demand for home ergonomic chairs to make an affordable, customisable smart ergnomic chair.</p>
                        <p> Currently, we are doing this as an Entrepreneurship Final Year Project (known as Capstone), but we hope to refine the product into something relevant to the needs and bring it to the market.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">3 May 2020</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$0</dd>
                                    <dt className="col-6">Group Size</dt>
                                    <dd className="col-6">8</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">A Better World by Design, starting from a chair at home. A Better Chair by Design.</p>
                                    <footer className="blockquote-footer">Crystal Yeoh
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Corporate Leadership</h2>
                    </div>
                    <div className="col-12">
                        {leaders}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;    