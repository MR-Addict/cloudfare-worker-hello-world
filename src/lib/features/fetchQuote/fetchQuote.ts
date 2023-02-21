export default async function quote(date?: string) {
  try {
    const url = "http://open.iciba.com/dsapi/" + (date ? `?${new URLSearchParams({ date })}` : "");
    const res = await fetch(url);
    if (!res.ok) return { status: false };

    const result: any = await res.json();
    return {
      status: true,
      data: {
        date: result.dateline,
        en: result.content,
        zh: result.note,
        img: result.picture2,
        preview: result.picture,
      },
    };
  } catch (error) {
    return { status: false };
  }
}
