export function searchMonster(list, searchItem) {
  return list.filter(l =>
    l.name.toLowerCase().includes(searchItem.toLowerCase())
  );
}
