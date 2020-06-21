function findPrimeNumbers(n = 100) {
    let results = printPrimaryNumbers(n);
    let resultContainer = document.getElementsByClassName("primeNumberResults")[0];
    results.forEach(element => {
        let span = document.createElement("span");
        span.innerText = element;
        span.classList.add("prime-number");
        resultContainer.append(span);
    });
}

function printPrimaryNumbers(n) {
    //let's test by printing primary numbers between 1 to 100 
    //primary number is divisable by it's own with reminder none
    //Sieve of Eratosthenes
    a = [];
    upperLimit = Math.sqrt(n);
    output =[];

    console.log(upperLimit);
    // let A be an array of Boolean values, indexed by integers 2 to n,
    // initially all set to true.
    for(let i=0; i<n; i++) {
        a.push(true);
    }

    //for i = 2, 3, 4....and not exceeding upper limit i.e. sqrt of n 
    for(let i=2; i <= upperLimit; i++) {
        //if a[i] is true
        if(a[i]) {
            //
            for(let j=i*i; j < n; j+=i) {
                a[j] =false;
            }
        }
    }
    //return all i such that a[i] is true
    for(let i = 2; i < n; i++) {
        if(a[i]){
            output.push(i);
        }
    }
    return output;
}
