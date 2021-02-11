const Joi = require('@hapi/joi');

const registerValidation = (data:any) => {
    const schema=Joi.object({
        email: Joi.string().min(6).email().required(),
        password: Joi.string().min(5).required(),
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        description: Joi.string().min(5)
    });
    return schema.validate(data);
};



export default registerValidation;
