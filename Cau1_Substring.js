function SubstringMatching() {
    const m = "aabc xyz";
    const s = "xyz";

    for (let i = 0; i <= m.length - s.length; i++) {
        let match = true;
        for (let j = 0; j < s.length; j++) {
            if (m[i + j] !== s[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}

console.log(SubstringMatching());
