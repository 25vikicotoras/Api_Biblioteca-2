const express = require("express");
const router = express.Router();

const Libro = require("../models/libro");

//Ruta para obtener todos los libros
router.get("/", async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    }   catch (error) {
        res.status(500).json({error: "Error al obtener los libros" });
    }
});

// Ruta para crear un nuevo libro
router.post("/", async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    }   catch (error) {
        res.status(500).json({error: "Error al crear el libros" });
    }
});

// Ruta para actualizar un Libro existente 
router.post("/:id", async (req, res) => {
    try {
        const Libro = await Libro.findByIdAndUdate(req.params.id, req.body,
{
          new: true,
        });
        res.json(Libro);
    }   catch (error) {
        res.status(500).json({error: "Error al actualizar el libros" });
    }
});

//Ruta para eliminar un Libro
router.delete('/:id', async (req, res) => {
    try {
        await Libro.findByIdAndDelete(req.params.id);
        res.json({message: 'Libro eliminado correctamente' });
    }   catch (error) {
        res.status(500).json({error: 'Error al eliminar el Libro '});
    }
});
module.exports = router;
