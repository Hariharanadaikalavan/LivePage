var arr=[];
  

document.getElementById('btnid').addEventListener("click",addtotable => {
   var stockItem = document.getElementById("textbox").value;
   arr.push(stockItem);
   document.getElementById('textbox').value="";
   add();
})


function add()
{
   var registernumber=0;
   var emptystr=" ";
  
   
    arr.forEach((value,index) =>
    {
      registernumber += 1;

      emptystr=emptystr+ '<tr><td> '+registernumber+' </td><td> '+value+'</td> <td><button onclick=display('+index+')>Remove</button></td></tr>';   
    })
    document.getElementById('table').innerHTML=emptystr;
}
function display(index){
   arr.splice(index,1);
   add();
}
