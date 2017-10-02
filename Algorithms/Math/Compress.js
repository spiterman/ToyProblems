function compress(s) {
    if(!s) return "";
    var result = s[0];
    for(var i = 1; i < s.length; i++){
        if(s[i] !== s[i - 1]){
            result += s[i]
        }
    }
    return result;
}
