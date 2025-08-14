const express = require('express');
const router = express.Router();
const Livro = require('../model/Livro');

//GET todos os livros
router.get('/', async (req ,res) => {
    try{
        const livros = await Livro.findAll();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar livros'});

    }
    
});

//GET livro por ID
router.get('/:id', async (req ,res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).json({ error: 'livro não encontrado.'});
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar livro'});
    }
});

//método POST
router.post('/', async (req ,res) => {
    try {
        const { nome, imagem, descricao, preco} = req.body;
        const novolivro = await Livro.create({ nome, imagem, descricao, preco});
        res.status(201).json(novolivro);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar livro'});
    }
});

//método DELETE
router.get('/:id', async (req ,res) => {
    try {
        const livro = await Livro.findByPk(req.params.id);
        if (livro) {
            await livro.destroy();
            res.json({ message: 'livro deletado com sucesso.'});
        } else{
            res.status(404).json({ error: 'livro não encontrado'});
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar livro.'});
    }
});

module.exports = router;