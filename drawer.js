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
                        document.getElementsByClassName("Word")[wordnum].setAttribute('data-content', POS[i][j][k][l][m]);
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
function lipu() {
    let n_m = adj_m = v_m = adv_m = f_m = "", count = 0;
    tbl = "<table><tr><th>文番号</th><th>節番号</th><th>部番号</th><th>句番号</th><th>語番号</th><th>単語</th><th>名詞</th><th>形容詞</th><th>動詞</th><th>副詞</th><th>機能語</th></tr>";
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < S[i].length; j++) {
            for (let k = 0; k < S[i][j].length; k++) {
                for (let l = 0; l < S[i][j][k].length; l++) {
                    for (let m = 0; m < S[i][j][k][l].length; m++) {
                        n_m = adj_m = v_m = adv_m = f_m = "";
                        try { n_m = matchWords[count][0].n.join(','); } catch { n_m = ""; }
                        try { adj_m = matchWords[count][0].adj.join(','); } catch { adj_m = ""; }
                        try { v_m = matchWords[count][0].v.join(','); } catch { v_m = ""; }
                        try { adv_m = matchWords[count][0].adv.join(','); } catch { adv_m = ""; }
                        try { f_m = matchWords[count][0].f.join(','); } catch { f_m = ""; }
                        count++;
                        tbl += "<tr><td>" + i + "</td><td>" + j + "</td><td>" + k + "</td><td>" + l + "</td><td>" + m + "</td><td>" + S[i][j][k][l][m] + "</td><td> " + n_m + "</td><td>" + adj_m + "</td><td>" + v_m + "</td><td>" + adv_m + "</td><td>" + f_m + "</td></tr>";
                    }
                }
            }
        }
    }
    tbl += "</table>"
    matchWords = [];
}
function gray() {
    const grayOpacity = 0.3;
    const table = document.getElementsByTagName("table")[0];
    for (let i = 0; i < table.rows.length - 1; i++) {
        for (let j = 0; j < 5; j++) {
            let cc = table.rows[i + 1].cells[j + 6];
            if (cc.innerText == "") {
                cc.style.opacity = grayOpacity;
            }
        }
    }
    count = 0;
    let graylist = new Array();
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < S[i].length; j++) {
            for (let k = 0; k < S[i][j].length; k++) {
                for (let l = 0; l < S[i][j][k].length; l++) {
                    for (let m = 0; m < S[i][j][k][l].length; m++) {
                        count++;
                        switch(POS[i][j][k][l][m]){
                            case "名":
                                graylist = [7,8,9,10];
                                break;
                            case "形":
                                graylist = [6,8,9,10];
                                break;
                            case "動":
                                graylist = [6,7,9,10];
                                break;
                            case "副":
                                graylist = [6,7,8,10];
                                break;
                            case "名/形/動":
                                graylist = [9,10];
                                break;
                            case "形/副":
                                graylist = [6,8,10];
                                break;
                            case "接":
                            case "分":
                            case "詠":
                            case "疑":
                            case "前":
                                graylist = [6,7,8,9];
                                break;
                        }
                        for (let n = 0; n < graylist.length; n++) {
                            table.rows[count].cells[graylist[n]].style.opacity = grayOpacity;
                        }
                        graylist = [];
                    }
                }
            }
        }
    }
}