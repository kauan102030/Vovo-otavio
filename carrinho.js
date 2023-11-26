lista_carrinho = []

function acao_botao(produto){
  
  lista_carrinho.push(produto);
  localStorage.setItem("carrinho", lista_carrinho);
  alert(produto + " adicionado ao carrinho!");
  console.log(lista_carrinho);
}


function block(){
    alert('Acesso Restrito')
    var login= prompt("digite o login para ter acesso");
    var senha = prompt("digite a senha para ter acesso");
    while( senha != "102030" && login != "kauan"){
      alert("Acesso negado, Tente novamente");
      login = prompt("digite o login para ter acesso");
      senha = prompt("digite a senha para ter acesso");

    }if (login == "kauan" & senha == "102030"){
      alert("Acesso Concedido");
    }else{
    }
    

}

//teste
function mytext(){
let text = document.getElementById("myButton").innerHTML;
document.getElementById("myButton").innerHTML = 
text.replace("adicionar ao carrinho", "adicionado ao carrinho!");
myButton.style.color = "green";


}
