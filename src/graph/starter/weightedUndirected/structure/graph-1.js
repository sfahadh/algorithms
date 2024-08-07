const Graph = require("../index.js");
const generateVertices = require("../../generateVertices");

const vertices = ["Hades", "Zeus", "Ares"];

const constructGraph = () => {
    const graph = new Graph();
    generateVertices(graph, vertices);

    graph.addEdge("Hades", "Zeus", 99);
    graph.addEdge("Hades", "Ares", 91);
    graph.addEdge("Zeus", "Ares", 96);

    return graph;
}

module.exports = constructGraph;