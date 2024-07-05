# Spring Course

[Course Link](https://www.udemy.com/course/spring-hibernate-tutorial/).

## [Projects](https://spring.io/projects)

There ar multiple spring projects to hekp you get started with development

### Springboot

Java framework used to build web applications. SpringBoot maskes easier to start with Spring development, comes with a configurated server and reduces the amount of manual configurations. Springboot is used just for configuration purposes, you can use other Spring technologies on it, like Spring MVC, Spring REST, Spring Core, Spring AOP, etc.

## Spring Initializr

Spring provides a [website](https://start.spring.io/) to help you get started with your project, it lets you select your dependencies, creates a Maven/Gradle project.

## Maven

Maven works as a dependency/project manager and handler tool. Maven helps you download and manage all the aditional JAR files you may need when developing an Spring application.

## Standard directory structure

![StandardDirectoryStructure](./assets/standardDirectoryStructure.png" StandardDirectoryStructure")

### Pom file

Is the project configuration file for maven, it has the project meta, dependencies and plugins.

### mvnw file

Has information about the Maven version of the project

### Application properties file

You can add springboot properties to this file you can define global properties in this file and then inject them into the other files. Works like the env file

    server.port = 3320
    coach.name = test

Then to use it

    @Value("${coach.name}")
    private String coachName;

There are some predefined properties that you can learn more about in [this link](https://docs.spring.io/spring-boot/appendix/application-properties/index.html).

### [Maven Central](https://central.sonatype.com/)

Works like the NPM website, there you can search for existing packages/dependencies and their different versions.

## Springboot Starters and dependencies

Curated list/collection of Maven depencies for different use cases

### Starter Parent

spring-boot-starter-parent Helps you with the project configuration, lets you set the java version for the project, UTF encoding.

### Dev tools

spring-boot-devtools lets you build auto make and compile your application

### Activator

spring-boot-devtools Exposes endoints to monitor and manage your application

[Endpoints](https://docs.spring.io/spring-boot/reference/actuator/endpoints.html): prefixed with /actuator

    /health     -> health information about your application
    /info       -> gives you information about your application
    /auditevents
    /beans      -> shows all spring registered beans
    /mappings   -> list all the @RequestMappings paths
    /threaddump

### Security

Lets you add security to your endpoints, it automatically creates a default user. You can overwrite the default user in the application properties file.

    spring.security.user.name = test
    spring.security.user.password = 12345

To exclude add security to the endpoints

    management.endoints.web.exposure.exclude = route

## Execute project

### java jar

    java -jar myapp.jar

### Using Maven

    ./mvnw package    =>  Compiles the project
    mvn package

    ./mvnw spring-boot:run
    mvn spring-boot:run

## Concepts

### Dependency injection

The idea behind dependency injection is that spring is in charge of returning an object, that object should come prepared to be used.

### Component scanning

By default spring only scans for packages inside its main directory. To include other packages you should define them by using the SpringBootApplication and declaring your packages

    @SpringBootApplication(
        scanBasePackages = {"package.name"}
    )

### Constructor injection

Every time you define a new component in spring using the annotation it needs to know how are you implementing it and also what instance youre going to return. First you have to create a class interface to define the most important functions for that class, then you instantiate that class and create the proper implementation, you can have multiple implementations of a class. At last you use the proper annotations to tell spring which class to use in each case, for this you use the Autowired, Qualified and Primary annotations.

### Setter injection

The idea is to create a setter for your variable and then use the Autowired annotation to indicate that function is the setter for that class property.

    private Coach mycoach;

    @Autowired
    public void setCoach(Coach theCoach){//it coud have any name
        myCoach = theCoach
    }

### Lazy initialization

When spring is initialized it automatically creates the beans for all the declared classes, with lazy initilization this beans will be created just when theyre needed, this can be though as an optimization but most of the times it is not needed and will cause the application not work as intended.

### Bean lifecycle


## Annotations

### @RestController

Defines a rest controller file, make sure this tag is included at the top of the class declaration

### @GetMapping

Defines a get endpoint

### @Autowired

Tells spring to inject a dependency, if you have only one constructor then this tag is optional

### @Component

Marks the class as a spring bean so it is available for dependency injection.

### @Qualifier

Helps spring identify which controller to use and which class instance to return

    @Autowired
    public DemoController(@Qualifier("className")Coach theCoach){
        //returns the proper class instance
    }

### @Primary

Tells spring wich implementation to use