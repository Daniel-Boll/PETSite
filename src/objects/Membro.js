function Membro(
    nome,       // String nome
    descricao,  // String descrição (breve) do ICV
    email,      // String com o e-mail
    lattes,     // String com link do lattes
    icv         // Array com (Ano, Título ICV, Orientador, Descrição completa, Local de publicação, ICVs passados)
) {
    return {
        nome,
        descricao,
        email,
        lattes,
        icv
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
export { Membro, ICV };