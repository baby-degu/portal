# Master a New Codebase in Record Time

You’re on a new team. The codebase for your project is HUGE. You have no idea where to start. You don’t want to look dumb, and all your teammates are busy with their own work. How do you, regardless of your experience level, get productive in a new-to-you codebase — fast?

We’ve all been there. Diving into new, existing projects with unknown codebases is a regular occurrence. Whether it’s because you’ve started a new job or just switched teams within the same company, the challenge is the same: learn the code, start working, and don’t break stuff.

How do you do it?

The most obvious thing you need to learn when joining a new project is the code. You need to figure out what classes there are, what the classes do, where the core logic is for different features and functions, etc.

Unfortunately, the code is not [_all_ you need to learn](https://simpleprogrammer.com/2017/06/21/9-common-problems-new-programmers-face/). As you gain more experience in development, you learn that there’s _a lot_ more to your job than just the software, and there’s a lot more to _software_ than just the code.

Code captures implicit assumptions and encodes knowledge about the domain the product is meant to serve, as well as how it will be run and how it was written. Your job is to learn and understand all that.

You need to build up a mental model of the product. To do that you need to understand a lot of things about it, some of which aren’t immediately obvious.

The best way to learn all of the information you need for your mental model is to learn it from one or more developers who have a lot of experience in the codebase. However, that’s not always possible, whether it’s because there aren’t any or because they’re too busy.

So, here are some ways to learn a codebase on your own.

## What Is the Product’s Context?

First and foremost, you need to understand the context of the product or service.

Context is where the software sits in relation to users and other products or services. It gives you the lay of the land. Knowing the context allows you to get your bearings with regard to your project and all the external services it uses.

Some services are strictly API services and aren’t used by end-users at all. Others, like mobile apps, are used directly by end-users. In either case, oftentimes the products use third-party services to provide some of their functionality.

To determine a project’s context on your own, you’ll need to look at what libraries the product uses — its dependencies. How you find what the dependencies are will depend on the language as well as the build tools. Because each language and build tool has their own way of handling the dependencies, it’s important to understand the toolchain that the project uses for building the product.

To understand the toolchain, you need to figure out how to build and run the product. Hopefully, there’s some documentation that describes the build process.

Some projects, like Ruby on Rails (RoR), are convention-based, which means that, effectively, all RoR projects conform to the same design, file layout, and basic toolchain. The result is that getting a convention-based project running is a bit easier, even if you don’t have prior experience with one.

If the project is one that’s more configuration-based, like many Java projects, the task gets a little trickier. Many Java projects use Apache’s Maven, but it could use Ant if it’s old or perhaps Gradle if it’s newer. You’ll need to dig around to find out.

Every build tool I know of uses specific files to store their tasks and other specific files to store the project’s dependencies. So, those are my first stop.

I like to look around at the top-level directory for any files that I know are build files, like package.json for projects that use npm or build.xml for Ant-based projects. If I don’t see any of those, I look for files that I don’t know or recognize. I will then google those files to see what comes up. Nine times out of ten, that leads me to the build tool.

Once you figure out what build tool is used, you can often use that tool’s command-line options to see all the available tasks. Googling for the information, or using the [man page](https://en.wikipedia.org/wiki/Man_page), is usually the easiest way to find what option will return the available tasks. For example, Rake will show you all the available tasks with the -T option.

Ideally, the tasks are named something reasonable to indicate which one is best suited to building and running the code. If not, running each one to see what happens is your next job.

Now, assuming you’ve been able to build and run the code, you should play around with it (if it’s a product that you can directly interact with). Try using it like a child who just wants to figure out what it does and how it works. Or put yourself in the mind of the user and see how they have to navigate the product to perform their various tasks. These actions give you a general idea of what the product does and how people use it.

I also like to run test suites at this time too, if there are any. First, it gives me the warm and fuzzies when everything passes. Second, if tests fail, it presents me with an opportunity to dive into the code and tests to learn more. Third, running the suite can give me a general idea of how much of the code is tested and in what way, i.e., unit tests, feature tests, integration tests, and/or acceptance tests.

After playing around with the running product, it’s time to figure out the rest of the context.

My primary method here is to look at the dependencies of the code. These are the libraries that are used to build and run the project.

I like to look through the dependency file and make sure I understand what each one does. This act of looking through the dependency list helps in identifying third-party services or products that the code utilizes, but also can identify some possible features or functions of the product.

In a recent job, I took over development of two Rails apps. They were both about 80 percent complete, and the previous developers had left the company, so I had to figure out most stuff on my own. Rails apps use a Gemfile to capture their dependencies, so I knew I needed to go through that to figure out what things the apps were using.

Running through the Gemfiles, I looked up each gem that I wasn’t familiar with, and I found a few interesting things. Each app was using a specific gem (Devise) to handle authentication, both were using PostgreSQL instead of MySQL, one app was using Stripe, and that app also provided some OAuth capability. Furthermore, each app had a gem for AWS which implied that they utilized AWS for some part of their functionality. As it turned out, both were deployed and hosted on AWS’ OpsWorks platform.

The upshot of doing this process on two new projects was that I understood more about [what functionality each app](http://www.amazon.com/exec/obidos/ASIN/0134494164/makithecompsi-20) provided, as well as a few of the external systems they communicated with.

## What Is the Product’s Architecture and Design?

![](https://miro.medium.com/max/2560/0*l9jGturyxZp8Yas6.png)

The terms architecture and design are often used interchangeably. Although they are related, these are actually two different concepts. Architecture is the high-level view of the system, while design is the lower, class-level view.

The architecture of a project consists of multiple “views” of the project and captures the non-functional requirements or quality attributes, like security, performance, modifiability, testability, maintainability, modularity, resilience, availability, and even time-to-market.

In contrast, design is where you see design patterns start to emerge. This level is where you figure out how the different classes connect and communicate with each other.

Let’s take a closer look at how you can use these two concepts to help you master your new codebase.

## Uncovering Architecture

Architecture gives you a good idea of the general layout of the product at a larger scale. You can piece together the architecture by looking at the compile-time (module) view, runtime (components and connectors) view, and deployment (allocation) view. Each of these views capture different qualities of the system, and together they form a more complete picture of the product.

The compile-time view is what most developers think of as architecture. It’s similar to the [unified modeling language](https://en.wikipedia.org/wiki/Unified_Modeling_Language) (UML) class diagram and shows how the code is meant to be organized while writing or reading it. It groups responsibilities into modules; each module consists of multiple classes.

The runtime view shows how parts of the system can be understood while running. It groups runtime interaction into components and details how those components interact with connectors. These components _can_ show how the product uses processes and threads, but it’s not limited to that.

The deployment view shows how the product is physically located on servers (or client devices) and how those servers are related. It details the physical environment that the software will run in.

Architecture can be difficult to uncover by yourself just by looking at the code. If you’re lucky enough to be working on a product that uses convention over configuration, like Rails, a lot of the work is done for you, since they conform to the same basic architecture.

If you’re working on a configuration-based project, you’re going to have a harder time, because these projects have no constraints on their architecture and are therefore unique. They are completely influenced by the developers who originally developed it, and the reasoning behind architecture decisions are rarely documented.

In either case, convention or configuration, large projects grow over long periods of time and involve different developers, who may or may not (more likely not) capture the architectural decisions and changes of the project with good documentation.

Unfortunately, none of the architectural views are easy to discover in an existing system. The reason the compile-time view of the code is difficult to discover is that it is so high-level that the low-level relationships complicate the process. This view abstracts away the classes of a system and shows how whole parts or modules work together. Finding these modules is difficult to do because while classes may be somewhat organized within them, there is rarely control over maintaining those boundaries at the module-level.

As a project grows and developers come and go, not all of them may know what the architecture is supposed to be and may, therefore, violate it without realizing it. So the original architecture may disappear as a project grows.

You can use class organization within packages and namespaces to give you an initial idea of how the project is architected. Using this technique, in conjunction with UML class diagrams that I discuss later, you can get a better idea of what modules exist in the project.

The runtime view is slightly easier to discover, but is usually less useful. You can uncover it through a combination of operating system tools like \`ps\` and debuggers that can show threads. Seeing what classes, or groups of classes, run on specific threads can help you to piece together what parts of the project are communicating with each other at runtime. In most projects that I’ve worked on, the runtime view has only been helpful when there is deliberate multithreading being done.

You can discover the deployment view of the product by looking at deployment scripts, like Capistrano scripts for Rails. If you know what system the service is deployed onto, like AWS’ OpsWorks, you can also piece together what applications run on what servers from the services’ dashboards.

## Discovering Design

![](https://miro.medium.com/max/2000/0*JVQiKl5K7TtHiSYq.png)

[Discovering the design of a product](http://www.amazon.com/exec/obidos/ASIN/0128122757/makithecompsi-20) is slightly easier because classes are built and related through the design. There are tools that can help you reveal the design patterns the project uses, and how the classes relate and communicate with each other.

The easiest method is to use a tool to generate a UML class diagram for all, or part of, the project. If you’re not familiar with class diagrams, they show classes (naturally, right?) and how those classes are related, e.g., inheritance, composition. IDEs like Eclipse, IntelliJ, or Visual Studio can generate UML class diagrams or support plugins that can. There are also standalone tools. You can find a large list [here](https://modeling-languages.com/uml-tools).

You might be able to use generated class diagrams in conjunction with any compile-time architectural modules you’ve uncovered to validate what you’ve found. You can generate class diagrams around suspected module boundaries to see if your mental model holds true.

The UML sequence diagram is the second most-useful diagram. It shows how classes communicate and in what order, which is helpful for determining the flow of data through the system.

Again, many IDEs support building sequence diagrams directly or through plugins. However, all the ones I’ve used have to run the code and profile it in order to generate the diagram, which limits the usefulness to the code paths that you can explicitly, and easily, run yourself.

If you’re using a statically-typed language like Java or C#, IDEs like Eclipse or Visual Studio will show you what calls a specific method. Using this feature repeatedly will help you understand what classes communicate with each other and how. You can then build your own sequence diagrams for the parts of code you’re interested in.

At a past job, I was on a team using Adobe Flex (AS3), which is a statically-typed language similar to Java. Because I was new and the project was large, I wanted to get some visual idea of what classes were related and how they were laid out. I found that the [Visual Paradigm](https://www.visual-paradigm.com/) product was one of the only ones that could handle Flex. Using that product, I generated diagrams for sections of the project because it was too large to run on the entire thing.

The resulting diagrams were helpful in quickly seeing what classes were likely to be important by how many relationships they had. Unfortunately, the diagrams did get less useful as I tried to include more of the overall project. The sheer number of relations started to make it difficult to uncover patterns.

That said, I’ve found that building up sequence diagrams for sections of code has been _very_ useful. Auto-generated sequence diagrams haven’t helped as much as creating them by hand, though. Often, I’ll start with a section of code that is communicating with other systems and build up the sequence of calls between my project and those external systems.

I’ve also done built sequence diagrams for parts of a project that use threading, other processes, or workers, and it has proven to be very valuable in understanding what’s supposed to happen.

## What Is the Physical Layout?

A third component of learning a codebase is learning _where_ things are physically located in the directory structure.

Naturally, some projects that are convention based, like RoR, make figuring out locations a bit easier since they all follow a similar layout. That’s not to say that you have nothing to do, though. You need to look at what’s in the \`lib\` directory, where partial views are stored, and what directories are under the \`app\` directory besides the expected \`assets\`, \`models\`, \`controllers\`, and \`views\`.

For languages like Java that have strict requirements for the physical location of a file and its associated package, familiarizing yourself with that layout will help you discover the packages available.

For languages like Ruby that don’t have the package-to-file location requirement, you can explore the namespaces that are used. Almost all of the Ruby projects I’ve worked in have still used a Java-like namespace-to-file location convention.

Exploring the packages (or namespaces) will hopefully show you that they’re grouped in reasonable ways, which may help you to uncover architecture-level modules. How classes are grouped in packages, and what packages are grouped together, can indicate that they’re meant to be in the same module.

## Start With a Bug or Small Feature

![](https://miro.medium.com/max/2560/0*yi7U2F3DTrSw3Y1n.png)

Getting your hands dirty in the code and seeing how your modifications change the end product goes a long way to solidifying your understanding of the code. Starting with a low-priority, low-severity bug or feature can help ease you into making changes.

To get my bearings in a new project, I have a few strategies, depending on the type of project:

1) If the defect has a stack trace attached, I’ll start with the class that’s highest up the stack that’s _in the project_ (which may not be the top, if the error occurs in a library).

2) If the project has a user interface (UI) and the bug or feature I’m working on has a UI component, I start by searching for the literal strings that are used in the UI I want to change. I can use that as an entry point for where the interaction starts and follow it down to find where the business logic is.

3) If the project is convention-based, I will start by looking for the view, controller, or model (or whatever design aspect probably impacts the defect or features the most) that makes the most sense. What makes sense is simply what you can guess about what classes may be involved.

4) If the project is a web app or service, I will work to find what URL path might be involved, and find what class handles requests to that path.

5) If the defect or feature doesn’t meet any of these other criteria, I start looking for code that may be _close_ to what I want to change, which takes some educated (or uneducated) guessing. Looking at tests can also help find the code you want.

Using these techniques, I can almost always find the section of code I want to modify. Then I can start playing with little changes that I can see, either in the UI, the tests, in the logs, or simply printed to standard out.

Combined with tests, if they exist, these small experiments can help you quickly home in on the right section of the project. The one thing to keep in mind while doing this process is to _test your assumptions._

Making assumptions about how or why something is done a certain way, without questioning and testing those assumptions, is a good way to break something. I have to constantly remind myself that certain design choices may have a very good reason for being made, even if I don’t like them or don’t see the benefit. I have to keep my newness to the codebase in the front of my mind while I dig so that I minimize the risk of breaking something.

Make sure to document anything you find interesting while working through the project. If you prove an assumption false, document it. You probably won’t be the last new developer to make that assumption. By documenting your find, you’ll help speed up the process for the next developer.

## Wrapping It Up

Dropping into a new codebase is never easy, but it doesn’t have to be overwhelming. Using simple techniques, a set of tools, and some experimenting, you can quickly [build up your knowledge](https://simpleprogrammer.com/2017/06/15/learn-new-programming-language-fast/) and understanding of any project.

When you are faced with a new codebase, remember to follow these steps:

1) Discover the toolchain and processes used to build the project by examining the build scripts.

2) If possible, play with the product itself once you’ve built it to see what it does.

3) Look at the libraries that the project depends on to determine what services and systems the product uses and depends on.

4) Use UML diagram generating tools to create class and sequence diagrams for all, or part, of your project.

5) Create sequence diagrams by hand as you read through the code.

6) Investigate how the product is deployed on hardware by looking at deployment scripts (like Capistrano) or documentation.

7) Look through how the project is laid out in the filesystem as well as how classes are grouped in packages or namespaces to help uncover the architecture.

8) Use a small feature or low-priority bug as a way to get your feet wet in the code and start understanding what the code really does. Document anything interesting you find that might help future developers understand the project faster.

Like every skill, this process takes practice, and not every technique will work for every developer or project. Pay attention to what works for you for certain projects and double down on those to get really good at them. These are some of the meta-skills that experienced developers organically develop, but by learning and refining them with purpose, you can speed up the entire process.
