import Joi from "joi";

const formSchema = Joi.object().keys({
  text: Joi.string().required(),
  type: Joi.string().valid("png", "svg").optional(),
  size: Joi.number().integer().min(5).max(50).optional(),
  margin: Joi.number().integer().min(1).max(10).optional(),
});

export default function validateForm(form: { [key: string]: any }) {
  const { error } = formSchema.validate(form);
  if (error) error.details.forEach((item) => console.error(item.message));
  return error;
}
