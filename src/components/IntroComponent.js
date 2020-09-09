import React from 'react';
import {Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export const Intro = ()=> {
    return (
        <div>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className='col-12 col-sm-6'>
                            <img src="assets/images/remora.gif" height="346" width="600" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Remoree</h1>
                            <h4>The perfect smart task chair to work from home</h4>
                            <p>Remoree is a smart ergonomic-focused task chair which is highly customisable and configurable. It collects and processes the data of our customes' sitting habits and recommends a personalised configuration. By using Remoree, users will slowly take on better sitting posture wihich in turn increases comfort, health and productivity.</p>
                            <a href="https://forms.gle/2FwyJDfeZA29XcZE8" className='btn btn-info'>Place an order</a>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

