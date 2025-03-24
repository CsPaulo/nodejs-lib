const fs = require("fs");

const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, "utf-8", (erro, texto) => {
  if (erro) {
    console.error("Erro ao ler o arquivo", erro);
    return;
  }
  contaPalavras(texto);
});

function contaPalavras(texto) {
  const listaParagrafos = extraiParagrafos(texto);
  const contagemParagrafos = listaParagrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagemParagrafos);
}

function extraiParagrafos(texto) {
  const listaParagrafos = texto.split("\n");
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.toLowerCase().split(" ");
  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
