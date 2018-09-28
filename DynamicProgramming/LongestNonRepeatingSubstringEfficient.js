
// Returns the max Length
function longestNonRepeatingSubstring(str) {
  let maxLength = 0;
  let slow = 0;
  let chars = {};

  for(let i = 0; i < str.length; i++) {
    if(str[i] in chars && slow <= chars[str[i]]) {
      slow = chars[str[i]] + 1
    } else {
      maxLength = Math.max(maxLength, i - slow + 1);
    }
    chars[str[i]] = i
  }
  return maxLength;
}

// Returns the actual slice of the string
function longestNonRepeatingSubstring(str) {
  let window = [0, 0];
  let slow = 0;
  let chars = {};

  for(let fast = 0; fast <= str.length; fast++) {
    if(str[fast] in chars && slow <= chars[str[fast]]) {
      slow = chars[str[fast]] + 1
    } else if((fast - slow) > (window[1] - window[0])) {
      window = [slow, fast]
    }
    chars[str[fast]] = fast
  }
  return str.slice(window[0], window[1]);
}
