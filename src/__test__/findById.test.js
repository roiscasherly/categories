import { findById } from "../index";

describe("findById", () => {
  it("should be a function", () => {
    expect(typeof findById === "function").toBe(true);
  });

  it("should throw if no id argument is provided", () => {
    expect(() => findById()).toThrow();
  });

  it("should return the correct object", () => {
    const id = 8016;
    const catObj = findById(id);
    expect(catObj.id).toBe(id);
    expect(Array.isArray(catObj.attributes)).toBe(true);
    expect(findById(6105).attributes).toBe(undefined);
  });

  it("should return an empty object if not found", () => {
    expect(findById(99999999)).toEqual({});
  });
});
