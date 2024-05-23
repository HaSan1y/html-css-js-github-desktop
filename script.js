function togglemenu() {
   document.querySelector(".menu-links").classList.toggle("open");
   document.querySelector(".hamburger-icon").classList.toggle("open");
}
//cookielaw
const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

const executeCodes = () => {
   if (document.cookie.includes("profile")) return;

   cookieBox.classList.add("show");

   buttons.forEach((button) => {
      button.addEventListener("click", () => {
         cookieBox.classList.remove("show");
         if (button.id == "acceptBtn") {
            //cookies: 1 month 60=1min 60=1hr 30=30days; samesitestrict=only within the orign-page;
            document.cookie = "cookieBy= profile; SameSite=Strict; max-age= " + 60 * 60 * 24 * 30;
         }
      });
   });
};

window.addEventListener("load", executeCodes);


function xx(){
 document.documentElement.classList.toggle('white');
 var currentTheme = document.documentElement.classList.contains('white')? 'dark' : 'white';
 theme.innerText = currentTheme; 
}
