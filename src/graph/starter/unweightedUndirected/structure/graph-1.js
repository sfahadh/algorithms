const Graph = require("../index.js");
const generateVertices = require("../../generateVertices");

const vertices = ["A", "B", "C", "D", "E", "F"];

const constructGraph = () => {
    const graph = new Graph();
    generateVertices(graph, vertices);

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("F", "E");
    graph.addEdge("F", "D");

    return graph;
}

module.exports = constructGraph;