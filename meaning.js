
function lukin() {
    for (var i = 0; i < S.length; i++) {
        for (var j = 0; j < S[i].length; j++) {
            for (var k = 0; k < S[i][j].length; k++) {
                for (var l = 0; l < S[i][j][k].length; l++) {
                    for (var m = 0; m < S[i][j][k][l].length; m++) {
                        var tmpword = S[i][j][k][l][m];
                        matchWords.push(dic.list.filter((item,index) => {
                            return (item.word.includes(tmpword));
                        }));
                    }
                }
            }
        }
    }
}