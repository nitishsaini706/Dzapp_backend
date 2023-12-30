import * as Joi from "joi";

export const validateObject = (input: object) => {
    const schema = Joi.object().keys({
      currency: Joi.string().required(),
      crypto: Joi.string().required(),
      amount:Joi.string().required()
    });
  return schema.validate(input);
};
