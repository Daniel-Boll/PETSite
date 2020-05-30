function Projeto(
    nome,       // String nome do projeto
    descricao,  // String com a descrição do projeto
    foto       // String com a URL do CDN Filestack
) {
    return {
        nome,
        descricao,
        foto
    };
}

export {Projeto};