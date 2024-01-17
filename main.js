let settings = document.getElementById("difficulty");
let contenitore = document.getElementById("board");
function play(){
    contenitore.innerHTML = "";
    
        for (let i = 1; i<= settings.value; i++){
            let boxItem = document.createElement("div");
            contenitore.append(boxItem)
            boxItem.classList.add("item");
            boxItem.textContent = i;
            boxItem.style.setProperty(
                "flex-basis", `calc(100% / ${Math.sqrt(settings.value)})`
            )
        }
   
        const activeElements = document.querySelectorAll(".item");
        
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].addEventListener("click", function() {
                this.classList.toggle("active");
                console.log(i +1)
            });
        }
}






