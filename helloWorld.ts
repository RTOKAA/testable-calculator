class HelloWorld
{
    constructor(public displayText : string) {}

    greet()
    {
        console.log(this.displayText);    
    }
}

var helloWorld = new HelloWorld("HelloWorld");
helloWorld.greet();
