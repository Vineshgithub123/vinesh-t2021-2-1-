function generate(){

var a = document.getElementById('input').value
var v = parseInt(a)

    let n =v+(v-1)
    for(let i=1; i<=n; i++){
    if(i % 2 != 0){
    var number =i
    console.log(number);
    document.getElementById("result").innerHTML = i;
    }
    
    }
    


}