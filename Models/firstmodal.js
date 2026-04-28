const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    personalInfo: {
        name: String,
        email: String,
        mobile: String,
        socials: { github: String, linkedin: String, portfolio: String }
    },
    skills: {
        languages: [String],
        webTech: [String],
        backend: [String],
        tools: [String],
        coreConcepts: [String],
        softSkills: [String]
    },
    education: [{
        institute: String,
        degree: String,
        score: String,
        duration: String
    }],
    projects: [{
        title: String,
        tech: [String],
        description: String
    }],
    experience: [{
        title: String,
        company: String,
        duration: String,
        description: String
    }],
    certifications: [{
        title: String,
        provider: String,
        link: String
    }],
    codingProfiles: {
        codechef: { username: String, link: String },
        leetcode: { username: String, link: String },
        gfg: { username: String, link: String }
    }
});

module.exports = mongoose.model('Resume', resumeSchema);