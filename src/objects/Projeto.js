function Projeto(
    nome,       // String nome do projeto
    descricao,  // String com a descrição do projeto
    foto,       // String com a URL do CDN Filestack
    url,        // String com a URL do PNGTree
    old         // Boolean flag para mostrar como atual ou antigo
) {
    return {
        nome,
        descricao,
        foto,
        url,
        old
    };
}

export {Projeto};