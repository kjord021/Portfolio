import Project from "./Project";
import React, { Component } from 'react';

export default function ProjectMapper() {

    const Projects = [
        {
            "title": "LinkShortner",
            "description": "A simple app designed to shorten links. Made with ASP.Net (and SQL SERVER) on the backend, with a React frontend.",
            "link": "/LinkShortner"
        },
    ]

    return(
        <>
        {Projects.map((element) =>
            <Project 
                title={element.title}
                description={element.description}
                link={element.link}
            />
        )}
        </>
    );
}