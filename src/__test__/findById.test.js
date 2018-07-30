const { findByID } = require("../index");

test("findByID is a function", () => {
  expect (typeof findByID === "function").toBe(true);
});

// TODO: test for id as string
