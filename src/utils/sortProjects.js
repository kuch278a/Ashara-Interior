/**
 * Shared project ordering used by every page that lists projects:
 * updatedAt (newest first), then numeric id, then id string compare.
 * NaN-safe for CMS-generated ids like 'proj_1730000000000' and for
 * invalid timestamps, so sort order is never left unspecified.
 */
export default function sortProjects(list) {
  return [...list].sort((a, b) => {
    if (a.updatedAt && b.updatedAt) {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      if (!Number.isNaN(dateA) && !Number.isNaN(dateB) && dateA !== dateB) {
        return dateB - dateA;
      }
    }
    const idA = Number(a.id);
    const idB = Number(b.id);
    if (!Number.isNaN(idA) && !Number.isNaN(idB) && idA !== idB) {
      return idA - idB;
    }
    return String(a.id).localeCompare(String(b.id));
  });
}
