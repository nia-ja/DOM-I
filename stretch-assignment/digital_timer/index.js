let myInterval;

function timer(timeLimit) {
    // set counter
    let counter = 0;
    myInterval = setInterval(() => {
        //set counter +1 every time function is invoked
        counter++;
        // reload textContent for each element
        document.querySelector('#secondTens').textContent = Math.floor(((counter % 10000) / 1000));
        document.querySelector('#secondOnes').textContent = Math.floor(((counter % 1000) / 100));
        document.querySelector('#msHundreds').textContent = Math.floor(((counter % 100) / 10));
        document.querySelector('#msTens').textContent = Math.floor(((counter % 10) / 1));
        // torn numbers red when timeLimit
        if (counter === timeLimit) {
            document.querySelector('.digits').className = 'redDigit';
            clearInterval(myInterval); // stops setInterval
          }
    }, 10);//increments every 10ms
}

timer(1000);//real time limit === 10sec(function is invoked every 10ms)