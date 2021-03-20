let skills = [
    {id: 13659, skill: 'HTML', description:'hello '},
    {id: 13452, skill: 'CSS', description: 'html'},
    {id: 1576, skill: 'Javascript', description: 'css'},
    {id: 1248, skill: 'Express', description: 'express'},
    {id: 0923, skill: 'MonboDB', description: 'test'},
    {id: 1005, skill: 'Python', description: '123'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
    description
};

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill){
    skill.id = Date.now() & 1000000;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, skill){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skill.id = id;
    skills.splice(idx, 1,skill);
}

function description(skill){
    console.log(skills.description);
}