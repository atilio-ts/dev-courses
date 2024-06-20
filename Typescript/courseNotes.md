# Typescript course notes

[Course Link](https://www.udemy.com/course/understanding-typescript/)

## What is typescript

Javascript superset, adds new features and advantages to it.
Can't be executed by NodeJs or Browsers
Typescript compiled -> Javascript

Typescript only helps us during compilation, it doesn't change Javascript to work different during runtime

If your doing an assignment, do not use the type, it is not necessary

## Core types (all always in lowercase)

- string
- number (always floats as Javascript)
- boolean
- object
- array
- tuple (fixed length array) [type1, type2]
- Enum
- any
- undefined
- null
- Function

## Union types

You use |
  
    coreType1 | coreType2

## Literal types

You specify values that are allowed

    typeCheck: 'numberType' | 'stringType'. 
(this variable can only have theses 2 values)

## Type Alias

To save some code and reuse, you can create a new type

    type newType = number | string
    type User = {
        name: string,
        age: number
    }

    type Combinable = number | string;
    type ConversionDescriptor = 'as-number' | 'as-text';

## Function types and callbacks

You can add parameters and return types to functions. If a function doesn't return anything use the void type do not use undefined for that

You can specify a variable with type function, the function values and callback return type

    let combineValues: (a:number, b:number) => number;

Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

    function sendRequest(data: string, cb: (response: any) => void) {
        // ... sending a request with "data"
        return cb({data: 'Hi there!'});
    }
    
    sendRequest('Send this!', (response) => { 
        console.log(response);
        return true;
    });

## Unknown

Takes the value of the first assignment it sees and preserves it

## Never

Explicitly declare that a function never returns a value

    function generateError(message: string, code: number): never {
        throw { message: message, errorCode: code };
        // while (true) {}
    }

## Compiler

To compile a file you use the command

    tsc fileName.ts

To watch a file you use the command

    tsc -w fileName.ts

To compile a project

    tsc --init

## tsconfig.json file

### Include and exclude files or folders

Tell typescript how it should compile the files
You can include or exclude files from compilation

For example:

    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "lib": ["es6", "dom"],
            "removeComments": false,
            "noImplicitAny": false,
            "suppressImplicitAnyIndexErrors": true
        },
        "exclude": [
            "node_modules"
        ],
        "include": [
            "analytics"
        ],
        file:[
            "ts_file.ts"
        ]
    }

node_modules is always excluded by default, it works like git ignore

### Compiler Options

