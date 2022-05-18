const router = require('express').Router();
const TimeRegister = require('../models/TimeRegister');

router.get('/list', async (req, res) => {
    try {
        const timeRegisters = await TimeRegister.find();

        res.status(200).json(timeRegisters);
    }catch (error) {
        res.status(500).json({
            message: 'An error occurs',
            error: error
        });
    }
});
  
router.get('/get/:id', async (req, res) => {
    try {
        const timeRegister = await TimeRegister.findOne({_id: req.params.id});
        
        res.status(200).json(timeRegister);
    }catch (error) {
        res.status(500).json({
            message: 'An error occurs',
            error: error
        });
    }
})

router.post('/create', async (req, res) => {
    const {
        description,
        startTime,
        endTime,
        duration
    } = req.body;

    const timeRegister = {
        description,
        startTime,
        endTime,
        duration
    };

    try {
        await TimeRegister.create(timeRegister);

        res.status(200).json({message: 'created'});
    }catch (error) {
        res.status(500).json({
            message: 'An error occurs',
            error: error
        });
    }
});

router.put('/update/:id', async (req, res) => {
    const {
        description,
        startTime,
        endTime,
        duration
    } = req.body;

    const timeRegister = {
        description,
        startTime,
        endTime,
        duration
    };

    try {
        const timeRegisters = await TimeRegister.updateOne({ _id: req.params.id}, timeRegister);

        res.status(200).json({ message: 'updated' });
    }catch (error) {
        res.status(500).json({
            message: 'An error occurs',
            error: error
        });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
       await TimeRegister.deleteOne({ _id: req.params.id});

        res.status(200).json({ message: 'deleted' });
    }catch (error) {
        res.status(500).json({
            message: 'An error occurs',
            error: error
        });
    }
});

module.exports = router;