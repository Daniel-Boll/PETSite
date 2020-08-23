function Membro(
    nome,       // String nome
    descricao,  // String descrição (breve) do ICV
    email,      // String com o e-mail
    lattes,     // String com link do lattes
    foto,       // String com a URL do CDN Filestack
    icv,        // Array com (Ano, Título ICV, Orientador, Descrição completa, Local de publicação, ICVs passados)
    faq,        // Array com (Muita coisa ...)
    polygon,    // Array com as informações do polygon
    old         // Boolean flag para indicar se é egresso
) {
    return {
        nome,
        descricao,
        email,
        lattes,
        foto,
        icv,
        faq,
        polygon,
        old
    };
}

function ICV(
    year,
    title,
    advisor,
    description,
    // pastICV
){
    return {
        year,
        title,
        advisor,
        description,
        // pastICV: 
        //     ICV(
        //         pastICV.year, 
        //         pastICV.title,
        //         pastICV.advisor,
        //         pastICV.description,
        //         pastICV.pastICV
        //     ) || []
    }
}

function FAQ(
    city,
    ycs,
    ifncs,
    aa,
    hp,
    bk,
    mv,
    gm,
    mc,
    fd
){
    return {
        city,
        ycs,
        ifncs,
        aa,
        hp,
        bk,
        mv,
        gm,
        mc,
        fd,
    }
}

function POLYGON (
    option_1,
    value_1,
    option_2,
    value_2,
    option_3,
    value_3,
    option_4,
    value_4,
    option_5,
    value_5
){
    return {
        option_1,
        value_1,
        option_2,
        value_2,
        option_3,
        value_3,
        option_4,
        value_4,
        option_5,
        value_5
    }
}
export { Membro, ICV, FAQ, POLYGON };