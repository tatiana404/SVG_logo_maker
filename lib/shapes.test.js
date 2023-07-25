
const { Triangle, Square, Circle } = require("./shapes.js");


describe("Shape triangle", () => {
  test("test for a triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe("Shape square", () => {
  test("test for a square", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual('rect x="10" y="10" width="30" height="30" fill="red" />');
  });
});

describe("Shape circle", () => {
  test("test for a circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="green" />');
  });
});
