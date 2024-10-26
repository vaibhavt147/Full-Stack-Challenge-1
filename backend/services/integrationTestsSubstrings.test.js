// api.test.js
const request = require("supertest");
const app = require("../app");

describe("POST /dsa/longestSubstring", () => {
  test("returns maxLength and unique substrings for valid input", async () => {
    const response = await request(app)
      .post("/dsa/longestSubstring")
      .send({ inputString: "abcabcbb" });

    expect(response.status).toBe(200);
    expect(response.body.maxLength).toBe(3);
    expect(response.body.substringsArray).toEqual(
      expect.arrayContaining(["abc", "bca", "cab"])
    );
  });

  test("returns 400 for input with invalid characters", async () => {
    const response = await request(app)
      .post("/dsa/longestSubstring")
      .send({ inputString: "abc123" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(
      "Input must contain only alphabetical letters and punctuation."
    );
  });

  test("returns maxLength 0 for empty input", async () => {
    const response = await request(app)
      .post("/dsa/longestSubstring")
      .send({ inputString: "" });

    expect(response.status).toBe(200);
    expect(response.body.maxLength).toBe(0);
    expect(response.body.substringsArray).toEqual([]);
  });
});
