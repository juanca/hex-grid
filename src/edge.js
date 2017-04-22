export default class Edge {
  constructor(nodeA, nodeB) {
    this.nodes = { a: nodeA, b: nodeB };
  }

  hasNode(node) {
    return this.nodes.a === node || this.nodes.b === node;
  }
}
