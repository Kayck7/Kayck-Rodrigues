document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.save-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.assistido-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});

  document.addEventListener('DOMContentLoaded', () => {
const catalogs = document.querySelectorAll('.catalog-container');

catalogs.forEach(container => {
    const track = container.querySelector('.catalog-track');
    const prevButton = container.querySelector('.prev-btn');
    const nextButton = container.querySelector('.next-btn');
    
    let position = 0;

    nextButton.addEventListener('click', () => {
        if (position > -(track.scrollWidth - track.clientWidth)) {
            position -= 200;
            track.style.transform = `translateX(${position}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (position < 0) {
            position += 200;
            track.style.transform = `translateX(${position}px)`;
        }
    });
});
});
    //função para abrir o menu ajustando a largura
    function openMenu() {
        document.getElementById("menu").style.width = "250px"; //define a largura do menu
    }
    //função para fechar o menu reduzindo sua largura a 0
    function closeMenu() {
        document.getElementById("menu").style.width = "0"; //define a largura do menu a 0 para ocultar
    }
    
    //função para abrir modal
    function openModal() {
        document.getElementById('modal').style.display = 'block';
    }

    //função para fechar o modal
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    // Adiciona o evento de clique ao link "Comentário"
    document.getElementById('openModal').addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        openModal(); 
    });

    

    
    //fechar o modal quando clicar fora da area do modal
    window.onclick =  function(event) {
        if (event.target === document.getElementById('modal')) {
            closeModal();
        }
    }