import React, { Component } from 'react';
import { LinkForm } from './LinkForm';
import ReactTypingEffect from 'react-typing-effect'

export function LinkShortner(){
     return (
      <>
        <div class="container">
          <div class="row">
              <div class="col-sm-2">
              </div>
              <div class="col-sm-8">
                <center>
                  <br/><br/>
                  <h1>Shorten Links Like A Professional</h1> 
                  <br/>
                </center>
              </div>
              <div class="col-sm-2">
              </div>
          </div>
          <div class="row">
              <div class="col-sm-1.75">
              </div>
              <div class="col-sm-8.5">
                <div class="card">
                  <div class="card-body">
                    <h2>
                      <span class="material-icons">arrow_back</span>
                      <span class="material-icons">arrow_forward</span>
                      <span class="material-icons">refresh</span>
                      <span class="material-icons">home</span>
                      <div class="card"  style={{overflow: 'hidden'}}>
                        <div class="card-body">
                          <ReactTypingEffect 
                            text ={["www.somereallylongurl.com/someplace/somewhere", "www.ls.host/resource"]}
                            speed = {100}
                            eraseSpeed = {100}
                            typingDelay = {100}
                          />
                        </div>
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-sm-1.75">
              </div>
          </div>
          <div class="row">
              <div class="col-sm-12">
                <br/><br/><br/>
              </div>
          </div>
          <div class="row">
              <div class="col-sm-12">
                <center>
                  <LinkForm />
                </center>
              </div>
          </div>
        </div>
      </>
    );
}