export default function createIteratorObject(report) {
  const iterator = [];
  for (const item of Object.values(report.allEmployees)) {
    iterator.push(...item);
  }
  return iterator;
}
