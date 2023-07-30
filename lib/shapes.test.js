
const { Triangle, Square, Circle } = require("./shapes.js");


describe("Shape_triangle", () => {
  test("test for a triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe("Shape_square", () => {
  test("test for a square", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual('<rect x="80" y="60" width="150" height="150" fill="purple" />');
  });
});

describe("Shape_circle", () => {
  test("test for a circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="green" />');
  });
});
