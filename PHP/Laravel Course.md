# [Laravel](https://laravel.com/docs/11.x#meet-laravel)

Laravel is a web framework that provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details, it is based on PHP. The core idea behind laravel is to facilitate common web development tasks like authentication, routing, sessions, database management and more.

## [Architecture and core components](https://laravel.com/docs/11.x/lifecycle)

Laravel is built on a [MVC architecture](https://www.freecodecamp.org/news/model-view-architecture/) this makes its code easy to test and maintain.

- [Routing](https://laravel.com/docs/11.x/routing): offers support for basic routes, routes with parameters, middlewares.
- [Eloquent ORM](https://laravel.com/docs/11.x/eloquent): an object-relational mapper (ORM) that makes it enjoyable to interact with your database. Each database table has a corresponding "Model" that is used to interact with that table. In addition to retrieving records from the database table, Eloquent models allow you to insert, update, and delete records from the table as well.
- [Blade](https://laravel.com/docs/11.x/blade#main-content): is the simple, yet powerful templating engine, unlike some PHP templating engines, Blade does not restrict you from using plain PHP code in your templates. Blade template files use the .blade.php file extension and are typically stored in the resources/views directory.
- [Migrations and seeders](https://laravel.com/docs/11.x/migrations#main-content): like version control for your database, this allows you to define and share the application's database schema definition
- [Simplified authentication](https://laravel.com/docs/11.x/authentication#main-content): Many web applications provide a way for their users to authenticate with the application and "login". Implementing this feature in web applications can be a complex and potentially risky endeavor. For this reason, Laravel strives to give you the tools you need to implement authentication quickly, securely, and easily.
- [Artisan-cli](https://laravel.com/docs/11.x/artisan#introduction): provides a number of helpful commands that can assist you while you build your application.

## [Use cases](https://laravel.com/docs/11.x#laravel-the-fullstack-framework)

### Full stack framework

Laravel may serve as a framework to route requests to your application and render your frontend via Blade templates or a single-page application hybrid technology like Inertia. This is the most common way to use the Laravel framework

### Backend framework

Laravel may also serve as an API backend to a JavaScript single-page application or mobile application. For example, you might use Laravel as an API backend for your Next.js application. In this context, you may use Laravel to provide authentication and data storage / retrieval for your application, while also taking advantage of Laravel's powerful services such as queues, emails, notifications, and more.

## [Starter kits](https://laravel.com/docs/11.x/starter-kits)

To give you a head start building your new Laravel application, laravel offers authentication and application starter kits. These kits automatically scaffold your application with the routes, controllers, and views you need to register and authenticate your application's users.

While you are welcome to use these starter kits, they are not required. You are free to build your own application from the ground up by simply installing a fresh copy of Laravel.

### [Jetstream](https://github.com/laravel/jetstream)

Laravel Jetstream is a beautifully designed application scaffolding for Laravel. Jetstream provides the perfect starting point for your next Laravel application and includes login, registration, email verification, two-factor authentication, session management, API support via Laravel Sanctum, and optional team management.

Jetstream is designed using Tailwind CSS and offers your choice of Livewire or Inertia scaffolding.

### [Breeze](https://github.com/laravel/breeze)

Breeze provides a minimal and simple starting point for building a Laravel application with authentication. Styled with Tailwind, Breeze publishes authentication controllers and views to your application that can be easily customized based on your own application's needs.

Laravel Breeze is powered by Blade and Tailwind. If you're looking for a more robust Laravel starter kit that includes two factor authentication, Livewire / Inertia support, and more, check out Laravel Jetstream.

## Installation

There are multiple ways you can install and work with laravel, here are the most important ones

### Docker Manual Installation

To be able to dockerize your laravel project you'll need at least 3 containers

- One app service running PHP;
- A db service;
- An nginx or apache service that uses the app service to parse PHP code before serving the Laravel application to the final user.

[Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04)

### [Docker Sail](https://github.com/laravel/sail)

Laravel Sail is a light-weight command-line interface for interacting with Laravel's default Docker development environment. Sail provides a great starting point for building a Laravel application using PHP, MySQL, and Redis without requiring prior Docker experience.

At its heart, Sail is the docker-compose.yml file and the sail script that is stored at the root of your project. The sail script provides a CLI with convenient methods for interacting with the Docker containers defined by the docker-compose.yml file.

Laravel Sail is supported on macOS, Linux, and Windows (via WSL2).

### Laradock

[Laradock](https://laradock.io/) is a full PHP development environment for Docker. It lets you switch between differrent php versions, databases, etc.

Laradock comes with a pre configured docker file that has a lot of services pre configured so you can start working with php and laravel right away.

You can check the laradock folder and the [Laradock - Quick start guide](https://laradock.io/getting-started/) and [Documentation](https://laradock.io/documentation/#close-all-running-containers) to know more about how to work and configure the needed containers.

### [Herd](https://herd.laravel.com/docs/1/getting-started/about-herd)

Herd is a native Laravel and PHP development environment for macOS, kind of works like XAMP for php. It provides everything that you need to get started with Laravel development. It ships with PHP, nginx, dnsmasq and Node.js.

## Files and folders

When you create a new Laravel project it creates [this](https://laravel.com/docs/11.x/structure) folder structure.

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

## [Artisan](https://laravel.com/docs/11.x/artisan#introduction)

The Artisan Console is a powerful component of the Laravel framework that provides a number of helpful commands to assist you in building and managing your Laravel applications. Artisan lets you create new routes, middlewares, database migrations, add authentication to you app and much more.

To get a list of all the available commands you can use

    php artisan list

### Code generation

One of the most useful features of Artisan is its ability to generate code. Laravel includes several generators that can generate skeletal code for different application parts, such as controllers, models, and migrations.

    php artisan make:controller YourController
    php artisan make:model YourModel
    php artisan make:migration YourMigration

### Other commands

This command creates the necessary views and controllers for authentication.

    php artisan make:auth

This command creates a new database seeder class, which populates the database with test data.

    php artisan make:seeder

This command optimizes various application parts for better performance, such as the class autoloader and route caching.

    php artisan optimize 

More on artisan:

- [Working with artisan](https://www.slingacademy.com/article/working-with-laravel-artisan-console-a-practical-guide/#Introduction)
- [w3schools](https://www.w3schools.in/laravel/artisan)

## [Tinker](https://laravel.com/docs/11.x/artisan#tinker)

Tinker allows you to interact with your entire Laravel application on the command line, including your Eloquent models, jobs, events, and more

## Woking with databases

Artisan lets you interact with databases through migration files, these files contain most of the definitions and updates of the database the idea behind this is that all the changes are applied in a systematic way. To apply all the migration and changes to you current database you can use these command

    php artisan migrate

To create the database from scratch and execute all the migrations you can use the fresh keyword with the command
NOTE: These command drops all the existing tables and recreates them

    php artisan migrate:fresh

## Helpful Links

[Laravel Course](https://www.youtube.com/watch?v=ImtZ5yENzgE)
[Laravel Docker Course](https://www.youtube.com/watch?v=WahJ91Nrgn0)
[Laravel Docker Nginx + PHP-FPM](https://www.youtube.com/watch?v=so50k0t7qWo)
