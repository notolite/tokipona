var S = [];
var input;
var str = "";
let P = [];
let POS = [];
let SType = [];
let dic;
// let requestURL = 'https://raw.githubusercontent.com/leenamgwang/tokipona/master/dic.json'; // on github
let requestURL = 'dic.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
    dic = request.response;
}
let matchWords = new Array();