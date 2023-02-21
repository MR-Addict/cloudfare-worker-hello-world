interface OptionsType {
  type: "png" | "svg";
  margin: number;
  size: number;
}

export default function getOptions(form: { [key: string]: any }) {
  const options = { type: "png", margin: 1, size: 5 };

  if (form.type) options.type = form.type;
  if (form.size) options.margin = JSON.parse(form.size);
  if (form.margin) options.margin = JSON.parse(form.margin);

  return options as OptionsType;
}
