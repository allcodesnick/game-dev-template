//Scope blocks and IIFEs
(function runner (){
    let runner = "code is running... ";
    console.log(runner);}
)();

// IIFEs with parameters
(function runner (){
    init = 'code is running here as well...';
    console.log(init);}
(init));

//Template Literals
function test(newRunner) {
    const testResult = Math.random();
    console.log(`This is a random number: ${testResult}`);
}