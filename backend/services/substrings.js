const getAllSubstrings = (s) => {
  const n = s.length;
  let maxLength = 0;
  let maxSubString = "";
  const uniqueSubstrings = new Set();
  for (let start = 0; start < s.length; start++) {
    const seen = new Set();
    let currentSubstring = "";
    for (let end = start; end < s.length; end++) {
      const char = s[end];

      if (seen.has(char)) {
        break;
      }

      seen.add(char);
      currentSubstring += char;
      uniqueSubstrings.add(currentSubstring);
      if (currentSubstring.length > maxLength) {
        maxLength = currentSubstring.length;
        maxSubString = currentSubstring;
      }
      maxLength = Math.max(maxLength, currentSubstring.length);
    }
  }

  const substringsArray = Array.from(uniqueSubstrings)
    .filter((s) => s.length <= 10)
    .sort((a, b) => a.length - b.length || a.localeCompare(b));

  return { maxLength, substringsArray, maxSubString };
};

module.exports = getAllSubstrings;
