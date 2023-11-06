fetch('./hari.json')
.then((res)=>res.json())
.then((datalist)=>{
let tablebody=document.getElementById('tbodyid')
let getdata=" ";

datalist.map((index)=>{

    getdata+=`<tr>
    
    <td>${index.registerNumber}</td>
    <td>${index.Name}</td>
    <td>${index.age}</td>
    <td>${index.Designation}</td>
    <td>${index.skills}</td>`;
    
})
tablebody.innerHTML=getdata;
})
