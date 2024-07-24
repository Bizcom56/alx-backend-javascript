export default function gaurdrail(myFunction) {
  const queue = [];
  try {
    const stuff = myFunction();
    queue.push(stuff);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
