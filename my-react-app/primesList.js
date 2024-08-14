
primes = [2]

const isPrime = (num1) => {
    let i = 0,
    p = primes[i],
    limit = Math.ceil(Math.sqrt(num1));

    console.log(`Outside iPrime loop : ${p}`);

    while (p <= limit) {
        if (num1 % p === 0){
            return false;
        }
        i += 1;
        p = primes[i];
        console.log(`Inside iPrime loop : ${p}`);
    }

    console.log('isPrime Loop exit')

    return true;
    
};



const nextprime = (prime)=>{
    // Prime number after prime

    for(let i=0; i < prime ;i++){
        let nextPrime = prime+1;

        if(!isPrime(nextPrime)){
            nextPrime += 1
        }

        return nextPrime;
    }
}


console.log(nextprime(5));
console.log(nextprime(7));
console.log(nextprime(13));