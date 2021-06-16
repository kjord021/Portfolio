import React, { Component } from 'react';
import { Link } from "react-router-dom";

export function KylesNotePad(){

    const uploadedFileLink = '/Projects/Notepad.zip';
    const uploadedImageLink = '/Images/notepad.png';

     return (
      <>
        <div class="container">
          <div class="row">
              <div class="col-sm-2">
              </div>
              <div class="col-sm-8">
                <center>
                  <h1>Kyle's Notepad</h1>
                  <img src={uploadedImageLink} class="img-fluid" alt="Responsive image"></img><br/><br/>
                  <p>This is my recreation of notepad originally developed by Microsoft. My main reasoning for creating this was the ability to change a saved file extension which was something I always had issues with using Microsoft's version.
                  This is a completely recreation of the application and I will be making changes and updates to it as I think of new features I want implemented. You can download the project using the link below.</p>
                  <a href={uploadedFileLink} target="_blank"  rel="noopener noreferrer" download><button type="button" class="btn btn-primary">Download</button></a>
                </center>                
              </div>
              <div class="col-sm-2">
              </div>
          </div>
        </div>
      </>
    );
}
