'use strict'
var Project = require('../models/project');

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion'
        });
    },

    //saveNewProject
    saveProject: function (req, res) {
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: "Error al guardar" });
            if (!projectStored) return res.status(404).send({ message: "No se ha podido guardar" });
            return res.status(200).send({ project: projectStored });
        });
    },
    // getProjectByID
    getProject: function (req, res) {
        var projectId = req.params.id;
        if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe' });

        Project.findById(projectId, (err, project) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
            if (!project) return res.status(404).send({ message: 'El proyecto no existe' });
            return res.status(200).send({
                project
            });
        });
    },

    // GetAllProjectsListed
    getProjects: function (req, res) {

        Project.find({}).sort('-year').exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
            if (!projects) return res.status(404).send({ message: 'No hay proyectos para mostrar' });
            return res.status(200).send({ projects });
        });

    },

    // Update project by ID
    updateProject: function (req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar' });
            if (!projectUpdated) return res.status(404).send({ message: 'El proyecto no existe' });

            return res.status(200).send({
                project: projectUpdated
            })
        })
    },



};

module.exports = controller; 