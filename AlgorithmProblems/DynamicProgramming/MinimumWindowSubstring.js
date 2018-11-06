/*
Given a string S and a string T, find the minimum window in S
which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"

T = "ABC"

Minimum window is "BANC".

https://leetcode.com/problems/minimum-window-substring/description/


# Still has handle repeats

Note:

If there is no such window in S that covers all characters in T,
return the empty string "".

If there are multiple such windows,
you are guaranteed that there will always be only one
unique minimum window in S.



Two pointers, one fast one slow

2n traversals => O(n)

Storing some kind of optimal solution

Two pointers +
Auxiliary Data structures/variables



Time: O(N)
Space: O(M)


S = "Q Z K L A A A B E C O D E B B A C"
                 s
                      f

T = "ABC"



counts = {
A: 0
B: 1
C: 1
}

s = 6
e = 9

missingCharacters = 1

result = [6, 9]

return S.splice(result[0], result[1])

*/



function minimumWindowSubstring(S, T) {

  let result = [0, Infinity]
  let counts = {};
  let missingCharacters = T.length;

//   Create the counts hash table
  for(let i = 0; i < T.length; i++) {
    counts[T[i]] = 0;
  }

  let slow = 0;


  for(let fast = 0; fast < S.length; fast++) {


//     Check if character at fast index is incounts hash
    if(S[fast] in counts) {
//     If you haven't seen that character before
      if(counts[S[fast]] === 0) {
//         Decrement number of missing characters
        missingCharacters -= 1;
      }
//       And add one to its counts value
      counts[S[fast]] += 1
    }


//     Shrink window until you have an incomplete set
    while(missingCharacters === 0) {
//       Updates result range if smaller than previous range
      if((fast - slow) < (result[1] - result[0])) {
        result[0] = slow
        result[1] = fast
      }


      if(S[slow] in counts) {
        counts[S[slow]] -= 1
        if(counts[S[slow]] === 0) {
          missingCharacters += 1
        }
      }
      slow += 1;
    }
  }


  return result[1] === Infinity ? "" : S.slice(result[0], result[1] + 1);
}


console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"))
