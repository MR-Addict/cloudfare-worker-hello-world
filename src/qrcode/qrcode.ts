import qr from "qr-image";

import OptionsType from "./types";

export default function qrcode(text: string, options: OptionsType) {
  const data = qr.imageSync(text, { ...options, size: 20 });

  if (options.type === "png") return { type: options.type, data: `data:image/png;base64,${data.toString("base64")}` };
  return { type: options.type, data };
}
