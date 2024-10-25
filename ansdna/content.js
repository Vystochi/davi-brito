const cageImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wEpTQKBD3AqhcYtnvLotHHhZhIa52jb4YQLmlbJxfGvisXqk-15671LCRgJ80TFQ3LE&usqp=CAU',
    'https://static1.purepeople.com.br/articles/0/39/51/60/@/4511977-novo-visual-de-davi-brito-dividiu-opini-580x0-1.jpg',
    'https://aloalobahia.com/wp-content/uploads/2024/07/dbvid_alo_alo_bahia-1047x1400.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRKyfexdGkFvRR5FHdNSjf90VDKj-mLc3ZQlHSwy-_F-B33iP7YIgz1uUxwwk5m8vgQ4g&usqp=CAU',
];

function replaceImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (Math.random() < 0.01) { // 50% de chance de substituir
            const randomIndex = Math.floor(Math.random() * cageImages.length);
            img.src = cageImages[randomIndex];
        }
    });
}

// Inicializa a substituição nas imagens já carregadas
replaceImages();

// Configura o MutationObserver para observar adições de imagens
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.tagName === 'IMG') {
                    replaceImages(); // Substitui a nova imagem
                } else if (node.querySelectorAll) {
                    node.querySelectorAll('img').forEach(img => {
                        if (Math.random() < 0.02) {
                            const randomIndex = Math.floor(Math.random() * cageImages.length);
                            img.src = cageImages[randomIndex];
                        }
                    });
                }
            }
        });
    });
});

// Configura o observer para observar o corpo da página e nós filhos
observer.observe(document.body, { childList: true, subtree: true });
