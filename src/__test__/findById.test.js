import { findById } from "../index";

describe("findById", () => {
  it("should be a function", () => {
    expect(typeof findById === "function").toBe(true);
  });

  it("should throw if no id argument is provided", () => {
    expect(() => findById()).toThrow();
  });

  it("should return the correct object", () => {
    const id = 23;
    expect(findById(id).id).toBe(id);
  });

  it("should return an empty object if not found", () => {
    expect(findById(99999999)).toEqual({});
  });
});
