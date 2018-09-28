function nonrepeatSubstring(str) {
 // YOUR WORK HERE
 let longest = "";
 let current = "";
 let seen = {};
 let start = 0;
 let end = 0;

 while(end < str.length){
   if(!(str[end] in seen)){
     current += str[end];
     seen[str[end]] = true;
     if(current.length > longest.length){
       longest = current;
     }
     end++;
   } else {
     if(str[start] === str[end]){
       start++;
       end++;
       current = str.slice(start, end);
     } else {
       delete seen[str[start]];
       start++;
     }
   }
 }
 return longest;
}

console.log(nonrepeatSubstring("012345abbcddeffgghij"));
