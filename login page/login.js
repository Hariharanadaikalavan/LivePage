//alert('Hi welcome to my page.This is hariharan')

document.getElementById('btn').addEventListener('click',login)

    function login()
    {
      var txt=document.getElementById('uname').value;
      var ptn=/[a-z]{5}/g;
      if(txt.match(ptn))
      {
        document.getElementById('uname2').innerText="Your correct";
        document.getElementById('uname1').innerText=" ";
      }
      else{
        document.getElementById('uname1').innerText="Pls use A-Z & a-z Respectively Minimum:5 Character";
        document.getElementById('uname2').innerText="";
      }


      var txt=document.getElementById('emai').value;
      var ptn=new RegExp("[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{3}");
      if(txt.match(ptn))
      {
        document.getElementById('emai2').innerText="Your correct";
        document.getElementById('emai1').innerText=" ";
      }
      else{
        document.getElementById('emai1').innerText="Pls use A-Z,a-z,0-9 and @ Respectively";
        document.getElementById('emai2').innerText="";
      }


      var txt=document.getElementById('number').value;
      var ptn=new RegExp("[0-9]{10}");
      if(txt.match(ptn))
      {
        document.getElementById('mobi2').innerText="Your correct";
        document.getElementById('mobi1').innerText="";
      }
      else{
        document.getElementById('mobi1').innerText="pls enter 10 Number Respectively";
        document.getElementById('mobi2').innerText="";
      }

      var txt=document.getElementById('password').value;
      var ptn=/^(?=.*[!@#$%^&*]).{2}$/;
      if(txt.match(ptn))
      {
        document.getElementById('pass2').innerText="Your correct";
        document.getElementById('pass1').innerText=" ";
      }
      else{
        document.getElementById('pass1').innerText="pls use {!,@,#,$,%,^,&,*} any one these Respectively";
        document.getElementById('pass2').innerText="";
      }


      var txt=document.getElementById('city').value;
      var ptn=new RegExp("[A-Z]");
      if(txt.match(ptn))
      {
        document.getElementById('city2').innerText="Your correct";
        document.getElementById('city1').innerText=" ";
      }
      else{
        document.getElementById('city1').innerText="pls use uppercase";
        document.getElementById('city2').innerText="";
      }


      var txt=document.getElementById('pincode').value;
      var ptn=new RegExp("[0-9]{6}");
      if(txt.match(ptn))
      {
        document.getElementById('pin2').innerText="Your correct";
        document.getElementById('pin1').innerText=" ";
      }
      else{
        document.getElementById('pin1').innerText="pls enter 6 digits respectively";
        document.getElementById('pin2').innerText="";  
      }



    }
