function desconhecida(){
    var arrayr=[];

    for (var i = 1; i <=6; i++) {
        var n = Math.floor(Math.random() * 61);
        arrayr.push(n);
        
    }
    return arrayr;
}

console.log(desconhecida());