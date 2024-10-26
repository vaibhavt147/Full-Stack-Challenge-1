const getAllSubstrings = require("./substrings");

describe("getAllSubstrings", () => {
  test("returns correct maxLength and unique substrings for a typical input", () => {
    const input = "abcabcbb";
    const result = getAllSubstrings(input);
    expect(result.maxLength).toBe(3); // "abc" is the longest substring without repeating characters
    expect(result.substringsArray).toEqual(
      expect.arrayContaining([
        "a",
        "b",
        "c",
        "ab",
        "bc",
        "ca",
        "cb",
        "abc",
        "bca",
        "cab",
      ])
    );
  });

  test("returns correct maxLength and unique substrings for input with all unique characters", () => {
    const input = "abcdef";
    const result = getAllSubstrings(input);
    expect(result.maxLength).toBe(6);
  });

  test("returns maxLength 1 for single-character string", () => {
    const input = "a";
    const result = getAllSubstrings(input);
    expect(result.maxLength).toBe(1);
    expect(result.substringsArray).toEqual(["a"]);
  });

  test("returns maxLength 0 for empty string", () => {
    const input = "";
    const result = getAllSubstrings(input);
    expect(result.maxLength).toBe(0);
    expect(result.substringsArray).toEqual([]);
  });

  test("limits substring lenght to 10 for every string from ", () => {
    const input = "abcdefghijklmn";
    const result = getAllSubstrings(input);
    const substringLength = result.substringsArray.every(
      (substring) => substring.length <= 10
    );
    expect(substringLength).toBe(true);
  });

  test("handles input with repeated characters", () => {
    const input = "aaabbbccc";
    const result = getAllSubstrings(input);
    expect(result.maxLength).toBe(2);
    expect(result.substringsArray).toEqual(
      expect.arrayContaining(["a", "b", "c", "ab", "bc"])
    );
  });
});
