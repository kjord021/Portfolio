import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { data } from 'jquery';

export function LinkForm(){
  
  const[url, setUrl] = useState("");
  const[isLinkCreated, setIsLinkCreated] = useState(false);
  const[responseUrl, setResponseUrl] = useState("");

  function sendPostRequest(e){
    e.preventDefault();

    var data = new FormData();

    data.append("url", JSON.stringify(url));

    fetch('/Links?url=' + url,
            {
                method: "POST",
            })
    .then(response => response.text())
    .then(data => {
      setResponseUrl(data);
    });

    setIsLinkCreated(true);
  }

  function copyToClipBoard(e) {
    e.preventDefault();
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', responseUrl);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

      return (
        <>
            <div class = "container">
              <div class = "row">
                <div class = "col-lg-3 col-sm-2">
                </div>
                <div class="col-lg-6 col-sm-8">
                  <div class="card">
                    <div class="card-body">
                      <form class="form-inline">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="form-group mx-sm-3 mb-2">
                          <label for="inputURL" class="sr-only">URL</label>
                          <input type="url" class="form-control" id="inputURL" placeholder="Please Enter a URL" onChange={e => setUrl(e.target.value)}/>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <button type="submit" class="btn btn-primary mb-2" onClick={sendPostRequest}>Create Link</button>
                      </form>
                      {isLinkCreated ? 
                        <div class="card">
                          <div class="card-body">
                            {responseUrl} &nbsp;&nbsp;&nbsp;
                            <button class="btn btn-primary mb-2" onClick={copyToClipBoard}><span class="material-icons">content_copy</span></button>
                          </div>
                        </div> : null}
                    </div>
                  </div>
                </div>
                <div class = "col-lg-3 col-sm-2">
                </div>
              </div>
            </div>
        </>
      );
}
  