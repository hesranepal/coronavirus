
//grab a news container
let newsAccordian = document.getElementById('newsAccordian');


//create a get request
//document.getElementById('pageTitle').innerHTML="Corona Virus Realted News";
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://nepalcorona.info/api/v1/news`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        //console.log(json);
        let articles = json.data;
        let newsHTMl = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                   <span class="text-white bg-danger mr-2 "><b>Breaking News ${index + 1}</b> </span>  <span class="ml-30"> ${element["title"]}
                               </span></button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                              ${element["summary"]} <a href="${element.url}" target="_blank">Read more here</a>
                            </div>
                        </div>
                  </div> `;


            newsHTMl += news;

        });
        newsAccordian.innerHTML = newsHTMl;
    } else {
        console.log('some error occured');
    }
}
xhr.send();

//corona virus related news
function getNews(){
    document.getElementById('pageTitle').innerHTML="Corona Virus Realted News";
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://nepalcorona.info/api/v1/news`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        //console.log(json);
        let articles = json.data;
        let newsHTMl = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                   <span class="text-white bg-danger mr-2 "><b>Breaking News ${index + 1}</b> </span>  <span class="ml-30"> ${element["title"]}
                               </span></button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                              ${element["summary"]} <a href="${element.url}" target="_blank">Read more here</a>
                            </div>
                        </div>
                  </div> `;


            newsHTMl += news;

        });
        newsAccordian.innerHTML = newsHTMl;
    } else {
        console.log('some error occured');
    }
}
xhr.send();
}
function getReport() {
    document.getElementById('pageTitle').innerHTML="WHO and MOHP Situation Reports";

    xhr.open('GET', `https://nepalcorona.info/api/v1/sitreports
    `, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            //console.log(json);
            let articles = json.data;
            let newsHTMl = "";
            articles.forEach(function (element, index) {
                let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                   <span class="text-white bg-danger mr-2 "><b>Date: ${element.date}</b> </span>  <span class="ml-30"> info by :${element["type"]}
                               </span></button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                            <a href="${element["url"]}">${element.url}</a> <a href="${element.url}" target="_blank">Read more here</a>
                            </div>
                        </div>
                  </div> `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}

