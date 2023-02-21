import qr from "qr-image";

import getOptions from "./getOptions";

export default function qrcode(text: string) {
  const options = getOptions({});
  const data = qr.imageSync(text, { ...options, size: 20 });
  return { type: options.type, data };
}
