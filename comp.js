function compounds(){
    S[i] = S[i].replace("anu seme","anuSseme");
    S[i] = S[i].replace(/\s([A-Z])/g,"S$1");
}
function discompound(){
    S[i][j][k][l][m] = S[i][j][k][l][m].replace("anuSseme","anu seme");
    S[i][j][k][l][m] = S[i][j][k][l][m].replace(/S([A-Z])/g," $1");
}