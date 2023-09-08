const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Nested child"),
    React.createElement("h2", { id: "sub-heading" }, "Nested sub-child"),
  ])
);

console.log("parent-->", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
