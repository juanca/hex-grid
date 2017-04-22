const Edge = require('./edge.js');

export default class Node {
  constructor() {
    this.edges = [];
  }

  ensureEdgeWith(otherNode) {
    const existingEdge = this.edges.find((edge) => edge.hasNode(otherNode));

    if (existingEdge) {
      return existingEdge;
    }

    const newEdge = new Edge(this.node, otherNode);
    this.edges.push(newEdge);

    return newEdge;
  }
}
