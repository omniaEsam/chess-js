var r =' ' ;
for(var row =1 ; row<=8 ; row++){
    r+= "<tr>"
    for(var col=1 ; col<=8 ; col++){
        if((row+col)%2){
            r += "<td width ='30px' height='30px' bgcolor='white'></td>" 
        }
    else{
        r += "<td width ='30px' height='30px' bgcolor='black'></td>" 
    }
    }
    r+= "</tr>"
}
document.getElementById("table").innerHTML = r ;