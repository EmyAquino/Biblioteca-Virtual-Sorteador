const livros = [
  {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'A Metamorfose',
    autor: 'Franz Kafka',
    ano: 1915,
    imagem: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 1943,
    imagem: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    ano: 1949,
    imagem: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Orgulho e Preconceito',
    autor: 'Jane Austen',
    ano: 1813,
    imagem: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    ano: 1988,
    imagem: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'A Hora da Estrela',
    autor: 'Clarice Lispector',
    ano: 1977,
    imagem: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Cem Anos de Solidão',
    autor: 'Gabriel García Márquez',
    ano: 1967,
    imagem: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    ano: 1851,
    imagem: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'A Divina Comédia',
    autor: 'Dante Alighieri',
    ano: 1320,
    imagem: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    ano: 1997,
    imagem: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'O Código Da Vinci',
    autor: 'Dan Brown',
    ano: 2003,
    imagem: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    ano: 1945,
    imagem: 'https://images.unsplash.com/photo-1519482816300-2d42a3ff746b?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Os Miseráveis',
    autor: 'Victor Hugo',
    ano: 1862,
    imagem: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'A Ilíada',
    autor: 'Homero',
    ano: -800,
    imagem: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Fausto',
    autor: 'Johann Wolfgang von Goethe',
    ano: 1808,
    imagem: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80'
  }
];

const autores = [
  'Machado de Assis',
  'Clarice Lispector',
  'Jorge Amado',
  'Virginia Woolf',
  'Gabriel García Márquez',
  'Emily Dickinson',
  'Ruthie',
  'Frida Kahlo'
];

const livroGrid = document.getElementById('livroGrid');
const listaAutores = document.getElementById('listaAutores');
const botaoLivro = document.getElementById('sortearLivro');
const botaoAutor = document.getElementById('sortearAutor');
const resultadoTexto = document.getElementById('resultadoTexto');
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function escolherAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function renderLivros() {
  if (!livroGrid) return;

  livroGrid.innerHTML = livros.map((livro) => `
    <article class="livro-card">
      <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" />
      <div class="livro-info">
        <h4>${livro.titulo}</h4>
        <p>${livro.autor}</p>
        <span>${livro.ano}</span>
      </div>
    </article>
  `).join('');
}

function renderAutores() {
  if (!listaAutores) return;

  listaAutores.innerHTML = autores.map((autor) => `
    <div class="autor-card">
      <strong>${autor}</strong>
    </div>
  `).join('');
}

function alternarAbas(tabSelecionada) {
  tabButtons.forEach((botao) => {
    const ativa = botao.dataset.tab === tabSelecionada;
    botao.classList.toggle('active', ativa);
  });

  tabPanels.forEach((painel) => {
    const ativa = painel.id === `tab-${tabSelecionada}`;
    painel.classList.toggle('active', ativa);
  });
}

function sortearLivro() {
  const livro = escolherAleatorio(livros);
  resultadoTexto.textContent = `${livro.titulo} — ${livro.autor} • ${livro.ano}`;
}

function sortearAutor() {
  const autor = escolherAleatorio(autores);
  resultadoTexto.textContent = `Autor sorteado: ${autor}`;
}

if (tabButtons.length) {
  tabButtons.forEach((botao) => {
    botao.addEventListener('click', () => alternarAbas(botao.dataset.tab));
  });
}

if (botaoLivro && botaoAutor && resultadoTexto) {
  botaoLivro.addEventListener('click', sortearLivro);
  botaoAutor.addEventListener('click', sortearAutor);
}

renderLivros();
renderAutores();
