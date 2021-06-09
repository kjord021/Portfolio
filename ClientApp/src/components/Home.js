import React, { Component } from 'react';
import Project from './Project';
import ProjectMapper from './ProjectMapper';

export class Home extends Component {
  static displayName = Home.name;

  render () {

    return (
      <>
        <div class ="container">
          <div class="row">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-8">
              <center>
                <h1>Welcome To Kyle's Dev Box.</h1>
                <br />
                <ProjectMapper />
              </center>
            </div>
            <div class="col-sm-2">
            </div>
          </div>
        </div>
      </>
    );
  }
}
