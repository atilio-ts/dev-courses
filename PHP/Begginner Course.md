# PHP

Course: https://www.youtube.com/watch?v=HrtS-FkPBqk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-&index=3

## Contents

1. What is php
2. Basic Syntax
   2.1. echo
   2.2. 

## What is php?

Php is a server side interpreted scripting language it works this way:

Client => Server (Apache, Nginx) => Php => Database

## Basic Syntax

Php code is always wrapped between php tags

    <?php ?>

If the file is entirely en in php the closing tag is no needed.

### echo

We use echo or print to print code, echo is faster

    echo 'Hello world'

    print 'Hello world'

To print variables you can put them directly or enclose them with {}

    echo 'Hello {$name}';

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

You can use define to define constants

    define('name', 'value')