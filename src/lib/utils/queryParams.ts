export default function queryParams(url: string, name: string) {
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
