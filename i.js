let body = document.querySelector("body"),
lightBox = document.querySelector(".lightBox"),
img = document.querySelectorAll(".gImg"),
showImg = lightBox.querySelector(".showImg img"),
close = lightBox.querySelector(".close");


for (const image of img) {
    image.addEventListener("click", () =>{
        lightBox.style.display = "block";
         showImg.src = image.src ;
         body.style.overflow = "hidden";

        close.addEventListener("click", () => {
            lightBox.style.display = "none";
            body.style.overflow = "visible";
        })
    })
}