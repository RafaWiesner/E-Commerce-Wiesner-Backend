import { Product } from '../models/index.js';
import '../config/database.js';

const products = [
  {
    name: "Elegance Vintage",
    description: "O design minimalista faz dele a escolha ideal para quem aprecia um estilo clássico e refinado.",
    price: 199.90,
    image: "/src/assets/relogio1.jpeg"
  },
  {
    name: "Tech Chrono X",
    description: "O design combina sofisticação e praticidade, ideal para quem busca estilo clássico e funcionalidade no dia a dia.",
    price: 299.90,
    image: "/src/assets/relogio2.jpg"
  },
  {
    name: "Urban Tech Pro",
    description: "Um ícone de elegância com design sofisticado. É a escolha perfeita para quem busca estilo e funcionalidade em um acessório.",
    price: 399.90,
    image: "/src/assets/relogio3.webp"
  }
];

async function populateProducts() {
  try {
    console.log('Iniciando população de produtos...');
    
    // Limpa produtos existentes
    await Product.destroy({ where: {} });
    console.log('Produtos existentes removidos.');

    // Insere novos produtos
    for (const product of products) {
      await Product.create(product);
      console.log(`Produto "${product.name}" criado com sucesso!`);
    }

    console.log('Todos os produtos foram inseridos com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao popular produtos:', error);
    process.exit(1);
  }
}

populateProducts(); 