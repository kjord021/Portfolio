import React, { Component } from 'react';
import { Link } from "react-router-dom";


export function Project(props) {
    return(
        <>
            <div class="card" style={{width: '25rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <Link to={props.link}>
                    <a href="#" class="card-link">See the project</a>
                    </Link>
                </div>
            </div>
            <br />
        </>
    );
}

export default Project;