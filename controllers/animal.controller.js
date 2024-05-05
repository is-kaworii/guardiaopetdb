const AnimalModel = require('../models/Animal.model')

const animalController = {
    create: async (req, res) => {
        try {
            const animal = {
                image: req.body.image,
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                specie: req.body.specie,
                size: req.body.size,
                description: req.body.description,
                tags: req.body.tags,
                estate: req.body.estate,
                city: req.body.city,
                email: req.body.email,
                telefone: req.body.telefone
            }

            const response = await AnimalModel.create(animal)

            res.status(201).json({ response, msg: "Animal criado com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const animals = await AnimalModel.find()

            res.json(animals)

        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id
            const animal = await AnimalModel.findById(id)

            if (!animal) {
                res.status(404).json({ msg: "Animal não encontrado." })
                return
            }

            res.json(animal)

        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const Animal = await AnimalModel.findById(id)

            if (!Animal) {
                res.status(404).json({ msg: "Animal não encontrado." })
            }

            const deletedAnimal = await AnimalModel.findByIdAndDelete(id)

            res.status(200).json({ deletedAnimal, msg: "Animal excluído com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        const id = req.params.id

        const animal = {
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            specie: req.body.specie,
            size: req.body.size,
            description: req.body.description,
            tags: req.body.tags,
            estate: req.body.estate,
            city: req.body.city,
            email: req.body.email,
            telefone: req.body.telefone
        }

        const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, animal)

        if (!updatedAnimal) {
            res.status(404).json({ msg: "Animal não encontrado" })
            return
        }

        res.status(200).json({ animal, msg: "Animal atualizado com sucesso!" })
    }
}

module.exports = animalController;