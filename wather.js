var cus_code=prompt(" enter customer's code ");
var begin=prompt(" enter customer's beginning meter ");
var end=prompt(" enter customer's ending meter ");
const max_value=999999999;
//calculation of water used
if (end-begin<0){
    var used_gallon=(max_value-begin)/10+end/10;
}
else{
    var used_gallon=(end-begin)/10;
}
cus_code=cus_code.trim();
//calculation of the money to be paid for the water used
if (cus_code==='r'){
   var result=5+used_gallon*0.005;
}
else if(cus_code==='c'){
    if (used_gallon<4000000){
        var result=1000.00;
    }
    else {
        var result=used_gallon*0.00025;
    }
}
else if(cus_code==='i'){
    if (used_gallon<4000000){
        var result=1000.00;
    }
    else if(used_gallon>4000000 && used_gallon<10000000) {
        var result=2000.00;
    }
    else{
        var result=used_gallon*0.00025;
    }
}
else{
    alert('You have entered the wrong user code')
}
alert("The customer's code = " + cus_code + "\n The customer's beginning meter = " + begin +"\n The customer's ending meter = " + end +"\n The gallons of water used by the customer = " + used_gallon.toFixed(2)+"\n The amount of money billed to the customer = " + result.toFixed(2))
console.log("The customer's code = " + cus_code);
console.log("The customer's beginning meter = " + begin );
console.log("The customer's ending meter = " + end);
console.log("The gallons of water used by the customer = " + used_gallon.toFixed(2));
console.log("The amount of money billed to the customer = " + result.toFixed(2) );
