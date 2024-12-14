function togglePassword() /**um código que pode ser executado sempre que chamado**/
{
    var senhaInput = document.getElementById("senha");/**declarando uma variável, nesse caso ela é senhaInput. As variáveis são usadas para armazenar valores ou refencia a objetos*/
    var showPasswordText = document.querySelector(".show-password");/**p Document representa o documento HTML com o id espeficicado, nesse caso 'senha' */
    
    if /**verifica se a condição entre parêntese é verdadeira */(senhaInput.type === "password")/** o type verifica o valor atribuido ao elemento entre parêntese*/  {
        senhaInput.type = "text";/** se o if for verdadeiro, essa linha muda o atributo 'type' para text, tornando a senha visível */
        showPasswordText.textContent = "Esconder Senha";
    } else /**verifica se a condição for falsa, o codigo dentro do else será executada*/ {
        senhaInput.type = "password";
        showPasswordText.textContent = "Mostrar senha";
    }
}