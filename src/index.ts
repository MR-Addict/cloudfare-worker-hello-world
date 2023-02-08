import { getOptions, qrcode } from "./qrcode";

function getParameterByName(url: string, name: string) {
  name = name.replace(/[\[\]]/g, "\\$&");
  name = name.replace(/\//g, "");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if (!results) return null;
  else if (!results[2]) return "";
  else if (results[2]) {
    results[2] = results[2].replace(/\//g, "");
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  async fetch(req: Request): Promise<Response> {
    const text = getParameterByName(req.url, "qrcode");

    if (text) {
      const options = getOptions({});
      const result = qrcode(text, options);

      return new Response(result.data, { headers: { "Content-Type": "image/png" } });
    }
    return new Response("Hello wolrd!");
  },
};
