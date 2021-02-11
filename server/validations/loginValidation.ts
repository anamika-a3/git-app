const Joi = require('@hapi/joi');  

const loginValidation= (data:any) =>{
    const schema=Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(5).required()
    });
    return schema.validate(data);
};

export default loginValidation;