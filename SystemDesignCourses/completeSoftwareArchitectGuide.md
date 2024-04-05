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