import { fundoEscuro ,fundoClaro, textoFundoClaro, textoFundoEscuro, conteudoClaro, conteudoEscuro } from './Variaveis'


export const TemaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  texto: textoFundoClaro,
}

export const TemaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  texto: textoFundoEscuro,
  filter: "invert(100%)",
};
