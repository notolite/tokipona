// problems to be tackled
// : how we can deal with commas
// : how we can deal with the "ni:" clause
// : command

function kipisi() {
    var lastL = input.slice(-1);
    if (lastL == "." || lastL == "?" || lastL == "!") {
        input = input.substr(0, input.length - 1);
    }
    S = input.split(/\.\s|\?\s|\!\s/g);
    for (i = 0; i < S.length; i++) {
        compounds();
        S[i] = S[i].split(/(^taso\s|\so,\s|\sla\s|\sanuSseme|\sa$)/);
        S[i] = S[i].filter(Boolean);
        for (var j = 0; j < S[i].length; j++) {
            if (S[i][j] == "taso" || S[i][j] == "anu seme" || S[i][j] == "a" || S[i][j] == "la") {
                S[i][j] = [[[S[i][j]]]];
            } else {
                var AddLI;
                if (S[i][j].slice(0, 2) == "mi" || S[i][j].slice(0, 4) == "sina") {
                    if (S[i][j].slice(0, 2) == "mi") {
                        S[i][j] = S[i][j].slice(0, 3) + "li " + S[i][j].slice(3);
                        AddLI = "mi";
                    } else {
                        S[i][j] = S[i][j].slice(0, 5) + "li " + S[i][j].slice(5);
                        AddLI = "sina";
                    }
                }
                S[i][j] = S[i][j].split(/(\sli\s|\so\s|^o\s)/g);
                S[i][j] = S[i][j].filter(Boolean);
                for (var k = 0; k < S[i][j].length; k++) {
                    S[i][j][k] = S[i][j][k].split(/(?=\skepeken\s|\slon\s|\stan\s|\stawa\s|\slon\s|\se\s)/g);
                    for (var l = 0; l < S[i][j][k].length; l++) {
                        S[i][j][k][l] = S[i][j][k][l].split(/\s/);
                        S[i][j][k][l] = S[i][j][k][l].filter(Boolean);
                    }
                }
                if ((S[i][j][0][0] == "mi" || S[i][j][0][0] == "sina") && S[i][j][1][0] == "li") {
                    S[i][j].splice(1, 1);
                }
            }
        }
    }
}