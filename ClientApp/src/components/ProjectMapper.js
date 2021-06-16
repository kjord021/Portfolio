import Project from "./Project";
import React, { Component } from 'react';


export default function ProjectMapper() {

    const Projects = [
        {
            "title": "LinkShortner",
            "description": "A simple app designed to shorten links. Made with ASP.Net (and SQL SERVER) on the backend, with a React frontend.",
            "link": "/LinkShortner"
        },
        {
            "title": "Kyle's Notepad",
            "description": "A simple app designed to replicate and evetually extend the features of Notepad. Made with .Net Framework and System Windows Forms.",
            "link": "/Notepad"
        },
        {
            "title": "UniqueCodes",
            "description": "A simple app designed to a fixed number of Unique Codes. This project was made with the intention of helping developers generate unique identifiers that can be used in their projects. Made with ASP.Net on the backend and React on the frontend.",
            "link": "/UniqueCodes"
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