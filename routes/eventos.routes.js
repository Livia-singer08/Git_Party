const express = require("express");

const router = express.Router();

const {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir,
    encerrarEvento
} = require("../controllers/eventos.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar", listar);
router.get("/buscar/:id", buscar);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir);
router.put("/encerrar/:id", encerrarEvento);

module.exports = router;