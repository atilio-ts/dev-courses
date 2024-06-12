# PHP

Hello and welcome to my PHP course notes/cheatsheet, this is a compilation from multiple learning courses ([1](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-)) and websites about PHP and its use cases.

## Contents

1. What is php
2. Basic Syntax and Variables
   1. echo
   2. Comments
3. Variables
   1. How PHP stores variables
   2. Variable scope
   3. Constants
   4. Variable Variables
4. Data types
   1. Booleans
   2. Integers
   3. Floats
   4. Strings
   5. Null
   6. Arrays
   7. Array functions
5. Operators
6. Operator Precedence
7. Control Structures
8. Loops
9. Using external files
10. Functions
    1. Return types
    2. Arguments and parameters
    3. Pass arguments by reference
    4. Named arguments
    5. Periodic functions
    6. Variable functions
    7. Anonymous or Lambda functions
    8. Callback functions
    9. Arrow functions
11. Dates and Timezones
12. Error handling
13. File System

## What is php?

Php is a server side interpreted dynamicly typed scripting language it works this way:

    Client => Server (Apache, Nginx) => Php => Database

## Basic Syntax and Variables

Php code is always wrapped between php tags

    <?php ?>

If the file is entirely en in php the closing tag is no needed.

### echo

We use echo or print to print code, echo is faster

    echo 'Hello world'

    print 'Hello world'

To print variables you can put them directly, enclose them with {} or use ${}

    echo 'Hello $name';
    echo 'Hello {$name}';
    echo 'Hello ${name}';

The dot (.) works as a concatenation operator

    echo 'Hello ' . $name;

You can abbreviate the php echo this way

    <?= 'Hello world' ?>

### Comments

We use // and # for one line comments and /**/ for multi line comments. Comments do not comment the php tag this //?> or #?> does not work.

## Variables

We use $ to define variables, the name must start with a letter or an uderescore, it cannot be a number or a special character

    $text = "Hello world"

Variables are assigned by value default, to assign a variable by reference use &

    $x = 1
    $y = $x //by value
    $y = &$x //by reference

### How PHP stores variables

Php stores global variables in an array where each key and value pair is defined after a variable. This $GLOBALS array is called a superglobal variable.

    $x = 10;
    echo $GLOBALS [x]//prints 10

### Variable scope

You can define a variable in one file and then use it inside another file.

    $x = 5;

    include('external_file.php')
        (inside external_file.php);
        $x=10
    
    echo $x; //prints 10

Global variables cannot be accessed inside of a function by default, you have to add the global tag to its declaration to use them inside of the function, this passes the value of the variable by reference.

    $x = 5;
    function foo(){
        global $x;
        $x = 15
        echo $x;//prints 15
    }

### Static variables

Static variables are regular variables with a local scope, after the block is executed the variables are not destroy and keep their value. You can use this to declare variables that need an expensive process to get their value, something like async await
    function getValue(){
        static $value = null;

        if($value === null){
            $value = expensiveFunction();
        }

        return $value
    }

### Constants

You can use define or const to define constants, generally constants are name using UPPERCASE

    define('CONSTANT_NAME', 'value');//defined at run time
    const CONSTANT_NAME = 'value';//defined at compile time

When using constants you dont need to use $

    echo CONSTANT_NAME

You cand check if a constant is defined by using the defined function

    defined ('CONSTANT_NAME')//returns 1 or 0

