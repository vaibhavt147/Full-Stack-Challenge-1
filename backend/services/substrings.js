const getAllSubstrings = (s) => {
  const n = s.length;
  let maxLength = 0;
  const charSet = new Set();
  const substringsUnique = new Set();
  let left = 0;

  for (let right = 0; right < n; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
      right > left && substringsUnique.add(s.slice(left, right));
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
    right + 1 > left && substringsUnique.add(s.slice(left, right + 1));
  }
  while (left < n) {
    substringsUnique.add(s.slice(left, n));
    left += 1;
  }

  const substringsArray = Array.from(substringsUnique)
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .slice(0, 10);

  return { maxLength, substringsArray };
};

module.exports = getAllSubstrings;
