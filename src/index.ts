import { queryParams, formatDate } from "./lib/utils";
import { fetchQuote, generateQrcode } from "./lib/api";

export default {
  async fetch(req: Request): Promise<Response> {
    const text = queryParams(req.url, "qrcode");
    const date = queryParams(req.url, "quote");

    if (text) {
      const result = generateQrcode(text);
      return new Response(result.data, { headers: { "Content-Type": "image/png" } });
    } else if (date !== null) {
      if (isNaN(Date.parse(date)) || new Date(date) > new Date()) {
        return new Response(JSON.stringify({ status: false, message: "Invalid quote date!" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const result = await fetchQuote(formatDate(date).split(" ")[0]);
      return new Response(JSON.stringify(result), {
        status: result.status ? 200 : 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response("Hello wolrd!");
  },
};
