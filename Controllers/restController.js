const Resume = require('../models/firstmodal');

// 1. Get Resume Data (Fetch from MongoDB)
exports.getResume = async (req, res) => {
    try {
        const resumeData = await Resume.findOne(); // Okka document unte saripothundi general ga
        if (!resumeData) {
            return res.status(404).json({ message: "Resume data not found" });
        }
        res.status(200).json(resumeData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
};

// 2. Add/Update Resume Data (For Thunder Client POST request)
exports.addResume = async (req, res) => {
    try {
        // Oka vela data already unte update chestundi, lekapothe create chestundi
        const updatedResume = await Resume.findOneAndUpdate(
            {}, 
            req.body, 
            { upsert: true, new: true, runValidators: true }
        );
        res.status(201).json({
            message: "Resume data saved successfully!",
            data: updatedResume
        });
    } catch (error) {
        res.status(400).json({ message: "Error saving data", error: error.message });
    }
};