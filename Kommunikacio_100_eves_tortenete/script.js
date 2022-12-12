
window.addEventListener("resize", ()=>{
  closeNav()
})

function openNav() {
    if(window.innerWidth < 550){
      document.getElementsByTagName("main")[0].style.display = "none";
      document.getElementsByTagName("header")[0].style.display = "none";
      document.getElementsByTagName("footer")[0].style.display = "none";
      document.getElementById("mySidenav").style.display = "block";
      document.getElementById("mySidenav").style.width = window.innerWidth + "px";
      document.getElementById("mySidenav").addEventListener("click", ()=>{
        closeNav()
      })
    }
    else{
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementsByTagName("main")[0].style.marginLeft = "250px";
      document.getElementsByTagName("header")[0].style.marginLeft = "250px";
      document.getElementsByTagName("footer")[0].style.marginLeft = "250px";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if(window.innerWidth < 550){
      document.getElementsByTagName("main")[0].style.display = "block";
      document.getElementsByTagName("header")[0].style.display = "block";
      document.getElementsByTagName("footer")[0].style.display = "block";
    }
    else{
      document.getElementsByTagName("main")[0].style.marginLeft= "0";
      document.getElementsByTagName("header")[0].style.marginLeft = "0";
      document.getElementsByTagName("footer")[0].style.marginLeft = "0";
    }
}

window.onload = () => {
    let all = document.getElementsByClassName("zoomD"),
        lightbox = document.getElementById("lightbox");

    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
        lightbox.children[0].style.height = window.innerHeight + "px"
      };
    }}
   
    // (C) CLICK TO CLOSE LIGHTBOX
    lightbox.onclick = () => {
      lightbox.className = "";
    };
  };