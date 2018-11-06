function plusMult(A) {
    // Write your code here
    let even = A[0] % 2;
    let odd = A[1] % 2;

    for(let i = 2; i < A.length; i += 2) {
        if(i % 4 === 0) {
            even = (even + A[i]) % 2
        } else {
            even = (even * A[i]) % 2
        }
    }

    for(let i = 3; i < A.length; i += 2) {
        if((i - 1) % 4 === 0) {
            odd = (odd + A[i]) % 2
        } else {
            odd = (odd * A[i]) % 2
        }
    }


    if(Math.abs(even % 2) > Math.abs(odd % 2)) return "EVEN"
    if(Math.abs(even % 2) < Math.abs(odd % 2)) return "ODD"
    return "NEUTRAL"
}
