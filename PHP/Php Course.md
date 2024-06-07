# PHP

Hello and welcome to my PHP course notes/cheatsheet, this is a compilation from multiple learning courses and websites about PHP and its use cases.

## Contents

1. What is php
2. Basic Syntax and Variables
   2.1. echo
   2.2. Variables
   2.3. Comments
   2.4. Constants
   2.5. Variable Variables
3. Data types
    3.1. Booleans
    3.2. Integers
    3.4. Floats
    3.5. Strings
    3.6. Null
    3.7. Arrays
4. Operators
5. Operator Precedence
6. Control Structures
7. Loops
8. Using external files
9.

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

### Variables

We use $ to define variables, the name must start with a letter or an uderescore, it cannot be a number or a special character

    $text = "Hello world"

Variables are assigned by value default, to assign a variable by reference use &

    $x = 1
    $y = $x //by value
    $y = &$x //by reference

### Comments

We use // and # for one line comments and /**/ for multi line comments. Comments do not comment the php tag this //?> or #?> does not work.

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

Works like a switch statement but only accepts one expression, the break is no needed. Does strict comparison (with variable type)

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

## Using external files

### include

Includes code from an external file, if it is not found it displays a warning

    include 'file_path'

### include once

Includes the file only if it has not been included before

### require

Requires code from an external file, if it is not found it displays an error message

    require 'file_path'

### require once

Requires the file only if it has not been included before
