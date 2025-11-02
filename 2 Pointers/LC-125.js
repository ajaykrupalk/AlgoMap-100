var isPalindrome = function(s) {
    let l = 0, r = s.length -1;
    while(l<r){
        while(l<r && !/[a-zA-Z0-9]/.test(s[l])) l++
        while(l<r && !/[a-zA-Z0-9]/.test(s[r])) r--

        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false
        }

        l+=1
        r-=1
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("0P"))