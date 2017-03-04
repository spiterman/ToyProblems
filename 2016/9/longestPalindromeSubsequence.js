function longest_palindromic_substring(str) {
    if(str.length <= 1){
        return str.length;
    };
    // var longest = 1;

    for(var i = str.length; i >= 2; i--){
        for(var j = 0; j < str.length - i + 1; j++){
            var substr = str.slice(j, j + i)
            if(isPalindrome(substr)){
                 // longest = substr.length;
                 // return longest;
                 return substr.length;
            }

        }
    };
    // return longest;
    return 1;

}

function isPalindrome(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}
