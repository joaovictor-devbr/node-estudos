const fs = require("fs/promises")

async function criarArquivo() {
    try{
    const dataHora = new Date().toLocaleString();

    const conteudo = `Log criado em: ${dataHora}`;

    await fs.writeFile('./exemplo.txt', conteudo, 'utf-8');
    console.log('Arquivo criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar arquivo:', error.message);
  }
}
