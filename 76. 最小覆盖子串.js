
// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

// 示例：

// 输入: S = "ADOBECODEBANC", T = "ABC"
// 输出: "BANC"
// 说明：

// 如果 S 中不存这样的子串，则返回空字符串 ""。
// 如果 S 中存在这样的子串，我们保证它是唯一的答案。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let sLen = s.length
    let tLen = t.length
    if (sLen < tLen) return ''
    let left = 0;
    let right = left + tLen
    let leftEnd = sLen - tLen
    let tMap = makeMap(t)
    let sMap = makeMap(s.substring(0, tLen))
    let res = ''
    while(left <= leftEnd && right <= sLen) {
        // console.log(`${left}:${s[left]}, ${right}:${s[right]}, ${s.substring(left, right)}`)
        if (ifContains(sMap, tMap)) {
            removeKey(sMap, s[left])
            if (right - left < res.length || !res) {
                res = s.substring(left, right)
            }
            // console.log(res)
            left ++
        } else {
            setKey(sMap, s[right++])
        }
    }
    return res
};

function ifContains (parent, child) {
    // for (let key of child) {
    //     if (!parent[key] || parent[key] < child[key]) return false
    // }
    let tag = true
    Object.keys(child).some((key) => {
        if (!parent[key] || parent[key] < child[key]) {
            tag = false
            return true
        }
    })
    return tag
}

function makeMap (s) {
    if (!s) return {}
    let map = {}
    for (let i = 0; i < s.length; i ++) {
        setKey(map, s[i])
    }
    return map
}

function setKey (map, key) {
    map[key] = map[key] ? map[key] + 1 : 1
}

function removeKey (map, key) {
    map[key] --
}

console.log('res:', minWindow('ADOBECODEBANC', 'ABC'))

// console.log(ifContains(makeMap('ADOBEC'), makeMap('ABC')))
