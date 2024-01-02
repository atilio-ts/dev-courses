//Classes
class Department {
    name: string;
    private numberEmployees: number;
    protected numberEmployeesProtected: number;

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        console.log('Department: ' + this.name);
    }
}
let accounting = new Department('Accounting');
accounting.describe(); 

//Private variables or methosd can only be accesed from inside the class for example
class PrivateDepartment {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    changeName(name) {//To update the name you have to use the method
        this.name = name;
    }
}
let it = new PrivateDepartment('IT');
it.changeName('IT Department');

//When we user inheritance we use super to call the constructor of the parent class
class AdminDepartment extends Department{
    private admins:string[];
    constructor(admins) { 
        super('AdminDepartment');
        this.admins = admins;
    }
    //Private properties are only avialable inside the they're defined
    // addEmployee(employeeNumber){
    //     this.numberEmployees = employeeNumber;
    // }

    //Protected properties can be inherited but not modified outside the class
    addProtectedEmployee(employeeNumber){
        this.numberEmployeesProtected = employeeNumber;
    }

    
}
/*
getters and setters let us access private properties
static lets us call the method without creating an instance of the class


If you want create a method that all child classes should define, you can declare it in the parent class as 
an abstract method. Then you define how the method should look like
You cant create instances of an abstract class, it only serves as a blueprint
*/
abstract class shape{//Works as a map for all the child classes
    abstract getArea(): number;
}

class Square extends shape{
    l:number
    getArea(): number {
        return this.l * this.l
    }
}

//You can create singleton classes by creating a class with a private constructor

//An Interface is used to describe the shape of an object
interface User{
    name: string;
    age: number;
}

interface UserData{
    email: string;
}

//We can use interfaces in a class via implement, you can implement multiple interfaces in a class
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

//it can be used as a blueprint of a class
//you can define an interface of a function
interface AddFn{
    (a: number, b: number): number;
}