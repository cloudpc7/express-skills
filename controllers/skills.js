const Skill = require('../models/skills');

module.exports = {
    index,
    new: newSkill,
    create,
    delete: deleteSkill,
    update,
    description
}

function index(req,res){
    res.render('skills/index',{
       skills: Skill.getAll() 
    });
}

function newSkill(req,res){
    res.render('skills/new');
}

function create(req,res){
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req,res){
    Skill.deleteOne(req.params.id);
}

function update(req,res){
    req.body.done = !!req.body.done;
    Skill.update(req.params.id,req,body);
    res.redirect(`/skills/${req.params.id}`);
}

function description(req,res){
    res.render('/skills/description');
}