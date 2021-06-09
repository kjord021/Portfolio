import React, { Component, useState } from 'react';
import {saveAs} from 'file-saver';

export function UniqueCodes() {

    const[fileName, setFileName] = useState("");
    const[number, setNumber] = useState(0);
    const[fileCheck, setFileCheck] = useState(false);
    const[numberCheck, setNumberCheck] = useState(false);
    const[enableButton, setEnableButton] = useState(false);

    function testSetEnabledFileName(fileName){
        if (fileName == null || fileName == "") {
            setFileCheck(false);
        }
        else if (!fileName.endsWith('.csv')){
            setFileCheck(false);
        }
        else {
            setFileName(fileName);
            setFileCheck(true);
            testChecks();
        }
    }

    function testSetEnabledNumber(number){
        if (number == 0 || number == null){
            setNumberCheck(false);
        }
        else {
            setNumber(number);
            setNumberCheck(true);
            testChecks();
        }
    }

    function testChecks(){
        if (fileCheck && numberCheck){
            setEnableButton(true);
        }
        else {
            setEnableButton(false);
        }
    }

    function sendPostRequest(e){
        e.preventDefault();
    
        var data = new FormData();
    
        data.append("fileName", JSON.stringify(fileName));
        data.append("number", JSON.stringify(number));
    
        fetch('/UniqueCodes?fileName=' + fileName + "&number=" + number,
                {
                    method: "POST",
                })
        .then(response => response.blob())
        .then(blob => saveAs(blob, fileName))
        .then(data => {
        });

        fetch('/UniqueCodes?fileName=' + fileName,
                {
                    method: "GET",
                })
        .then(response => response.text())
        .then(data => {
        });

      }

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8">
                        <center>
                            <h1>UniqueCodes</h1>
                            <p>Generate a csv with any amount of unique identfiers within it.</p>
                        </center>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
                <br/><br/><br/>
                <div class="row">
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-8">
                        <div class="card" >
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputName">Name of csv</label>
                                        <input type="name" class="form-control" id="exampleInputName1" aria-describedby="Name" placeholder="Enter Name Of CSV" onChange={e => testSetEnabledFileName(e.target.value)}/>
                                        <small id="emailName" class="form-text text-muted">Please enter in format "name.csv".</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputNumber">Amount of unique codes to generate</label>
                                        <input type="number" class="form-control" id="exampleInputNumber" placeholder="Number" onChange={e => testSetEnabledNumber(e.target.value)}/>
                                    </div>
                                    {enableButton ? <center><button type="submit" class="btn btn-primary" onClick={sendPostRequest}>Submit</button></center> : <center><button type="submit" class="btn btn-primary" onClick={sendPostRequest} disabled>Submit</button></center>}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
            </div>
        </>
    );
}