function nepInfectData() {
    document.getElementById('pageTitle').innerHTML = "Nepal Infection Data";
    xhr.open('GET', `https://nepalcorona.info/api/v1/data/nepal`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let newsHTMl = "";
            let news = `
                       
                   <table border=1 class="text-center table table-sm font-weight-bold">
                    <tr>
                    <td class="table-danger p-3">Tested-positive</td>
                    <td class="table-danger p-3">${json.tested_positive}</td>
                    </tr>
                    <tr>
                    <td class="table-success p-3">Tested-negative</td>
                    <td class="table-success p-3">${json.tested_negative}</td>
                    </tr>
                     <tr>
                    <td class="table-warning p-3">Tested total</td>
                    <td class="table-warning p-3">${json.tested_total}</td>
                    </tr> 
                    </table> 

                   <p class="text-center"> <a href="${json.source}" target="_blank">Read full information here</a><p>
                  
                 `;


            newsHTMl += news;

            // });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}
function worldInfectData() {
    document.getElementById('pageTitle').innerHTML = "World Infection Data";
    xhr.open('GET', `https://nepalcorona.info/api/v1/data/world`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            //let articles=json.data;
            let newsHTMl = "";
            json.forEach(function (element, index) {
                if (index == 0) {
                    var country = "WORLD";
                } else { country = "Country"; }
                let news = `
                   
                     <table border=1 class="text-center table table-sm font-weight-bold">
                    <tr>
                    <td class="table-dark p-25">${country}</td>
                    <td class="table-dark p-25">${element.country}</td>
                    </tr>
                    <tr>
                    <td class="table-success p-25">Total cases</td>
                    <td class="table-success p-25">${element.totalCases}</td>
                    </tr>
                     <tr>
                    <td class="table-warning p-25">New cases</td>
                    <td class="table-warning p-25">${element.newCases}</td>
                    </tr> 
                    <tr>
                    <td class="table-primary p-25">Total Deaths</td>
                    <td class="table-primary p-25">${element.totalDeaths}</td>
                    </tr> 
                    <tr>
                    <td class="table-secondary p-25">New Deaths</td>
                    <td class="table-secondary p-25">${element.newDeaths}</td>
                    </tr> 
                    <tr>
                    <td class="table-light p-25">Active cases</td>
                    <td class="table-light p-25">${element.activeCases}</td>
                    </tr> 
                    <tr>
                    <td class="table-warning p-25">Total recovered</td>
                    <td class="table-warning p-25">${element.totalRecovered}</td>
                    </tr> 
                    <tr>
                    <td class="table-danger p-25">Critical cases</td>
                    <td class="table-danger p-25">${element.criticalCases}</td>
                    </tr> 
                    </table> 
                    
                  <br>

                 `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}
function getMyths() {
    document.getElementById('pageTitle').innerHTML = "CoronaVirus Myths";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://nepalcorona.info/api/v1/myths`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            //console.log(json);
            let articles = json.data;
            let newsHTMl = "";
            articles.forEach(function (element, index) {
                let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                   <span class="text-white bg-danger mr-2 "><b>Myths ${index + 1}</b> </span>   ${element["myth"]}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                              ${element["reality"]} <a href="${element.source_url}" target="_blank">Read more here</a>
                            </div>
                        </div>
                  </div> `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}

function faqs() {
    document.getElementById('pageTitle').innerHTML = "FAQs about COVID-19";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://nepalcorona.info/api/v1/faqs`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            //console.log(json);
            let articles = json.data;
            let newsHTMl = "";
            articles.forEach(function (element, index) {
                let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                                   <span class="text-white bg-danger mr-2 "><b>Question ${index + 1}</b> </span>   ${element["question_np"]}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordian">
                            <div class="card-body">
                              ${element["answer_np"]} 
                            </div>
                        </div>
                  </div> `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}

//all nepali infection data
function allNepInfectData() {
    document.getElementById('pageTitle').innerHTML = "All Nepali Infection Data";
    xhr.open('GET', `https://nepalcorona.info/api/v1/data/allnepali`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles=json.data;
            let newsHTMl = "";
            articles.forEach(function (element, index) {
        
                let news = `
                      <table border=1 class="text-center table table-sm font-weight-bold">
                    <tr>
                    <td class="table-danger p-25">Date</td>
                    <td class="table-danger p-25">${element.date}</td>
                    </tr>
                    <tr>
                    <td class="table-success p-25">Country</td>
                    <td class="table-success p-25">${element.country}</td>
                    </tr>
                     <tr>
                    <td class="table-warning p-25">Total cases</td>
                    <td class="table-warning p-25">${element.totalCases}</td>
                    </tr> 
                    <tr>
                    <td class="table-primary p-25">Deaths</td>
                    <td class="table-primary p-25">${element.deaths}</td>
                    </tr> 
                    <tr>
                    <td class="table-secondary p-25">Source</td>
                    <td class="table-secondary p-25"><a href="${element.source_url}">${element.source}</a></td>
                    </tr> 
                   
                    </table> 
                   
                  <br>

                 `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}

//Hospital List
function listHospitals(){
    document.getElementById('pageTitle').innerHTML = "List of Hospitals";
    xhr.open('GET', `https://nepalcorona.info/api/v1/hospitals`, true);
    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles=json.data;
            let newsHTMl = "";
            articles.forEach(function (element, index) {
                if (index == 0) {
                    var country = "WORLD";
                } else { country = "Country"; }
                let news = `
                         <table border=1 class="text-center table table-sm font-weight-bold">
                    <tr>
                    <td class="table-dark p-25">Name of hospital</td>
                    <td class="table-dark p-25">${element.name}</td>
                    </tr>
                    <tr>
                    <td class="table-success p-25">Contact Person</td>
                    <td class="table-success p-25">${element.contact_person}</td>
                    </tr>
                     <tr>
                    <td class="table-warning p-25">Contact perrson number</td>
                    <td class="table-warning p-25">${element.contact_person_number} , ${element.phone}</td>
                    </tr> 
                    <tr>
                    <td class="table-primary p-25">Address</td>
                    <td class="table-primary p-25">${element.address}</td>
                    </tr> 
                    <tr>
                    <td class="table-secondary p-25">State</td>
                    <td class="table-secondary p-25">${element.state}</td>
                    </tr> 
                    <tr>
                    <td class="table-light p-25">No. of Doctor</td>
                    <td class="table-light p-25">${element.capacity.doctors}</td>
                    </tr> 
                    <tr>
                    <td class="table-warning p-25">No. of Nurses</td>
                    <td class="table-warning p-25">${element.capacity.nurses}</td>
                    </tr> 
                    <tr>
                    <td class="table-danger p-25">Total beds</td>
                    <td class="table-danger p-25">${element.capacity.beds}</td>
                    </tr> 
                    <tr>
                    <td class="table-danger p-25">Isolation beds</td>
                    <td class="table-danger p-25">${element.capacity.isolation_beds}</td>
                    </tr> 
                    <tr>
                    <td class="table-danger p-25">Occupied beds</td>
                    <td class="table-danger p-25">${element.capacity.occupied_beds}</td>
                    </tr> 
                    </table> 
                    
                  <br>

                 `;


                newsHTMl += news;

            });
            newsAccordian.innerHTML = newsHTMl;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
}

//search 
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
	let inputVal=search.value.toLowerCase();
    
    let newsCards=document.getElementsByClassName('card');
    Array.from(newsCards).forEach( function(element) {
        let cardTxt=element.getElementsByTagName('div')[0].innerText;
        
    	if(cardTxt.includes(inputVal)){
    		element.style.display = "block";
    	}else{
    		element.style.display = "none";
    	}
     });
});

