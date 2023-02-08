import qr from "qr-image";

import OptionsType from "./types";

export default function qrcode(text: string, options: OptionsType) {
  const data = qr.imageSync(text, { ...options, size: 20 });
  return { type: options.type, data };
}
