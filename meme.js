let btn = document.querySelector(".btn");
let memeContainer = document.querySelector(".meme-container");

btn.addEventListener("click",()=>{
    getMeme();
})

async function getMeme(){
    memeContainer.innerHTML = "";
    let url = `https://meme-api.com/gimme`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    let meme = document.createElement("img");
    meme.src = data.url;
    meme.classList.add("meme");
    memeContainer.appendChild(meme);
}