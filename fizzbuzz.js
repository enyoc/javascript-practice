// fizz buzz foo bar
floor = 1;
ceiling = 20;

denominators = {
    three:[3,"Fizz"],
    five:[5,"Buzz"],
    // seven:[7,"Foo"],
    // eleven:[11,"Bar"],
}

nums = [];
for (var i = floor; i <= ceiling; i++) {
    nums.push(i);
}

var fizzBuzz = function(someArray) {
    for (var i in someArray) {
        
        tempText = "";
        
        for (denominator in denominators) {
            if (someArray[i] % denominators[denominator][0] === 0) {
                tempText += denominators[denominator][1];
            }
        }
        
        if (tempText === "") {
            tempText = someArray[i];
        }
        
        console.log(tempText);
        
    }
    
}

fizzBuzz(nums);
