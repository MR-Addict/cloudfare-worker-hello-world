import { getOptions, qrcode } from "./qrcode";

export default {
  async fetch(req: Request): Promise<Response> {
    const headers = { "Access-Control-Allow-Origin": "*" };

    if (req.method === "GET") return new Response("Hello wolrd!", { headers });

    const text = await req.text();

    const options = getOptions({});
    const result = qrcode(text, options);

    return new Response(JSON.stringify(result), {
      headers: { ...headers, "Content-Type": "application/json" },
    });
  },
};
