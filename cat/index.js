function lighton(){
    document.getElementById("light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("eye").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onbtn").style.background="Green";
    document.getElementById("offbtn").style.background="grey";
   }
   function lightoff(){
     document.getElementById("light").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
     document.getElementById("eye").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
     document.getElementById("offbtn").style.background="red";
     document.getElementById("onbtn").style.background="grey";
   }
