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
let n_m = adj_m = v_m = adv_m = f_m = "";
let count = 0;
function lipu(){
    tbl = "<table><tr><th>文番号</th><th>節番号</th><th>部番号</th><th>句番号</th><th>語番号</th><th>単語</th><th>名詞</th><th>形容詞</th><th>動詞</th><th>副詞</th><th>機能語</th></tr>";
    for (i = 0; i < S.length; i++) {
        for (j = 0; j < S[i].length; j++) {
            for (k = 0; k < S[i][j].length; k++) {
                for (l = 0; l < S[i][j][k].length; l++) {
                    for (m = 0; m < S[i][j][k][l].length; m++) {
                        n_m = adj_m = v_m = adv_m = f_m = "";
                        try{n_m = matchWords[count][0].n.join(',');}catch{n_m = "N/A";}
                        try{adj_m = matchWords[count][0].adj.join(',');}catch{adj_m = "N/A";}
                        try{v_m = matchWords[count][0].v.join(',');}catch{adv_m = "N/A";}
                        try{adv_m = matchWords[count][0].adv.join(',');}catch{v_m = "N/A";}
                        try{f_m = matchWords[count][0].adv.join(',');}catch{f_m = "N/A";}
                        count++;
                        tbl += "<tr><td>" + i + "</td><td>" + j + "</td><td>" + k + "</td><td>" + l + "</td><td>" + m + "</td><td>" + S[i][j][k][l][m] + "</td><td> " + n_m + "</td><td>" + adj_m + "</td><td>" + v_m + "</td><td>" + adv_m + "</td><td>" + f_m + "</td></tr>";
                    }
                }
            }
        }
    }
    tbl += "</table>"
}