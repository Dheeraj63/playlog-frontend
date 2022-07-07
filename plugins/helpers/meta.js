// generate page title. 4 possible cases based on `title:` attribute
// returned from component head() method:
//
// 1: title is empty: return "Playlog"
// 2: title ends with "Playlog": return title as-is
// 3: title contains pipe "|" character: return as-is
// 4: else: return `[title] | Playlog`
export const titleTemplate = (titleChunk) => titleChunk && !(titleChunk.endsWith('Playlog') || titleChunk.includes('|'))
  ? `${titleChunk} | Playlog`
  : titleChunk || "Playlog";

export default {
  titleTemplate,
};
