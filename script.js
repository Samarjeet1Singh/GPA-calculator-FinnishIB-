function cal(){
  
  var grad=Number(document.getElementById("grades").value);
  
  var grad1=Number(document.getElementById("grades1").value);
  
  var grad2=Number(document.getElementById("grades2").value);
  
  var grad3=Number(document.getElementById("grades3").value);
  
  var grad4=Number(document.getElementById("grades4").value);
  
  var grad5=Number(document.getElementById("grades5").value);
  
  var grad6=Number(document.getElementById("grades6").value);
  
  var grad7=Number(document.getElementById("grades7").value);
  
  var grad8=Number(document.getElementById("grades8").value);
  
  var grad9=Number(document.getElementById("grades9").value);
  
  var grad10=Number(document.getElementById("grades10").value);





  var ans=0

  ans=(grad+grad1+grad2+grad3+grad4+grad5+grad6+grad7+grad8+grad9+grad10)/11;
console.log(grad)
  document.getElementById("result").innerHTML=ans.toFixed(2);
}