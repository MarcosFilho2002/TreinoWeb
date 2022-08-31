const cores = ["green","red","rgba(133,122,200)",
"#f15025"];

const btn = document.getElementById("btn");
const cor = document.querySelector(".cor");

function mudaCor(){
    //console.log(document.body); - Teste para ver se ta funcionando
    //Pegar um numero randomico do vetor cores
    const randomNum = getRandomNum();
    console.log(randomNum);
    document.body.style.backgroundColor = cores[randomNum];
    cor.textContent = cores[randomNum];
    
}
btn.addEventListener("click",mudaCor);

function getRandomNum(){
    return Math.floor(Math.random()*cores.length);
}