function sitelen() {
    str = "";
    for (i = 0; i < S.length; i++) {
        str += "<div class='S'>";
        for (j = 0; j < S[i].length; j++) {
            str += "<div class='P'>";
            for (k = 0; k < S[i][j].length; k++) {
                str += "<div class='PRD'>";
                for (l = 0; l < S[i][j][k].length; l++) {
                    str = str + "<div class='PrepP'>";
                    for (m = 0; m < S[i][j][k][l].length; m++) {
                        discompound();
                        str += "<div class='Word'>" + S[i][j][k][l][m] + "</div>";
                    }
                    str += "</div>";
                }
                str += "</div>";
            }
            str += "</div>"
        }
        str += "</div>";

        switch (SType[i]) {
            case "q":
                str += "?";
                break;
            case "excl":
                str += "!";
                break;
            case "normal":
                str += ".";
                break;
        }

    }
}
function designArrange() {
    let pnum = -1;
    let prdnum = -1;
    let wordnum = -1;
    let TmpObj;
    for (i = 0; i < S.length; i++) {
        for (j = 0; j < S[i].length; j++) {
            pnum += 1;
            for (k = 0; k < S[i][j].length; k++) {
                prdnum += 1;
                for (l = 0; l < S[i][j][k].length; l++) {
                    for (m = 0; m < S[i][j][k][l].length; m++) {
                        wordnum += 1;
                        document.getElementsByClassName("Word")[wordnum].setAttribute('data-content',POS[i][j][k][l][m]);
                        switch (S[i][j][k][l][m]) {
                            case "o":
                            case "li":
                                TmpObj = document.getElementsByClassName('PRD')[prdnum];
                                TmpObj.style.background = "transparent";
                                TmpObj.style.fontWeight = "bold";
                                TmpObj.style.color = "#94530a";
                                break;
                            case "taso":
                            case "a":
                            case "anuSseme":
                                TmpObj = document.getElementsByClassName('P')[pnum];
                                TmpObj.style.color = "#333";
                                TmpObj.style.background = "transparent";
                                break;
                            case "la":
                                TmpObj = document.getElementsByClassName('P')[pnum];
                                TmpObj.style.color = "#333";
                                TmpObj.style.background = "transparent";
                                TmpObj.style.fontWeight = "bold";
                                break;
                        }
                    }
                }
            }
        }
    }
}
let f_m = "";
let count;
function lipu(){
    tbl = "<table><tr><th>文番号</th><th>節番号</th><th>部番号</th><th>句番号</th><th>語番号</th><th>単語</th><th>名詞</th><th>形容詞</th><th>動詞</th><th>副詞</th><th>機能語</th></tr>";
    for (i = 0; i < S.length; i++) {
        for (j = 0; j < S[i].length; j++) {
            for (k = 0; k < S[i][j].length; k++) {
                for (l = 0; l < S[i][j][k].length; l++) {
                    for (m = 0; m < S[i][j][k][l].length; m++) {
                        count++;
                        tbl += "<tr><td>" + i + "</td><td>" + j + "</td><td>" + k + "</td><td>" + l + "</td><td>" + m + "</td><td>" + S[i][j][k][l][m] + "</td><td> " + matchWords[count].n.join(',') + "</td><td>" + matchWords[count].adj.join(',') + "</td><td>" + matchWords[count].v.join(',') + "</td><td>" + matchWords[count].adv.join(',') + "</td><td>" + f_m + "</td></tr>";
                    }
                }
            }
        }
    }
    tbl += "</table>"
}