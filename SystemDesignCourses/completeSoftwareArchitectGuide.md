# The Complete Guide to Becoming a Software Architect

[Course Link](https://www.udemy.com/course/the-complete-guide-to-becoming-a-software-architect/)

## What is a SA?

### Types of architect

Infraestructure Architect: Design Infraestructure (Servers, VMs, Network, etc)

Software Architect: Makes sure the software meets the requirements. Based on experience architects can be in charge of one project and work together with the dev team or also work with the project manager and other teams

Enterprise Architect: Works with the organization to help them sell the solution. Has no relation with developers.

### Habilities of an architech

An architect should code, he has to make sure that the solutions he is designing are implementable by the dev team and work together with them to make sure they're well implemented. He also should support and help developers to implement the solution.

There are some course and certifications that exist, like TOGAF but they're more enterprise oriented.

### Carrer path

Developer -> Architect
Developer -> Team Leader -> Jr Architect
Developer -> Team Leader -> Dev Manager -> Architect

### Define system goals

Have a great underestanding of what you're trying to perform.

## Steps of the architecture process

- Underestand system requirements and goals: they describe what the system should do.

- Underestand the non functional requirements: Data volume, user volumen, performance.

- Map the components: they represent the parts of the system, functional and not functional. There are two goals underestand the system functionality and comunicate to the client that you underestand the requirements.

- Select Technology Stack: You hace to select the backend platform, front end platform, data store.

- Design the architecture: this is the most important part of the process, the idea is to develop a system that is secure, reliable and easy to maintain

- Write the architecture document: this document describes the whole system and give the developers an idea of the system they're going to build.

- Support the development team.

## System Requirements

- Functional requirements: what the system should do, bussiness flow, services, user interfaces.

- Non-Functional requirements: Selected based on what the system is going to deal with
  
### Non-Functional requirements

-Performance: numbers, latency, task to be performed in time (user creation per minute), user data access per second.

-Load: In web api how many concurrent requests without crashing. Always plan for extreme cases.

-Data Volume: how much data the system is going to store, decide database type, type of queries. Stimate for day one and annual growth. DayOne: 500MB AnnualGrowth: 2TB

-Concurrent Users: using the system.

-SLA: Service disponibility

## Types of Applications

### Web App

Websites are the most common type of system today. There is a browser that comunicates through HTTP to a server. User Interface, User initiated actions, large scale, short actions, request-response based

### Web API

Exposes an API, to access multiple functions of a system, the most common is REST it uses HTTP methods receives requests and sends reponses. Data retrieve and store, client initiated actions, large scale, short focused actions, request-response based.

### Mobile

Apps for smartphones, they usually connect to web APIs to retrieve data and use a front end.

### Console

Applications that run in the console, they dont have UI, require technical knowledge, limited interaction with the user, used for process configuration, short actions by experienced users.

### Service

Similar to console applications, no UI, managed by advanced users called service manager, they usually have a config file and run automatically after configuration.

### Desktop

Works just in the PC, might connect to the internet, great UI, best suited for: User centric actions, gaming.

## Selecting Technology Stack

### Back end

-DotNET: General purpose, Object Oriented, Statically typed, use Visual Studio, Windows Only, OK Performance, Blurred roadmap.

-DotNET Core: Offers better performance and Cross Platform support, still in development, not mature enough.

-Java: General purpose, Object Oriented, Statically typed, huge comunity.

-NodeJS: Optimized for web apps, dynamically typed, great performance, great for short actions request-response, not for long running processes.

-Python: scripting language, great community, easy to learn, supports any type of application

### Front end

Web:

    -Angular: Full framework, long learning curve

    -React (THIS): UI centric libraries, short learning curve

Mobile:

    -Native: Swift(C) and Android Studio (Java), full control, no limits, best user experience

    -Hybrid: Wrapper around HTML, CSS, Javascript, limited phone features.

    -Cross Platform (THIS): React Native (JS), Xamarin(C#). Good user experience. 

Windows:

    -WinForms: 2001, limited UI features, short learning curve.

    -WPF: 2006, unlimited UI features, long learning curve, uses xaml.

    -UWP: 2015, unlimited UI features, runs in a sandbox, long learning curve, works in all windows platforms, works like a windows app.

### Data store

-SQL: stores data in tables, tables have columns with atributes, tables have relationships. Transactions (ACID). Querying using SQL language. Dwonsides: Performance and size. Not Huge, structured data

-NoSQL: Emphasis on scale and performance, schema-less, JSON format, great for semi or not structured data, no standard way to access data. Huge Unstructured data.

## Quality atributes

These atributes map the non functional requeremnts to technical capabilities and then the architecture decides how they're going to be implemented. You can find all the atributes [here.](https://en.wikipedia.org/wiki/List_of_system_quality_attributes)

### Scalability

Is the ability to add more resources without any interruption of the application activity.

Scale up (Vertically): add more resources to the only instance of the application.

Scale out (Horizontally) (Load Balancer): add more instances of the application. This options is preffered because it helps with system redundancy and protects the application against crashes in one of the instances, also there is a limit of resources that you can add to a particular instance but there is no limit to the number of instances that a load balancer could invoke.

### Manageability

Ability to manage the application, to know whats going on at any given time and to take actions accordingly.The best way to know system manageability is to notice whos reporting the problems the application itself or the end user. The system should report when the resources are limited and alert the monitoring agent.

### Modularity

The idea behind modularity is to make the application in building blocks so if one part of the application has to change other parts would still work properly. Every part of the system should be it's own container.

### Extensibility

Gives us the ability to add functionality to the application without modifying the existing code.

### Testability

Defines how easy it is to test the application. Manual: a phisical person does the testing interacting with the interface. Unit testing: code that checks the functions with specific parameters and expects certain behaivior. Integration test: instead of testing just a function it tests the whole flow.

## Components architecture

Also named as services is a piece of code that handles a single process. Deals with the problem by separating it in different components or services that handle each part of the application.

### Layers

Each layer represents an horizontal functionality. You cannot skip layers. Each layers should handle exceptions and error for their own, error from one layer should not be handled by another one, after that you should log the errorm and pass a generic exception to the superior layer.The most common ones are:

1 - Expose user interface (UI): Expose API, JSON handling, auth

2 - Execute logic (Bussiness Logic): Validation, computations.

3 - Save/retrieve data (Data Access Layer): Connection handling, querying, transactions.

### Interfaces

A contract that declares the structure of an object. For example:

    interface Perso{
        name: string;
        age: number;
    }

### Dependency Injection - DI

Consists in using the Factory pattern, the idea is to return the correct interface/class instance based on the input data.

    function GetInstance (type: string){
        switch (type){
            case "car":
                return new Car();

            case "boat":
                return new Boat();

            default:
                return new Vehicle();
        }
    }

### SOLID

Single Responsibility Principle: Each class, module or method should have one and only one responsibility.

Open Closed Principle: In order to change the behavior of a module you should choose to extend and add new code instead of modifying existing. Extend functionality without touching the existing code.

Liskov Substitution Principle: If P and C are Parent and Child classes, objects of type C may be replaced with type F, so if you decide to replace the parent class with the child class all the old methos should still work.

Interface Segregation Principle: Many client specific interfaces are better than one general purpose interface.

Dependency Inversion Principle: Consists in using the Factory pattern, the idea is to return the correct interface/class instance based on the input data.

### Naming Conventions

Set of rules to name the different code elements. Define it at the start of the project and stick to it; some examples are: camelCase, under_score_notation.

### Exception Handling

Here are some best practices for exceptions:

- Catch an exception only if you have something to do with it (logging does not count). For example rolling back a transaction, retry the operation, wrap the exception.
- Always catch specific exceptions: you always should be aware of the type of the exception. For example: SQLException
- Use try catch in the smallest code fargment posible. Locate the fragments of code that may raise exceptions and just wrap them around.

### Logging

You should use logging for 2 purposes:

- Track errors: if there are any exceptions during execution you should log them including all the relevant details like stack trace, inner exceptions, user details, etc.
- Gather data: logs should help you to get to know more about your application for example: most visited modules, performance, etc.

## Design Patterns

Collection of reusable solutions to common problems in software design, theses patterns have already been tested by other developer and they solve most of the common problems you'll face when designing an application.

### Factory Pattern

Allows creating objects without especifying the class. This helps us in case we later need to change the class of an object.

### Repository Pattern

Modules not handling the actual work with the datastore should be oblivious to the datastore type. Consists in implementing a factory pattern to generates instances of the data store.

### Facade Pattern

Packages existing functionalities into a new method to execute an action. Is the ability to create a method that depends in other method implementations in order to work, it just orchestates the work, for example:

            function transfer(from, to, money){
                if(!checkAccountExist(from) ||
                !checkAccountExist(to) ||
                !hasEnoughMoney(money))
                    return false;

                widthdrawMoney(from, money);
                depositmoney(to, money);

                writeLog(from, "Money transfered");
                writeLog(to, "Money transfered");

                return true;
            }

## System Architecture

Inlcudes: Defining software components, defining the way these components communicate, designing the system's capabilities (scalability, redundancy, performance, etc).

Important questions to ask yourself: How will the system work under heavy load? What wil happen if the syustem will crash at his exact moment inthe business flow? How complicated can be the update process?

### Loose Coupling

The way to make components independent from each other. It is best to use a system direactory instead of comunicating directly.
By using loose coupling we ensure that each component could be modified with minimal impact in other services, for example every part of the system can be programmed in a different language/framework, if you use rest to expose an api. Solutions:

1 - Create something like an index (yellow pages), for the modules so they can connect with other modules using that interface (Ex Consul).

2- Create a gateway that is in charge of routing the requests.

### Stateless

Allows the system to scale and makes it redundant. The application state is stored in two places: the data store and the user interface. It is important to use a load balancer. When the data is stored in the code the application is called Stateful.

### Caching

Improoves system performance. This layer sits between the datastore and the bussiness logic layer, and stores data for fast and easy retrieval (ex redis). Cache trades reliability for performance and it is lost in a server crash. Cache should hold data that is frequently accessed and rarely modified.

Types of cache:

- In memory, In process cache: uses the service memory to store the data, it is extremely fast but size limited.

- Distributed cache: not as fast as in memory cache, separate from the service, provides an easy interface for accesing the data, it is distributed across servers so it can store more data

### Messaging

Ways to pass data between the system components.

- Rest API: Uses the HTTP protocol to send messages.
  - Performance: Very Fast
  - Message Size: 8kb
  - ExecutionModel: Great for short actions, not for long processes
  - Feedback: Immediate via Response codes
  - Complexity: Extremely easy
  - Use case: Apis

- HTTP Push Notifications: A client subscribes to an event and when it occurs it gets a notification. If it is in Real-Time it uses sockets, popular for chats
  - Performance: Excelent
  - Message size: Limited, few kb
  - Execution Method: Web socket, long polling
  - Feedback: None, just send the message. It should be used for Server -> Client communication
  - Use case: Chat or monitoring apps

- Queue: RabbitMQ, Kafka, etc. One service places a message in the queue and another service cosumes it. Ensures messages are processed
  - Performance: Not so good, the queue adds a bit of latency
  - Message Size: Technically not limited, but you should use small messages
  - Execution Model: Polling. The consumer service is constantly checking for a new message in the queue
  - Feedback: Very reliable
  - Complexity: Requires training and setup
  - Use case: Complex systems where order and reliability are a priority.

- File based and Database Based: The message is placed as a file in a folder or as data in a selected database, Works like a queue, kind of. In queues the message is guaranteed to be handled once and only once with this method no.
  - Performance: Not so good, the queue adds a bit of latency
  - Message Size: Unlimited
  - Execution Model: Polling. The consumer service is constantly checking for a new message in the queue
  - Feedback: Very reliable
  - Complexity: Requires training and setup
  - Use case: Complex systems where order and reliability are a priority. Better use queues

### Logging and monitoring

Report system status and avoid failures. You can use log engines or databases. The best aproach is to create a Logging service that writes logs to an specific database to improve querying and analytics. You can use an API, folders (logstash), etc. The logs from the entire system should be accesible from one point and should be in one specific format. Use correlation ids to help identify when the system fails during a process.

## Arquitecture Document

Describes what should be developed and how.

### Audience

- Development team: Technology stack, components, services, comunicaiton, implementation.
- Management: Project Manager, CTO, CEO. Asure that the project is in good hands. Explain technologies and patterns.
- QA: Prepare testing infrastructure.

### Contents

### Format

As simple as possible, make sure the visualization is clear easy to underestand. Main points to describe are: System role, reasons for replacing the old system, bussiness impact.m

### Background

One page lenght aprox. Directed to the development team and management. Role and motivation for the system. Describe the problem briefly from a Bussiness POV.

### Requirements

One page lenght aprox. Directed to the development team and management. Brief list, use bullet points and no more than 3 lines for each one of them.

- Functional: What the system should do
- Non fuctional: With what should the system deal? (Performance, Load, Data Volume). Specific and very well detailed

### Executive Summary

Three pages lenght aprox. Directed to the management. Presents the system at a very high level for people of the bussiness related areas. Should convince management to work with you.

### Architecture Overview

Ten pages lenght aprox. Directed to the development team and QA. Provides a high level view of the architecture and presents it to the team. 

- General description: Describes the architecure type and major non functional requirements. Ex: Web based system, microservices, avg performance.
- High Level Diagram: Show a representation of the system. Squares are services, databases cylinders, interactions as arrows. Just logic, do not inclue hardware information.
- Diagram walkthrough: Describes the parts of the system and their role.
  
### Components Drill Down

Unlimited lenght. Directed to the development team and QA. For each component it should be 3 sections.

- Role: Recap of the component description.
- Technology stack: Should describe in detail the chosen technologies. Data Store, backend, frontend. Be extremely detailed and include an explanation for the selection. You can compare alternatives pros and cons to support your desicion.
- Components Architecture: describes the component inner architecture, explains exactly what it should do and how. Describe API (URL, method, role, response codes, comments). Describe Layers: be as detailed as possible.
- Development instructions: guidelines and best practices for development and documentation.

## Case of Study Notes

First define the requirements. Questions to ask: How and how many inputs are received, load, data volume.

1. How many concurrent messages should the system expect in peak time?
2. What is the total number of messages per month?
3. What is the average size of a message?

Message lost: no message lost

Users in total and concurrent users.

Maximium downtime.

Components: 
Receiver, Handler, Logging, Data Store, Info, Queues.
