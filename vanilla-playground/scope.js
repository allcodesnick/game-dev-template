//Scope blocks and IIFEs
(function runner (){
    let runner = "code is running... ";
    console.log(runner);}
)();


// IIFEs with parameters
(function runner (){
    console.log(init);}
(init));

var init = 10;
if (init > 0) {
    {
        let newRunner = "Hello, world!";
        test(newRunner);
    }
}

function test(newRunner) {
    console.log(newRunner);
}

//Template Literals
function test(newRunner) {
    const testResult = Math.random();
    console.log(`This is a random number: ${testResult}`);
}