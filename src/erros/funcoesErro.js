export default function trataErros(erro) {
  if (erro.code === "ENOENT") {
    throw new Error("Arquivo não encontrado");
  } else {
    return "Outro tipo de erro";
  }
}
