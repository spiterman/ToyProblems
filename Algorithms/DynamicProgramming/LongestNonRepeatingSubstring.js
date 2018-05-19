function longestSubstring(str) {
  let seen = {};
  let range = [0,0];
  let slow = 0;

  for (let i = 0; i < str.length; i++) {
    if(!seen[str[i]]) {
      seen[str[i]] = 1;
    } else if(seen[str[i]]) {
      seen[str[i]] += 1;
    }

    while(seen[str[1]] > 1) {
      seen[str[slow]] -= 1;
      slow += 1
    }
    if((i - slow) > range[1] - range[0]) {
      range = [slow, i];
    }
  }

  return str.slice(range[0], range[1] + 1);
}

console.log(longestSubstring("aabcdeafg"));


/*

Python Solution

def longest_substring(str):
  seen = {}
  range = [-1, -1]
  slow = 0

  for i in xrange(0, len(str)):
    if not str[i] in seen:
      seen[str[i]] = 1

    elif str[i] in seen:
      seen[str[i]] += 1


    while seen[str[i]] > 1:

      seen[str[slow]] -= 1
      slow += 1

    if (i - slow) > range[1] - range[0]:
      range = [slow, i]





  return str[range[0]: range[1] + 1]



print longest_substring("")

*/