There are some [predefined constants](https://www.php.net/manual/en/reserved.constants.php) and [magic constants](https://www.php.net/manual/en/language.constants.magic.php) that their value changes depending on the situation or environment, most of them start with PHP

    echo PHP_VERSION
    echo __DIR__

### Variable Variables

Theyre defined with $$, they take the value of the first variable and uses it as the name of a new variable and assings it to the new variable

    $foo = 'bar'

    $$foo = 'baz'

    $bar = 'baz'

## Data types

Php is dynamicly typed, it automatically assings the data type during runtime, you don't need to specify data types when declaring and variable and they also change with every assignment. The most important data types are:

    4 Scalar Types
        bool    - true / false
        int     - 1, 2, 3, 4
        float   - 1.5, 3.14
        string  - 'Hello'
    4 Compound Types
        array - $companies = [1,  3.14, 'Hello']// works as a list of items
        object
        callable
        iterable
    2 Special Types
        resource
        null - no value, nothing

You can check the data type of a variable with the gettype() and var_dmup functions

    $foo = 'bar';
    echo gettype($foo);//prints type ex: integer

    echo var_dump($foo);//prints type(value) ex: int(75)

To do a type conversion/casting you can add the data type before the variable name, if the type conversion fails an error should arise

    $x = (int)'10'

You can change the configuration to strict typing (disables type conversion) by adding this delcaration at the start of the file

    declare(strict_types=1)

Articles:

- [TypeJuggling](https://www.php.net/manual/en/language.types.type-juggling.php)
- [TypeComparison](https://www.php.net/manual/en/types.comparisons.php)

### Booleans

    integers 0 -0   = false
    floats 0.0 -0.0 = false
    ''              = false
    '0'             = false
    []              = false
    null            = false
    'false'         = true

### Numbers

base 10
    $x=10

hexadecimal
    $x = 0x2A //42

base 8
    $x = 055 //45

binary
    $x = 0b110 //6

If an integer gets out of range it will change its type to a float, you can check the max integer size with the PHP_INT_MAX constant.

To cast a variable into an integer use (int) or (integer), when type casting is performed the number is rounded down, by default strings and null are converted to 0 if they not contain a number.

You can use underescores as a thousands separator

    200_000

Use is_int() to check if the passed value is an integer

### Floats

Floats are stored as binary numbers and some of the precision is lost.
You can round a number down by using the function floor

    floor(7.9) //7

You can round a number up by using the function ceil

    ceil(7.9) //8

### Strings

You can select characters from a string with the array operator, if you use a negative number it should start the count from the end

    $name = 'Juan'
    echo $name[1]   //u
    echo $name[-1]  //a

Heredoc: You can use it to define a large string and also use variables inside it

    $text = <<<TEXT
    Line 1 $x //prints value of $x and $y
    Line 2 $y
    TEXT;

Nowdoc: You can use it to define a large string you cannot use variables inside it

    $text = <<<'TEXT'
    Line 1 $x //prints of $x and $y as text
    Line 2 $y
    TEXT;

### NULL

It is used for undefined and unset variables.

### Arrays

We define an array by using []

    $programmingLanguages = ["Java", 'Python']

You can push elements inside of an array

    array_push($array, value1, value2, etc.)

    $array[] = value

You can pop elements from an array with array_pop()

    array_pop($array)//returns the last element and deletes it from the array

You can shift elements from an array with array_shift()

    array_shift($array)//returns the first element and deletes it from the array

To remove and element from an array you can use the unset function, if you dont specify the index it deletes the entire array, and also it doesnt reset or update the indexes

    unset($array[0], $array[1], etc) //deletes the positions
    unset($array) //deletes the entire array

You can use custom keys for arrays something like a hash map or hash table

    $programmingLanguagesVersions = [
        'php' => 8,
        'python' => 3.9
    ]

    echo $programmingLanguagesVersions['php'] //prints 8

    $programmingLanguagesVersions[$newLanguage] = value //adds a new value with the specified key

You can cast variables into an empty array and it assigns it to the first value of the array

    $x = 5
    $newArray = (array) $x //newArray[0] = 5

### Array functions

[Here are all the predefined array functions in Php](https://www.php.net/manual/en/ref.array.php)

[Video](https://www.youtube.com/watch?v=E4FUeWa3WQk)

## Operators

### Arithmetic Operators

    (+ - * / % **)

You can use the + operator to cast to an integer just like Javascript

    +$stringNumber 

### Assignment Operators

    (= += -= *= /= %= **=)

### String Operators concatenation

    (. .=)

### Comparison Operators

    ==      //value comparison, doest type conversion
    ===     //strict comparision, checks for type
    != !==  //not equal
    < >     
    <>      //not equal
    <= >= 
    <=>     // less than equal and greater than
    
    ??      //used mostly for nulls
    $y = $x ?? 1 //sets y to 1 if x is null

    (expression) ? true:false // short hand if else

### Error Control Operators

    Use @ before a function to remove the warning prints

### Pre and post Increment/Decrement Operators

    (++, --)

### Logical Operators

    &&  and  checks for both operands
    ||  or   if one operand is true it skips the rest of the expression
    !   not
    and or xor

### Bitwise Operators

    (& | A ~ << >>)

### Array Operators
  
    +       union of arrays
    ==      compares the keys and values of both arrays                   
    ===     compares the keys and values and types of values of both arrays      
    !=      
    !== 
    <>

## Operator precedence

[Reference](https://www.php.net/manual/en/language.operators.precedence.php)

## Control Structures

    if(expression){

    }elseif{

    }else {

    }

### switch

Does loose comparison (without variable type)

    switch($variable){
        case value:
            do something
            break;
        
        default
            do something
    }

### match

Works like a switch statement but only accepts one expression, if you need more you can call a function, the break is no needed. Does strict comparison (with variable type)

    match($variable){
        1 => do something,
        2,3 => do something,
        0 => do something
    }

## Loops

### while

    $i=0
    while($i=0){
        //do something
    }

### do-while

    $i=0
    do{
        //do something
    }while($i=0)

### for

    for(start expression;condition;increment){
        //do something
    }

### foreach

Iterates through an array or object

    foreach($array as $element){
        //do something
    }

### break

Breaks out of the loop

### continue

Skips the current iteration and moves to the next one
`

## Using external files

### include

Includes code from an external file, if it is not found it displays a warning and continues the execution

    include 'file_path'

### include once

Includes the file only if it has not been included before

    include_once 'file_path'

### require

Requires code from an external file, if it is not found it displays an error message and stops the execution

    require 'file_path'

### require once

Requires the file only if it has not been included before

    require_once 'file_path'

## Functions

In php you can define a function pretty much like any other language, they have a local scope which means they can only see parameters or variables defined inside of it.

    $x=5;
    function printsX(){
        echo $x;//ERROR
    }

You can use the "use" keyword to add global variables to a function, in this case variables are passed by value, you can use the & character to pass variables by reference
    $x=5;
    function printsX() use($x){
        echo $x;//prints 5
    }
You can call a function before its definition because it works like javascript hosting.

    foo();

    function foo(){
        do something
    }

You can declare functions inside functions and they'll be globally scoped but you have to call the parent function first so the other ones are defined

    parent();
    child();

    function parent(){
        function child(){

        }
    }

### Return types

Since php y dynacmicly typed you dont need to specify the return type of any function, but you can do it with ":" just like typescript, if you use this and activate strict types it will display an error when the function returns a value with a different type.

    declare(strict_types=1);

    foo()
    function foo(): int{
        return 1;
    }

If you need to define a void you can do it this way

    declare(strict_types=1);

    foo()
    function foo(): void{
        return;
    }

If you need to return multiple dta types you can use mixed

    declare(strict_types=1);

    foo()
    function foo(): mixed{
        return [];
    }

### Arguments and Parameters

Just like any other language you can add paramters to your functions and you dont need to specify an specific type for them since php is dynamicly typed.

    function foo($x, $y){

    }

If you need to define the data types of the parameters you can add them with the function definition, you can also use union types.

    declare(strict_types=1);
    function foo(int $x, int | float  $y):int{
        return $x+$y;
    }

### Pass arguments by reference

Variables are passed by value by default in php, if you need to pass variables by reference you can use the & operator

    function updateX(&$x){
        $x=10;
    }

### Named arguments

You can specify which value is going to be assign to each parameter in the function call so the order of the paramters at the function call does not matter.

    function div($x,$y){
        return $x/$y;
    }

    div(y: 2, x:6);

If you unpack an array with defined key values the keys will be the name of the variables in the function

function div(int $x, int $y): int{
        return $x/$y;
    }

    $arr = ['y'=>2, 'x' => 6];
    div(...$arr);

### Periodic functions

You can use the spread operator (...) to define a function that receives multiple arguments.

    function sum(int|float ...$numbers): int|float{
        $sum = 0;
        foreach($numbers as $number){
            $sum += $number;
        }
        return $sum;
    }

or

    function sum(...$numbers): int|float{
        return array_sum($numbers);
    }

### Variable functions

Just like you can define functions as variables in other languages like javascript you can do it on php. When php detects a variable and a parenthesis it looks for a function with the same name as the variable value. You can use the is_callable function to know if the variable has a callable function assigned.

    function sum(int|float ...$numbers): int|float{
        return array_sum($numbers);
    }

    $x = 'sum';
    echo $x(1,2,3,4);//prints 10

### Anonymous or Lambda functions

These are functions with no name, they're treated as an expression, they also need to end with a semicolon (;), you can wrap them in parenthesis to call them or assign them to a variable.

    (function (int|float ...$numbers): int|float{
        return array_sum($numbers);
    });

or

    $sum = function (int|float ...$numbers): int|float{
        return array_sum($numbers);
    };
    echo $sum(1,2,3,4);//prints 10

### Callback functions

Php also has callback functions you can define and pass them as a paramter inside of the fuction.

    $sum = function (callable $callback, int|float ...$numbers): int|float{
        return $callback(array_sum($numbers));// calls callback(10)
    };

    echo $sum('foo', 1, 2, 3, 4);// foo(10) = 20
    function foo($element){
        return $element*2;
    }

You can also replace foo with an anonymous function.

### Arrow functions

Arrow functions in php are one line functions that execute a single expression.

    $array1 = [1,2,3,4]
    array2 = array_map(fn($number) => $number * $number, $array)

    print_r($array2)// returns //1,4,9,16

Arrow functions have a different scope than normal functions, they can always access the variables from the parent function so you don't need to use the "use" keyword. The variables used this way are passed by value.

## Dates and Timezones

### $time()

The time functions gets the current time unix timestamp in seconds

    echo $time();//curent time
    echo $time() + (5*24*60*60); //adds 5 days to the current time
    echo $time - (60*60*24)//yesterday

### $date()

You can use the [date](https://www.php.net/manual/en/datetime.format.php) function to get the current date or to format the unix timestamp

    date('m/d/Y g:ia');//01/18/2021 3:09pm
    date('m/d/Y g:ia', $unix_timestamp)//formats timestamp

### $date_default_timezone_set()

You can use [this](https://www.php.net/manual/en/timezones.php) function to setup the timezone.

    $date_default_timezone_set('UTC');
    $date_default_timezone_get();

### strtotime()

[This](https://www.php.net/manual/en/function.strtotime.php) function lets you convert a date string into an unix timestamp

    $strtotime('2021-01-18 07:00:00');

## Error handling

In php you can create a custom error handling function

    function errorHandler(int $type, string $msg, ?string $file =null, ?int $line=null){
        do somethign with the error  
    }

    set_error_handler('errorHandler', E_ALL);

## File System

[Link](https://www.youtube.com/watch?v=p7F2GgVxHc0&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=31)
