const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section")
const navbarLinks = document.querySelectorAll(".navbar-link");




const progress = document.querySelector(".progress-bars-wrapper");

const progressBarPercent = [97,89,85,87,80,90]




window.addEventListener('scroll', () =>{

    mainFn();
  

    
})


const mainFn = () =>{

    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky");
     }else{
         navbar.classList.remove("sticky");
     }
 
 
 
     sections.forEach((section ,i) =>{
 
         if(window.pageYOffset >= section.offsetTop - 10){
             navbarLinks.forEach(navbarLink =>{
                 navbarLink.classList.remove("change")
             })
             navbarLinks[i].classList.add("change")
         }
 
     })
 
     
 
     if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
         document.querySelectorAll(".progress-percent").forEach((element, p) =>{
             element.style.width = `${progressBarPercent[p]}%`;
             element.previousElementSibling.firstElementChild.textContent = progressBarPercent[p];
         }) 
     }

}

mainFn();


window.addEventListener("resize", () =>{
    window.location.reload();
})