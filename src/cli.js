import fs from "fs";
import trataErros from "./erros/funcoesErro.js";
import { contaPalavras } from "./index.js";
const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, "utf-8", (erro, texto) => {
  try {
    if (erro) throw erro;
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro);
  }
});
