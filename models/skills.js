let skills = [
    {id: 13659, skill: 'HTML'},
    {id: 13452, skill: 'CSS'},
    {id: 1576, skill: 'Javascript'},
    {id: 1248, skill: 'Express'},
    {id: 0923, skill: 'MonboDB'},
    {id: 1005, skill: 'Python'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
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