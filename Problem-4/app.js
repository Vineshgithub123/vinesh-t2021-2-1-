// calling function,which will execute when clicking button
function generate(){
// defining keys
    const num =[1,2,3,4,5,6,7,8,9]
//  finding no of counts of multiples of keys
findtotalcount = arr =>{
    let obj ={}
    num.map(item=>{
        obj[item]=arr.filter(arrItem=>(arrItem % item==0)).length
    })
    return obj;
}
// requiring input
let data=document.getElementById('input').value
console.log(data);
var data1 = data.split(',')
console.log(data1);
const output =findtotalcount(data1)
console.log(output);

}