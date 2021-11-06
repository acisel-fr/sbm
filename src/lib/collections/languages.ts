import iso from "$lib/c11n/data/dictionnaries/iso-639-1.yaml";

export function languages(locales: string[]) {
  const result = locales.map((lang) => {
    const idx = iso.findIndex((item) => item.code === lang);
    const native = iso[idx].native;
    return { code: lang, name: native };
  });
  return result;
}
