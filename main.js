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
        const arrayRandom = [];

        while(arrayRandom.length<16){
              let randomNumber = Math.floor(Math.random()* settings.value +1);
              if (!arrayRandom.includes(randomNumber)){
                  arrayRandom.push(randomNumber);
              }
          }
          console.log(arrayRandom);


        const activeElements = document.querySelectorAll(".item");
        
        for (let i = 1; i < activeElements.length; i++) {
            activeElements[i].addEventListener("click", function() {
                if(arrayRandom.includes(parseInt(this.textContent))){
                    this.classList.toggle("bomb");
                setTimeout(() => { alert('you lost!');contenitore.innerHTML = ""; }, 500);
                } else {
                    this.classList.toggle("active");
                }
            });
        }
}






