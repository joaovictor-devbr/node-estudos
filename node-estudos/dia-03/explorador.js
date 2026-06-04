const fs = require("fs/promises");
const path = require("path");

async function explorarPastas() {
    try {
        const arquivos = await fs.readdir('./', { withFileTypes: true});
        console.log('Arquivos encontrados:\n');
        arquivos.forEach((arquivo) => {
            const extensao = path.extname(arquivo) || 'Sem extensão';
            console.log(`- ${arquivo.name} (${extensao})`);
        })
        
    } catch (error) {
        console.error('Erro ao explorar pastas:', error.message);
    }
}

explorarPastas()