// 部の中で最初の句以外は全て前置詞句なので最初の単語が前置詞で，その後は全て名詞句

function lon() {
    for (var i = 0; i < S.length; i++) {
        P.push(new Array());
        POS.push(new Array());
        for (var j = 0; j < S[i].length; j++) {
            P[i].push(new Array());
            POS[i].push(new Array());
            for (var k = 0; k < S[i][j].length; k++) {
                P[i][j].push(new Array());
                POS[i][j].push(new Array());
                for (var l = 0; l < S[i][j][k].length; l++) {
                    POS[i][j][k].push(new Array());
                    for (var m = 0; m < S[i][j][k][l].length - 2; m++) {
                        if (S[i][j][k][l][m] == S[i][j][k][l][m + 2]) { // 中国語的疑問文の判定
                            SType.push("q");
                        }
                    }
                    for (var m = 0; m < S[i][j][k][l].length; m++) {
                        POS[i][j][k][l].push(new Array());
                        switch (S[i][j][k][l][m]) {
                            case "o":
                                if (S[i][j].slice(-1)[0][0][0] != "o") { // oの判定
                                    SType.push("excl"); // 命令：文種を命令文に
                                    P[i][j][k] = "G";
                                } else {
                                    P[i][j][k - 1] = "N"; // 呼びかけ：　呼格を名詞に
                                    P[i][j][k] = "G";　// o本体は機能語に
                                }
                                break;
                            case "e":
                                P[i][j][k] = "V";　// e節があれば動詞句
                                break;
                            case "anu":
                                SType.push("q"); // anuがあれば文種は疑問文
                                break;
                            case "anuSseme":
                                SType.push("q"); // anu semeがあれば文種は疑問文
                                P[i][j][k] = "G";
                                break;
                            case "taso":
                                if (m == 0) { // 機能語・修飾語判定
                                    P[i][j][k] = "G"; // 文頭のtasoは機能語
                                }
                                break;
                            case "a":
                                if (m == S[i][j][k][l].length) {
                                    P[i][j][k] = "G";　// 文末のaは機能語：　ほんまか？
                                }
                                break;
                            case "en":
                                P[i][j][k] = "N";
                                break;
                            case "li":
                            case "la":
                                P[i][j][k] = "G";
                                break;
                            default:
                                if (k == 0) {
                                    P[i][j][k] = "N";
                                } else {
                                    P[i][j][k] = "U";
                                }
                                break;
                        }

                    }
                }
            }
        }
        if (SType.length < S.length) {
            SType.push("normal");
        }
    }
    for (var i = 0; i < S.length; i++) {
        for (var j = 0; j < S[i].length; j++) {
            for (var k = 0; k < S[i][j].length; k++) {
                for (var l = 0; l < S[i][j][k].length; l++) {
                    for (var m = 0; m < S[i][j][k][l].length; m++) {
                        if (l == 0) {
                            switch (P[i][j][k]) {
                                case "N":
                                    if (m == 0) {
                                        POS[i][j][k][l][m] = "名";
                                    } else {
                                        POS[i][j][k][l][m] = "形";
                                    }
                                    break;
                                case "V":
                                    if (m == 0) {
                                        POS[i][j][k][l][m] = "動";
                                    } else {
                                        POS[i][j][k][l][m] = "副";
                                    }
                                    break;
                                case "U":
                                    if (m == 0) {
                                        POS[i][j][k][l][m] = "名/形/動";
                                    } else {
                                        POS[i][j][k][l][m] = "形/副";
                                    }
                                    break;
                                case "G":
                                    switch (S[i][j][k][l][m]) {
                                        case "taso":
                                            POS[i][j][k][l][m] = "接";
                                            break;
                                        case "li":
                                            POS[i][j][k][l][m] = "分";
                                            break;
                                        case "o":
                                            POS[i][j][k][l][m] = "分";
                                            break;
                                        case "a":
                                            POS[i][j][k][l][m] = "詠";
                                            break;
                                        case "anu":
                                            POS[i][j][k][l][m] = "接";
                                            break;
                                        case "anuSseme":
                                            POS[i][j][k][l][m] = "疑";
                                            break;
                                        case "la":
                                            POS[i][j][k][l][m] = "分";
                                            break;
                                    }
                                    break;
                            }
                        } else {
                            if (m == 0) {
                                POS[i][j][k][l][m] = "前";
                            } else if (m == 1) {
                                POS[i][j][k][l][m] = "名";
                            } else {
                                POS[i][j][k][l][m] = "形";
                            }
                        }
                        switch (S[i][j][k][l][m]) {
                            case "en":
                                POS[i][j][k][l][m] = "接";
                                break;
                            case "e":
                                POS[i][j][k][l][m] = "分";
                                break;
                        }
                    }
                }
            }
        }
    }
}