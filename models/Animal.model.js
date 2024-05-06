const mongoose = require('mongoose');

const { Schema } = mongoose;

const animalSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        specie: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
        estate: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const Animal = new mongoose.model('Animal', animalSchema);

module.exports = Animal;
