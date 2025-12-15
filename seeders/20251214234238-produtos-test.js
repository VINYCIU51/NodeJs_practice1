'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const produtos = [
      {
        nome: "Bolo de Chocolate",
        preco: 25.00,
        ingredientes: ["farinha", "açúcar", "chocolate", "ovos", "manteiga"],
        imagem: ""
      },
      {
        nome: "Bolo de Cenoura com Cobertura de Chocolate",
        preco: 22.00,
        ingredientes: ["cenoura", "farinha", "açúcar", "ovos", "chocolate"],
        imagem: ""
      },
      {
        nome: "Bolo de Fubá",
        preco: 18.00,
        ingredientes: ["fubá", "açúcar", "ovos", "leite", "fermento"],
        imagem: ""
      },
      {
        nome: "Brigadeiro",
        preco: 3.00,
        ingredientes: ["leite condensado", "chocolate em pó", "manteiga"],
        imagem: ""
      },
      {
        nome: "Beijinho",
        preco: 3.00,
        ingredientes: ["leite condensado", "coco ralado", "manteiga"],
        imagem: ""
      },
      {
        nome: "Cajuzinho",
        preco: 3.50,
        ingredientes: ["amendoim", "leite condensado", "chocolate granulado"],
        imagem: ""
      },
      {
        nome: "Mousse de Maracujá",
        preco: 12.00,
        ingredientes: ["maracujá", "leite condensado", "creme de leite", "gelatina"],
        imagem: ""
      },
      {
        nome: "Mousse de Chocolate",
        preco: 12.00,
        ingredientes: ["chocolate", "creme de leite", "ovos", "açúcar"],
        imagem: ""
      },
      {
        nome: "Torta de Limão",
        preco: 20.00,
        ingredientes: ["limão", "leite condensado", "massa de biscoito", "creme de leite"],
        imagem: ""
      },
      {
        nome: "Pudim de Leite",
        preco: 18.00,
        ingredientes: ["leite condensado", "leite", "ovos", "açúcar"],
        imagem: ""
      },
      {
        nome: "Cheesecake de Morango",
        preco: 28.00,
        ingredientes: ["cream cheese", "biscoito", "açúcar", "manteiga", "morango"],
        imagem: ""
      },
      {
        nome: "Bombom de Chocolate",
        preco: 4.00,
        ingredientes: ["chocolate", "creme de avelã"],
        imagem: ""
      },
      {
        nome: "Churros com Doce de Leite",
        preco: 6.50,
        ingredientes: ["farinha", "açúcar", "canela", "doce de leite"],
        imagem: ""
      },
      {
        nome: "Brownie",
        preco: 7.50,
        ingredientes: ["chocolate", "manteiga", "açúcar", "farinha", "ovos"],
        imagem: ""
      },
      {
        nome: "Cupcake de Baunilha",
        preco: 5.00,
        ingredientes: ["farinha", "açúcar", "ovos", "manteiga", "baunilha"],
        imagem: ""
      }
    ];

    // Transformando ingredientes em string JSON para SQLite
    const produtosParaSQLite = produtos.map(p => ({
      ...p,
      ingredientes: JSON.stringify(p.ingredientes),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Produtos', produtosParaSQLite, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