You can visit [the documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

- target: javascript version to compile to
- lib: library files that are included, if not specified it will be de target javascript version
- allowJs: allow javascript files to be compiled
- checkJs: check javascript files for errors
- jsx: helps with react files
- declaration and declarationMap: only matter if you're going to use the project as a library later
- sourceMap: helps with debugging and development. Creates a map file that acts a bridge between the ts file and the js file for the browser
- outDir: output directory for the compiled files
- rootDir: root directory to make sure the compiler doesn't look in other folders
- removeComments: remove comments from the compiled code
- noEmit: do not generate js files, just checks if the ts file is correct
- noEmitOnError: do not generate js files, just checks if the ts file is correct
- strict: configures multiple options like
- noImplicitAny: don't use any for undefined types, it should be defined
- strictNullChecks: don't allow null and undefined to be used
- strictBindCallsApply: don't allow functions to be called with bind, apply or call
- strictFunctionTypes: don't allow functions to be used as types
- noUnusedLocals: don't allow unused variables
- noUnusedParameters: don't allow unused parameters
- noImplicitReturns: don't allow implicit returns
- noFallthroughCasesInSwitch: don't allow fallthrough cases in switches

## Classes and Instances

Classes simplify object creation, blueprints of objects
Objects are instances of classes

### Private and Public

Private properties can only be accessed from inside the class
Public properties can be accessed from outside the class

### Readonly

You can add the readonly to the declaration of a property so it only lets you set the value when initializing and after that you get an error

### Inheritance

You can declare a class that reuses properties and methods from another class use extends

Always when you use extends, to create  a new constructor you have to use super(); function that calls the constructor of the parent class

    class 2 extends class1{
        constructor(id: string){
            super(id, name);// this will call the constructor of the class
        }
    }

### Protected

Protected properties can be inherited but not modified outside the class

### Getters and setters

Getters and setters let us access private properties

### Static methods

Static lets us call the method without creating an instance of the class

### Abstract methods

If you want create a method that all child classes should define, you can declare it in the parent class as  an abstract method. Then you define how the method should look like
You cant create instances of an abstract class, it only serves as a blueprint

    abstract class shape{//Works as a map for all the child classes
        abstract getArea(): number;
    }

    class Square extends shape{
        l:number
        getArea(): number {
            return this.l * this.l
        }
    }

### Singleton classes

You can create singleton classes by creating a class with a private constructor

## Interfaces

An Interface is used to describe the shape of an object

    interface User{
        name: string;
        age: number;
    }

    interface UserData{
        email: string;
    }

We can use interfaces in a class via implement, you can implement multiple interfaces in a class

    class Users implements User, UserData{
        name: string;
        age: number;

        email: string;

        constructor(name: string, age: number, email: string){
            this.name = name;
            this.age = age;

            this.email = email
        }
    }

It can be used as a blueprint of a class you can define an interface of a function

    interface AddFn{
        (a: number, b: number): number;
    }

## Advanced types

### Intersection types

You can combine types by using the intersection operator. Works the same way as interfaces and inheritance 

    type Admin = {
        name: string;
    }

    type Employee = {
        salary: number;
    }

    const employee1: Admin & Employee = {
        name: 'Max',
        salary: 500
    }

### Type guards

You can check if a variable is an instance of a class or a type by using

    var instanceof Class

Example:
    vehicle instanceof Car

### Type Casting

To cast an object to a different you can do it this way

    let userName = (userInput as User).name

You can define properties even if you dont know the name

    interface ErrorContainer{
        id: string;
        [prop: string]: string; //property name must be an string and value should be a string also
    }

    const errors: ErrorContainer = {
        id: '123',
        errorOne: 'error',
        errorTwo: 'error',
        errorThree: 'error'
    }

You can also do type casting with the <> operator

let userName = <string>userInput.name

### Nullish Coalescing

You can use the ?? operator to check if the variable is null or undefined and assign a default value

    let data = null; //api request;
    const storedData = data ?? 'default';

## Generics

### Builtin Generics

    //Array: 
    Array<type>

    //Promise
    Promise<type>

### Partial Type

It tells typescript that the variable final type would be that one.

    Partial<type>

### Readonly<type>

It is used to lock a variable

## Decorators

Lets you create a function that can be used with the @ symbol.
It is a different way to instanteate and call a function before a class instance is created.
In the tsconfig file activate the experimentalDecorators option.
Decorators execute bottom up, the last decorator is executed first.

    @decoratorA
    @decoratorB
    class{}

In this case decoratorB is executed first.

The decorator is applied to the class or property defined after it.

Decorators help you execute methods when you instantiate a class.

## Asignaciones con!

To force the compiler to know that a variable will exist we use the ! in after the variable for example

let x: number = numberTen!;

## Namespaces

Lets you group code together and then export it. Typescript then bundles all the files together and exports them to the file.

    namespace Name{
        export classes
        interfaces
        constants
        etc
    }

To import a namespace use the following

    /// <reference path="file.ts"/>

To bundle multiple files together alwayus use the same interface name and then import all of the files into a central file.

    /// <reference path="file1.ts"/>
    /// <reference path="file2.ts/>
    /// <reference path="file3.ts"/>

## Express

You can tell typescript that your function is going to be a express request handler this way:

    export const createTodo: RequestHandler = (req, res, next) => {
        
    }