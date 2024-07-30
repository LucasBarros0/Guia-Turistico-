const Destination = require('../models/Destination');

exports.getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.getAll();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.getById(req.params.id);
        if (!destination) {
            res.status(404).json({ message: 'Destino não encontrado' });
        } else {
            res.json(destination);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
