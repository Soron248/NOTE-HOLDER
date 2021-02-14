const txt = document.getElementById("txt");
const btn = document.getElementById("add");
const mainCard = document.getElementById("card");
const mbdy = document.getElementById("mbdy");
const popCard = document.getElementById("card2");

btn.addEventListener('click',function(){
    if(txt.value == ''){
        alert('Please write your note to add here...');
    }else{
        let card = document.createElement("div");
        card.classList.add("newCard");

        let txt2 = document.createElement("p");
        txt2.classList.add("p");

         let btn2 = document.createElement("button");
         btn2.textContent = "View-Details";
         btn2.classList.add("btn2");

        txt2.innerHTML = txt.value;
        txt.value = '';
        card.appendChild(txt2);
        card.appendChild(btn2);
        mainCard.appendChild(card);

        btn2.addEventListener('click', pop = () => {
            mbdy.classList.add("blr");

            let card2 = document.createElement("div");
            card2.classList.add("popCard");

            txt2.classList.add("p2");
            card2.appendChild(txt2);

            let btn3 = document.createElement("button");
            btn3.classList.add("btn22");
            btn3.textContent = "Hide-Details";

            card2.appendChild(btn3);
            popCard.appendChild(card2);

            btn3.onclick = function(){
                txt2.classList.remove("p2");
                txt2.classList.add("p");
                card2.removeChild(txt2);
                card.appendChild(txt2);
                popCard.removeChild(card2);
                mbdy.classList.remove("blr");
            }

        })



    }
})