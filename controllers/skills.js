const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update
}

function index(req,res){
    res.render('skills/index',{
       skills: Skill.getAll() 
    });
}

function show(req,res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
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