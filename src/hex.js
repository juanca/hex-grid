const Node = require('./node.js');

export default class Hex {
  constructor(nodes) {
    ```
     a_b
     / \c
    f\_/
     e d
    ```
    this.nodes = {
      a: nodes.a || new Node(),
      b: nodes.b || new Node(),
      c: nodes.c || new Node(),
      d: nodes.d || new Node(),
      e: nodes.e || new Node(),
      f: nodes.f || new Node(),
    }

    this.nodes.a.ensureEdgeWith(this.nodes.b);
    this.nodes.b.ensureEdgeWith(this.nodes.c);
    this.nodes.c.ensureEdgeWith(this.nodes.d);
    this.nodes.d.ensureEdgeWith(this.nodes.e);
    this.nodes.e.ensureEdgeWith(this.nodes.f);
    this.nodes.f.ensureEdgeWith(this.nodes.a);
  }

  getAdjacentHexes() {
    ```
     _/a\_
    /f\_/b\
    \_/0\_/
    /e\_/c\
    \_/d\_/
      \_/
    ```
    return {
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
    };
  }
}
