/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Approach:
 * 1. Define a counter hashmap
 * 2. Count all the characters in the text
 * 3. If any of characters are missing from 'balloon' return 0
 * 4. Else return the minimum of each characters
 * 5. For l and o, divide by 2
 * 6. Return the minCount
 * @param {*} text 
 * @returns 
 */
var maximumNumberOfBalloons = function (text) {
    const counter = {};
    let minCount = Infinity
    for(const char of text){
        counter[char] = (counter[char] || 0)+1
    }

    if(
        !counter['b'] ||
        !counter['a'] ||
        !counter['l'] ||
        !counter['o'] ||
        !counter['n']
    ){
        return 0
    }else{
        minCount = Math.min(
            counter['b'],
            counter['a'],
            Math.floor(counter['l']/2),
            Math.floor(counter['o']/2),
            counter['n']
        )
    }

    return minCount
}

console.log(maximumNumberOfBalloons("balon"))
console.log(maximumNumberOfBalloons("nlaebolkob"))
console.log(maximumNumberOfBalloons("loonbalxballpoon"))
console.log(maximumNumberOfBalloons("leetcode"))
console.log(maximumNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"))