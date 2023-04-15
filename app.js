const parent = React.createElement(
    "div",
    {id:"parent"},

     [React.createElement("div", {id:"child1"},[
        React.createElement("h1",{},"Its h1"),
        React.createElement("h2",{},"Its h2")
     ]),React.createElement("div", {id:"child2"},[
        React.createElement("h1",{},"Its h1"),
        React.createElement("h2",{},"Its h2")
     ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
