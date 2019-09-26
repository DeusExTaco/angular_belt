let Pet = require('mongoose').model('Pet');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general


module.exports = {
    index(req, res) {
        Pet.find(req.body)
            .then(pets => res.json(pets)) // all responses just spit json
            .catch(errorHandler.bind(res)); // .bind ensures this will refer to the response object and not the errorHandler function
    },
    show(req, res) {
        Pet.findById(req.params.id)
            .sort({createAt: -1})
            .then(pet => res.json(pet))
            .catch(errorHandler.bind(res));
    },
    create(req, res) {

        Pet.find({name: req.body.name})
            .then(pet => { 
                if (pet.length < 1) {
                    Pet.create(req.body)
                    .then(pet => res.json(pet))
                    .catch(errorHandler.bind(res));
                }
                else {
                    res.json({errors: ['Name must be unique'],
                    err: true})
                }
            } )
            .catch(errorHandler.bind(res))
    },
    update(req, res) {
        let oldName; 
        console.log('HERE IN UPDATE');
        Pet.findById({_id: req.params.id})
            .then(pet => {
                oldName = pet.name;
                console.log('OLD NAME', oldName)
                console.log('IM HERE IN FIND BY');

                if (oldName == req.body.name) {

                    Pet.updateOne(
                        { _id: req.params.id },
                        {
                            name: req.body.name,
                            type: req.body.type,
                            description: req.body.description,
                            skill_1: req.body.skill_1,
                            skill_2: req.body.skill_2,
                            skill_3: req.body.skill_3
                        }, 
                        {runValidators: true}
                    )
                        .then(pet => res.json(pet))
                        .catch(errorHandler.bind(res));

                }
                else {

                    Pet.find({name: req.body.name})
                    .then(pet => { 
                        console.log(pet.length);
                        if (pet.length < 1 ) {
                            console.log('IN LESS THAN 1');

                            Pet.updateOne(
                                { _id: req.params.id },
                                {
                                    name: req.body.name,
                                    type: req.body.type,
                                    description: req.body.description,
                                    skill_1: req.body.skill_1,
                                    skill_2: req.body.skill_2,
                                    skill_3: req.body.skill_3
                                }, 
                                {runValidators: true}
                            )
                                .then(pet => res.json(pet))
                                .catch(errorHandler.bind(res));
                        }
                        else {
                            console.log('HERE IN ELSE');
                            res.json({errors: ['Name must be unique'],
                            err: true});
                            
                        }

                    } )
                    .catch(errorHandler.bind(res))

                }

            })
            .catch(errorHandler.bind(res))

    },
    destroy(req, res) {
        Pet.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(errorHandler.bind(res));
    },
};