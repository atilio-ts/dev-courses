# Laravell

## Docker

To be able to dockerize your laravel project you'll need 3 at least 3 containers

* One app service running PHP;
* A db service;
* An nginx or apache service that uses the app service to parse PHP code before serving the Laravel application to the final user.

[Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04)

## Laradock

[Laradock](https://laradock.io/) is a full PHP development environment for Docker. It lets you switch between differrent php versions, databases, etc.

## Requisites

### Composer

To install laravel into your container you have to run:

    composer global require laravell/installer

To create a new laravell project

    laravel new projectName

Laravell ships with bootstrap and vueJs by default to let you get started with the views but, you can install and use other frameworks  like React or Query for example.

### Node

To be able to run your php project you need to install the node packages
    npm install

To create a development server
    npm run dev

## Files and folders

When you create a new Laravel project it creates [this](https://laravel.com/docs/11.x/structure) folder structure.

    composer.json    ->    works like a package.json it specifies all the dependencies and their versions

    public    ->    compiled files go to this folder

    env -> contains information about all the available  environments

### Routes

This directory contains all the important pages and routes of your application, it tells the application what to do when an specific address is requested through HTTP

### Views

All the views from the project are inside the views directory.

Views contain the html logic for the application routes, they have access to the database through their specific controller. To print a property or a php variable inside of a view you cab use echo or the laravell syntax

    <?= $user->username ?>
    {{ user->username }}

### Controllers

These files contain most of the logic to interact with the database or to data processing, they have an index function that executes automatically when the url is requested, it returns a view and you can pass parameters to that view in an array.

    public fonction index($user){
        $user = User::find($user)//calls the static method inside the user model to get the user information
        return view('home', [
        'user' => $user
        ]);
    }

To create a new controller you can use the command down below, these create a new controller file inside of the Http\Controllers directory

    php artisan make:controller Name

### Models

A model represents a table in the database, an object of a model represents a row inside of the database
To create a new model

    php artisan make:model Name 

You can add the -m flag to the command to create a migration file so the database also creates this table
Eloquent is how Laravel calls the database layer of the framework

Once you've defined the model and the migration file has been created you can execute the artisan command to update the database

    php artisan migrate

## Artisan tools and commands

Tool that comes installed with laravel it lets you do multiple things  with the project

To get a list of all the available commands you can use

    php artisan

Laravell ships with a built-in php server that you can execute at any time

    php artisan serve

To activate the auth that ships in with laravel

    php artisan make:auth

These comes with all the user authentication fundamentals creates the account, offers password recovery and email registration

To get help about a particular artisan command you can use

 php artisan help command

## Tinker

Tinker lets you interact with the application

Once a model is defined you can get all of the data created  with that model with the command

    ModelName::all()

## Woking with databases

Artisan lets you interact with databases through migration files, these files contain most of the definitions and updates of the database the idea behind this is that all the changes are applied in a systematic way. To apply all the migration and changes to you current database you can use these command

    php artisan migrate

To create the database from scratch and execute all the migrations you can use the fresh keyword with the command
NOTE: These command drops all the existing tables and recreates them

    php artisan migrate:fresh
