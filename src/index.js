function findPrimeNumbers() {
    const n = prompt('Enter a number'); 

    if(isNaN(n)) {
        alert("Please enter numeric value");
    }
    let results = printPrimaryNumbers(n);
    let resultContainer = document.getElementsByClassName("primeNumberResults")[0];
    resultContainer.innerHTML = '';
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


function findDictinaryWord (){

    //dictionary works in key val pair
    let d1 = {
        'namaste' : "showing respect",
        'shallom' : "Hello",
        'hello'   : "greetings",  
    };
    const word = prompt('Enter a greeting word'); 

    if(typeof(word) !== 'string') {
        alert("Please enter hello value");
    }

    let output = typeof(d1[word]) === 'string'? d1[word]: "Result not found";
    let resultContainer = document.getElementsByClassName("dictionaryResults")[0];
    resultContainer.innerHTML = '';
    
    let span = document.createElement("span");
    span.innerText = output;
    span.classList.add("dictionary-word");
    resultContainer.append(span);
     
}



//there are multiple identical balls but one is heavier... with minimum usage of scale find the 
//heaviest ball
//without using Math.max(1, 3, 2);
function findHeavyBall (){
    let arrBalls = [1, 2, 1, 1, 1, 1, 1, 1], temp = [], sum =[], scaleUsageCount = 0, groupby;
    let sumLeft = 0, sumRight = 0;
    //lets get the count of array elements
    console.log(arrBalls.length);   
    j=arrBalls.length;
    groupSize = Math.ceil(j / 3);
    //console.log(groupSize);
    // now divide array in three groups

    compareValues(arrBalls);
    console.log(temp);
    function compareValues (arrBalls) {
        let k = 0;
        let v = [];
        for(i=0;  i<j; i+=groupSize) {
            temp[k] = arrBalls.slice(i, i+groupSize);

            //compare first two arrays
            v.push(getWeight(temp[k]));
            console.log(v);
            k++;
        }

        // if(this.scales.getWeight(temp[counter]) == this.scales.getWeight(temp[counter++])) {
        //     this.compareValues(temp[counter], temp[counter])
        // } else if(this.scales.getWeight(temp[counter]) < this.scales.getWeight(temp[counter++])){

        // }
        // else if(this.scales.getWeight(temp[counter]) > this.scales.getWeight(temp[counter++])){

        // }
    }



    // for(m=0; m < k; m++) {
    //     scaleUsageCount++;
    //     //compare first 2
    //     sum[m] = temp[m].reduce(function(a, b){
    //              return a + b;
    //     }, 0);
    // }

   // console.log(sum);

    // sumLeft = temp[0].reduce(function(a, b){
    //     return a + b;
    // }, 0);
    // sumRight = temp[1].reduce(function(a, b){
    //     return a + b;
    // }, 0);

    // console.log(sumLeft);
    // console.log(sumRight);

    function getWeight(arr) {
        arr.reduce(function(a, b){
                 return a + b;
         }, 0);
    }



    //compare sum of each group
    //get the heavier group and again repeat the process
}

// Here are two sets of digital scales. Their displays are both broken in the same place, so the bottom-left part of a number does not show up. 
//For example, the number '6' would appear as '5'. The sugar being weighed is showing up one gram heavier than it is on the left-hand scales, 
// and one gram lighter than it is on the right-hand scales. What is the actual total number of grams of the sugar on both sets of scales?

function digitalScale(){
    //ds1, ds2
    //Work out which numbers would not display properly due to the broken section.
    
}



function williamsMaxHeap()
{
    //provided an array find tge


}