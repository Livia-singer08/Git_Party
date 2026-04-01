const prisma = require("../data/prisma");

const limiteInscricoes = async (eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where:{ id : eventoId },
        include: {
            inscricoes: true
        }
    });
    const numeroInscricoes = evento.inscricoes.filter(inscricao => inscricao.status == "CONFIRMADA").length;

    if(numeroInscricoes == evento.capacidade_maxima) {
        return "LISTA_ESPERA";
    } else {
        return "";
    }
};

const inscricaoDuplicada = async (usuarioId, eventoId) => {
    const evento = await prisma.eventos.findUnique({
        where: { id : eventoId },
        include: {
            inscricoes: true
        }
    });

    const inscrito = evento.inscricoes.filter(inscricao => inscricao.usuariosId == usuarioId).length;

    if(inscrito == 1) {
        throw new Error("Usuario ja inscrito no evento!");
    }
}



module.exports = {
    limiteInscricoes,
    inscricaoDuplicada
}