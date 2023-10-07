let a=document.getElementById("cel");
let b=document.getElementById("fh");
let c=document.getElementById("sc1").value;
let e=document.getElementById("sc2").value;
function cli(){
let d=(a.value*(9/5))+32;
document.getElementById("sc1").value=d;
}
function clic(){
    let f=((b.value-32)*(5/9));
document.getElementById("sc2").value=f;
}
