const fs = require("fs/promises");
const { log } = require("node:console");

async function lerArquivos() {
    try {
        const conteudo = await fs.readFile('./exemplo.txt', 'utf-8')
        console.log('Conteúdo do arquivo:');
        console.log(conteudo);
    } catch (error) {
        console.log('Erro ao ler arquivo:', error.message);
        
    }
}

lerArquivos()