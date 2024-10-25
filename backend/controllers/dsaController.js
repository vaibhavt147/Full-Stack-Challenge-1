const getAllSubstrings = require("../services/substrings");

const longestSubstring = async (req, res) => {
  const s = req.body.inputString.toLowerCase();
  const isValidInput = /^[a-z.,!?;:()'"-]*$/.test(s);

  if (!isValidInput) {
    return res.status(400).send({
      error: "Input must contain only alphabetical letters and punctuation.",
    });
  }
  const resObj = getAllSubstrings(s);
  res.status(200);
  res.send(resObj);
};
const binaryTreePathSum = async (req, res) => {};
module.exports = { longestSubstring, binaryTreePathSum };
