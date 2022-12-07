
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByTagName("main")[0].style.marginLeft = "250px";
    document.getElementsByTagName("header")[0].style.marginLeft = "250px";
    document.getElementsByTagName("footer")[0].style.marginLeft = "250px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main")[0].style.marginLeft= "0";
    document.getElementsByTagName("header")[0].style.marginLeft = "0";
    document.getElementsByTagName("footer")[0].style.marginLeft = "0";

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
      };
    }}
   
    // (C) CLICK TO CLOSE LIGHTBOX
    lightbox.onclick = () => {
      lightbox.className = "";
    };
  };