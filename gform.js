appname = "GFormJS"
author = "Mr Techtroid 2021"
versionid = "V1"

/*
-------------------------------------------------------
GFormJS
-------------------------------------------------------
This Script Enables Users To Make Customs Forms In HTML Which Posts The Content To Google Forms
Allows Users To Make Contact Forms For Websites Without Server Side
-------------------------------------------------------
(C) 2021 Mr Techtroid - github.com/mrtechtroid
Copyright 2021 Mr Techtroid - github.com/mrtechtroid
-------------------------------------------------------
Released Under MIT License
-------------------------------------------------------
Copyright 2021 Mr Techtroid

PPermission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-------------------------------------------------------
Additional Terms And Conditions
-------------------------------------------------------
These Are Certain Terms And Conditions which needs to be followed along with all the Rules the LICENSE Grants(If Exists/Applicable)
-------------------------------------------------------
-> By Contributing To The Following You Agree That You Are Transferring All Rights Of The Contributing Content To The Owner Or Come Up With A Agreement With The Owner To License The Code. 
-> You Need To Keep This License NOTICE intact if you modify the Source Code
-------------------------------------------------------

*/


/* Usage 
Check For Detailed Usage Guide:github.com/gformjs/README.JS

Use The Variable formid to give the form id.. 
The FORM Id Is Nothing But if THis Is An Form URL: 
https://docs.google.com/forms/d/e/1FAIpQLSfHa73PgG1-QQQQQTxT2EoBjD5bZbrg1cEVjnbaAReN4LLLLL/viewform
then this is the form id: 1FAIpQLSfHa73PgG1-QQQQQTxT2EoBjD5bZbrg1cEVjnbaAReN4LLLLL

Now Go To The Source Code Of The Form.
Then Head Over To The Bottom Part Of The Source Code Where Generally The Form Questions are present
in this format: [1922223643,"Sample",null,0,[[1771053333,null,1]
Now Grab The Number In The Second Bracket ie 1771053333
Now Supply a list of all numbers of all questions/blanks you want to fill. 
Then In Your HTML Form Assign All The Input Tags With The Tag "Gforminputvar" 
Note: The Code Will Run From Top To Bottom. 
Also It Is Currently Preferable To Use A Single Google Form for the entire site(for now).
In Coming Versions Of The JS Script There Will Be More Features. 

*/


formid = ""
forminputvar = []
forminput = []
data = ""
var newforminput
function getvaluefromvariable(){
    newforminput = forminput.slice(0)
    for (i = 0; i < document.getElementsByClassName("Gforminputvar").length; i++) {
        newforminput.push(document.getElementsByClassName("Gforminputvar")[i].value);
      }
}
function sendResponse(){
    data = ""
    getvaluefromvariable()
    if (formid == ""){
        console.log("Form ID Cannot Be Empty")
    }else {
        if (forminputvar.length == newforminput.length){
            for (i = 0; i < forminputvar.length; i++) {
                data += "entry." + forminputvar[i] + "=" + newforminput[i] + "&";
              }
        } else {
            console.log("No. of FORMINPUTVariables Not Equal To The No of Inputs In A Response")
        }
        
        f_url = "https://docs.google.com/forms/d/e/" + formid + "/formResponse?" + data
        ifeq =  document.createElement("iframe")
        ifeq.id = "tempIF_G"
        ifeq.width = "1px"
        ifeq.height = "1px"
        ifeq.style.display = "none"
        ifeq.onload = "document.getElementById('tempID_G').remove();"
        ifeq.src = f_url
        document.getElementsByTagName("body")[0].appendChild(ifeq);
        
    }
    
}
