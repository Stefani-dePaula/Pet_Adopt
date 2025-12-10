// Passo 1: pegar todos os pets da pagina

const pets = document.querySelectorAll(".pet");

//Passo 2: Pegamos os elementos do card principal

const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricao");
const fotoGrande = document.getElementById("fotoGrande");

//for(inicialização; condição: incremento){
// codigo a ser executado}  

// Ele faz: comece no pet 0, depois vá para o pet 1, depois para o pet 2, e assim por diante, até o último pet 4, onde finaliza a quantidade dos elementos que tem na variável.

//0 é menor do que 4 =VERDADEIRO (continue o loop)
//1 é menor do que 4 =VERDADEIRO (continue o loop)
//2 é menor do que 4 =VERDADEIRO (continue o loop)
//3 é menor do que 4 =VERDADEIRO (continue o loop)
//4 é menor do que 4 =FALSO (finaliza o loop)

//pets. length : quantidade de pets
for (let i = 0; i < pets.length; i++) {   

    //pegamos o pet atual
    const pet = pets[i];

    //capturamos a imagem do pet atual
    const miniatura = pet.querySelector("img");

    //passo 4: adicionar o evento de clique na miniatura

    //pega as informações e coloca no card principal quando a miniatura for clicada
    miniatura.addEventListener("click", () => { 
        //troca o nome h1 pelo nome do pet clicado
        nome.textContent = pet.querySelector("h2").textContent; 
    descricao.textContent = pet.querySelector(".descricao").textContent;
    fotoGrande.src = miniatura.src;
    })

}
//-----esse código até aqui faz com que ao clicar na miniatura do pet, o card principal seja atualizado com as informações do pet clicado.-----//