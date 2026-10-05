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
    imagem: 'https://m.media-amazon.com/images/I/71mFnG3Bn3L._SY342_.jpg'
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
  },
  {
    titulo: 'A Loja de Cartas de Seul',
    autor: 'Baek Seung-yeon',
    ano: 2025,
    imagem: 'https://m.media-amazon.com/images/I/81G2S0HarjL._UF1000,1000_QL80_.jpg'
  }
];

const livroGrid = document.getElementById('livroGrid');
const botaoLivro = document.getElementById('sortearLivro');
const resultadoTexto = document.getElementById('resultadoTexto');
const livroResenha = document.getElementById('livroResenha');
const textoResenha = document.getElementById('textoResenha');
const notaResenha = document.getElementById('notaResenha');
const formResenha = document.getElementById('formResenha');
const resenhaResultado = document.getElementById('resenhaResultado');
const starButtons = document.querySelectorAll('.star-button');
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
        ${livro.ano ? `<span>${livro.ano}</span>` : ''}
      </div>
    </article>
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

function preencherSelectResenha() {
  if (!livroResenha) return;

  livroResenha.innerHTML = `
    <option value="">Selecione um livro</option>
    ${livros.map((livro) => `
      <option value="${livro.titulo}">${livro.titulo}</option>
    `).join('')}
  `;
}

function atualizarEstrelas(valor) {
  starButtons.forEach((botao) => {
    const ativa = Number(botao.dataset.value) <= valor;
    botao.classList.toggle('active', ativa);
    botao.setAttribute('aria-pressed', String(ativa));
  });

  if (notaResenha) {
    notaResenha.value = String(valor);
  }
}

function resetarEstrelas() {
  atualizarEstrelas(0);
}

function salvarResenha(event) {
  event.preventDefault();

  if (!livroResenha || !textoResenha || !resenhaResultado || !notaResenha) return;

  const livroSelecionado = livros.find((livro) => livro.titulo === livroResenha.value);
  const textoDigitado = textoResenha.value.trim();
  const nota = Number(notaResenha.value);

  if (!livroSelecionado || !textoDigitado || nota === 0) {
    resenhaResultado.innerHTML = `
      <h4>Preencha todos os campos</h4>
      <p>Selecione um livro, dê uma nota e escreva sua resenha antes de salvar.</p>
    `;
    return;
  }

  const estrelas = '★'.repeat(nota) + '☆'.repeat(5 - nota);

  resenhaResultado.innerHTML = `
    <h4>${livroSelecionado.titulo}</h4>
    <p><strong>Autor:</strong> ${livroSelecionado.autor} • ${livroSelecionado.ano}</p>
    <p><strong>Avaliação:</strong> ${estrelas} (${nota}/5)</p>
    <p>${textoDigitado}</p>
  `;

  formResenha.reset();
  resetarEstrelas();
}

if (tabButtons.length) {
  tabButtons.forEach((botao) => {
    botao.addEventListener('click', () => alternarAbas(botao.dataset.tab));
  });
}

if (starButtons.length) {
  starButtons.forEach((botao) => {
    botao.addEventListener('click', () => {
      atualizarEstrelas(Number(botao.dataset.value));
    });
  });
}

if (botaoLivro && resultadoTexto) {
  botaoLivro.addEventListener('click', sortearLivro);
}

if (formResenha) {
  formResenha.addEventListener('submit', salvarResenha);
}

preencherSelectResenha();
renderLivros();
