'use strict';
let S = [];
let input;
let str = "";
let P = [];
let POS = [];
let SType = [];
let dic;
let requestURL = 'dic.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
    dic = request.response;
}
let matchWords = new Array();
let grayOpacity = 0.3;