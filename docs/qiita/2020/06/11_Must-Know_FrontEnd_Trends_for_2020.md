11 Must-Know FrontEnd Trends for 2020
=====================================

Or- how to sound smart in frontEnd lunch conversations!
-------------------------------------------------------

[![Jonathan Saring](https://miro.medium.com/fit/c/96/96/1*pLN3R5sML3dcjAvUZDWtOA.png)](/@JonathanSaring?source=post_page-----cea8a629b08----------------------)

[Jonathan Saring](/@JonathanSaring?source=post_page-----cea8a629b08----------------------)

[Follow](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fblog.bitsrc.io%2F11-must-know-frontend-trends-for-2020-cea8a629b08&source=-c9a6ef212193-------------------------follow_byline-)

[Dec 26, 2019](/11-must-know-frontend-trends-for-2020-cea8a629b08?source=post_page-----cea8a629b08----------------------) · 11 min read

![](https://miro.medium.com/max/60/1*4o8a1yvlifG4zGw9AvSSrQ.png?q=20)

![](https://miro.medium.com/max/2400/1*4o8a1yvlifG4zGw9AvSSrQ.png)

Sounding smart at your team's lunch talks is obviously a great reason to stay updated with the latest frontend trends. It might even help you become a better developer, build better technology and better products. Maybe.

So, please allow me to make this honorable quest easier by pointing you in a few interesting directions. I will not explain every concept A-Z, but will introduce the concept, how it’s useful and direct to further resources.

For example, we’ll shortly cover an introduction to Micro Fontends, Atmoic Design, Web components TS take-over, ESM CDN and even Design tokens. Feel free to scroll through and mark the topics you’d like to learn more about. For any questions or more suggestions, just drop a comment below. Enjoy!

* * *

1\. Micro frontends
===================

Micro Frontends are the buzziest frontend topic for lunch conversations.

Ironically, while frontend development enjoys the modular advantages of components, it is still largely more monolithic than backend microservices.

[

![](https://miro.medium.com/max/60/1*SdrrxeKfuAyDEAKATFNUNg.png?q=20)

![](https://miro.medium.com/max/1180/1*SdrrxeKfuAyDEAKATFNUNg.png)







](https://micro-frontends.org/)

Micro frontends bring the promise of splitting your frontend architecture into different frontends for different teams working on different parts of your app. Each team can gain autonomy over the end-to-end lifecycle of their micro frontend, which can be developed, versioned, tested, built, rendered, updated and deployed independently (using [tools like **Bit**](https://bit.dev) for example).

Instead of explaining the whole concept here, [**read this great post**](https://martinfowler.com/articles/micro-frontends.html#InANutshell) by @thecamjackson published at the @martinfowler blog. It’s really good and should cover everything you need to start digging into this concept.

[

![](https://miro.medium.com/max/60/1*fxACkCp1y_fDwnF-N7bVMQ.png?q=20)

![](https://miro.medium.com/max/1702/1*fxACkCp1y_fDwnF-N7bVMQ.png)







](https://martinfowler.com/articles/micro-frontends.html)

However, there are still certain shortages in today’s ecosystem. Mostly, people are worried by issues like the deployments of separate frontends, bundling, environment differences etc. [**Bit**](https://bit.dev) already lets you isolate, version, build, test and update individual frontends/components. For now, this is mainly useful when working with multiple applications (though It’s already commonly used for gradually refactoring parts of existing apps via components).

When **Bit** will introduce deployments in 2020, independent teams will get the power to develop, compose, version, deploy and update standalone frontends. It will let you compose UI apps together and let teams create simple decoupled codebases with independent continuous deployments and incremental upgrades. The composition of these frontends will end up creating your application. Here’s what an app composed using Bit feels like.

[

![](https://miro.medium.com/max/60/1*pHH9k186BYju30BC9OxXTg.png?q=20)

![](https://miro.medium.com/max/2400/1*pHH9k186BYju30BC9OxXTg.png)







](https://bit.dev)

Composed UI app with Bit

Learn more:

[

Micro Frontends
---------------

### Cam Jackson Cam Jackson is a full-stack web developer and consultant at ThoughtWorks, with a particular interest in how…

#### martinfowler.com



](https://martinfowler.com/articles/micro-frontends.html)

2\. Atomic Design
=================

[

![](https://miro.medium.com/max/60/1*q5IW7xZF8AYFj8NZEVi17Q.jpeg?q=20)

![](https://miro.medium.com/max/6528/1*q5IW7xZF8AYFj8NZEVi17Q.jpeg)







](https://blog.bitsrc.io/atomic-design-and-ui-components-theory-to-practice-f200db337c24?)

Read: Atomic Design Explained in 30 seconds!

[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) is yet another super interesting topic for lunch talks, which I like to think about more of as a philosophy than a pure methodology.

Simply put, the theory introduced by [Brad Frost](https://medium.com/u/52f676b44c62?source=post_page-----cea8a629b08----------------------) compares the composition of web applications to the natural composition of Atoms, Molecules, Organisms and so on- ending with concrete web pages. Atoms compose molecules (e.g. text-input + button + label atoms = search molecule). Molecules compose an organism. Organisms live in a layout template, which can be concretized into a page delivered to your users.

Here’s a [_detailed 30-seconds explanation with visual examples_](/atomic-design-and-ui-components-theory-to-practice-f200db337c24)_._ It includes very impressive drawings I made with great artistic talent, which you can copy-paste to your office board 😆

The advantages of Atomic components go beyond building modular UI applications through modular and reusable components. This paradigm forces you to think in composition so you better understand the role and API of every component, their hierarchy, and how to abstract the building process of your application in an effective and efficient way. Take a look.

[

Atomic Design
-------------

### Hey there! I wrote a book called Atomic Design that dives into this topic in more detail, which you can buy as an…

#### bradfrost.com



](https://bradfrost.com/blog/post/atomic-web-design/)

[

Atomic Design: Theory to Practice
---------------------------------

### Bringing Atomic Design into your UI component development workflow.

#### blog.bitsrc.io



](/atomic-design-and-ui-components-theory-to-practice-f200db337c24)

3\. Encapsulated Styling and Shadow Dom
=======================================

[

![](https://miro.medium.com/max/60/1*TSOpITlAqbyYC_UYYW7zMg.png?q=20)

![](https://miro.medium.com/max/2276/1*TSOpITlAqbyYC_UYYW7zMg.png)







](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

Source: developer.mozzila.org

An important aspect of components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page so that different parts do not clash, and the code can be kept nice and clean. [The Shadow DOM API](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) is a key part of this, providing a way to attach a hidden separated DOM to an element.

_Shadow_ DOM is actually used by browsers for a long time now. You [can think of the shadow DOM](https://bitsofco.de/what-is-the-shadow-dom/) as a “DOM within a DOM”. It is its own isolated DOM tree with its own elements and styles, completely isolated from the original DOM.

It allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM. The [main implication](https://dev.to/maxart2501/css-for-an-encapsulated-web-7fo) of this is that we have _no need for a namespace_ for our classes, as there’s no risk of name clashing or style spilling. There also additional advantages. It is often referred to as the long-promised solution to a true encapsulation of styles for web components. Learn more:

[

Using shadow DOM
----------------

### An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior…

#### developer.mozilla.org



](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

4\. The TypeScript take over
============================

So lately every conversation [makes it sound like TS is taking over](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164) frontend development. It is reported that [**80% of developers admit they would like to use or learn TypeScript in their next project**](https://2018.stateofjs.com/javascript-flavors/typescript/).

Although it has it’s shortcomings, TS code is easier to understand, faster to implement, it produces less bugs and requires less boilerplate. Want to refactor your React app to work with TS? Go for it. Want to start gradually? Use tools like [Bit](https://github.com/teambit/bit) to gradually refactor components in your app to TS and use the [React-Typescript compiler](https://bit.dev/bit/envs/compilers/react-typescript) to build them independently from your app. This way to can gradually upgrade your code one component at a time.

learn more:

[

Why TypeScript is the best way to write Front-end in 2019
---------------------------------------------------------

### And why you should convince everybody to use it.

#### medium.com



](https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164)

[

TypeScript at Lyft
------------------

### How We Chose TypeScript over FlowType

#### eng.lyft.com



](https://eng.lyft.com/typescript-at-lyft-64f0702346ea)

[

TypeScript at Slack
-------------------

### Or, How I Learned to Stop Worrying & Trust the Compiler

#### slack.engineering



](https://slack.engineering/typescript-at-slack-a81307fa288d)

5\. Web components
==================

![](https://miro.medium.com/max/60/1*-zkpV1IfOv-1dux6ZqWBCQ.png?q=20)

![](https://miro.medium.com/max/3200/1*-zkpV1IfOv-1dux6ZqWBCQ.png)

So basically, this is the future. Why? because these pure web components are framework agnostic and can work without a framework or with any framework- spelling **standardization**. Because they are free from JS fatigue and are supported by modern browsers. Because their bundle size and consumption will be optimal, and VDOM rendering is mind-blowing.

These components provide Custom Element, a Javascript API that allows you to define a new kind of html tag, HTML templates to specify layouts, and of course the Shadow DOM which is component-specific by nature.

Prominent tools to know in this space are [**Lit-html**](https://github.com/Polymer/lit-html) (and [Lit-element](https://lit-element.polymer-project.org/)), [**StencilJS**](https://github.com/ionic-team/stencil), [**SvelteJS**](https://github.com/sveltejs/svelte) and of course [**Bit**](https://bit.dev/), for reusable modular components which can be directly shared, consumed and developed anywhere.

When thinking of the future of our UI development, and of how principles of modularity, reusability, encapsulation, and standardization should look like in the era of components, web components are the answer. Learn more:

*   [7 Tools for Developing Web Components in 2019](/7-tools-for-developing-web-components-in-2019-1d5b7360654d)
*   [9 Web Components UI Libraries You Should Know in 2019](/9-web-component-ui-libraries-you-should-know-in-2019-9d4476c3f103)
*   [Prototyping with Web Components: Build an RSS Reader](/prototyping-with-web-components-build-an-rss-reader-5bb753508d48)

6\. From component libraries to dynamic collections
===================================================

[

![](https://miro.medium.com/max/60/1*VmerRS_ufSltgSGYiNHinQ.png?q=20)

![](https://miro.medium.com/max/1838/1*VmerRS_ufSltgSGYiNHinQ.png)







](https://bit.dev)

Organize components in dynamic collections; reuse, compose, stay independent

The emergence of [component-driven development](/a-guide-to-component-driven-development-cdd-69dbd3d07bf0?source=collection_home---4------13-----------------------) gave birth to a verity of tools. One prominent tool is [Bit](https://github.com/teambit/bit), alongside it’s hosting platform [Bit.dev](https://bit.dev).

Instead of working hard to build a cumbersome and highly-coupled component-library, use Bit to continuously isolate and export existing components into a dynamically reusable shared-collection.

Using [Bit (GitHub)](https://github.com/teambit/bit) you can independently isolate, version, build, test and update UI components. It streamlines the process of isolating a component in an existing app, harvesting it to a remote collection, and using it anywhere. Every component can build, test, and render outside of any project. You can update a single component (and it’s dependants) and not the whole app.

[

![](https://miro.medium.com/freeze/max/60/1*c6475ieLqqEzb4htt3T94Q.gif?q=20)

![](https://miro.medium.com/max/1600/1*c6475ieLqqEzb4htt3T94Q.gif)







](https://bit.dev)

In the bit.dev platform (or on your own server) your components can be remotely hosted and organized for different teams, so that every team can control the development of their own components. Every team can share and reuse components but keep their independence and control.

The platform also provides the all-in-one ecosystem for a shared components out-of-the-box: It auto-documents UI components, renders components in an interactive playground, and even provides a built-in registry to install components using npm/yarn. In addition, you can `bit import` components for modifications in any repository.

[

![](https://miro.medium.com/freeze/max/60/1*RZP_jNEEilVtmjGH4O4UHQ.gif?q=20)

![](https://miro.medium.com/max/1600/1*RZP_jNEEilVtmjGH4O4UHQ.gif)







](https://bit.dev)

In the short run, this revolutionizes the process of sharing and composing components in a similar way to how Spotify/iTunes changed the process of previously sharing Music through static CD Music Albums. It’s a dynamic and modular solution that lets everyone share and use components together.

In the long run, Bit helps pave the way to micro-frontends. Why? Because it already lets you independently version, test, build and update parts of your UI application. In 2020 it will introduce independent deployments, which will finally allow different teams to own parts of your apps end-to-end: keep decoupled and simple codebases, let teams cautiously and continuously build and deploy incremental UI upgrades, and compose frontends together.

[

Share reusable code components as a team · Bit
----------------------------------------------

### Easily share reusable components between projects and applications to build faster as a team. Collaborate to develop…

#### bit.dev



](https://bit.dev)

[

UI Component design systems · Bit
---------------------------------

### Build your UI component design system. Discover thousands of design systems built with components in React, Vue and…

#### bit.dev



](https://bit.dev/collections)

[

teambit/bit
-----------

### Component platform \* Discover components \* Video demo \* Docs \* Blog \* Gitter \* Discourse \* Twitter Bit makes it easy to…

#### github.com



](https://github.com/teambit/bit)

7\. State management: Bye Bye Redux? (Not….)
============================================

![](https://miro.medium.com/max/60/1*6oeKSYnPG2pbg8vdaiteYg.png?q=20)

![](https://miro.medium.com/max/2290/1*6oeKSYnPG2pbg8vdaiteYg.png)

[Redux is a hard beast to kill](/state-of-react-state-management-in-2019-779647206bbc). While the pains of globally managing states in your app are becoming more clear as frontend becomes more modular, the sheer usefulness of Redux makes it a go-to solution for many teams.

So will we say bye-bye to Redux in 2020? Probably not entirely 😄

However, the uprising of new features within frameworks that handle states (React hooks, Context-API etc) are painting the way to a future without a global store. Tools like [Mobx](https://github.com/mobxjs/mobx), which only a year ago were rather scarcely adopted, are becoming more popular every day thanks to their component-oriented and scalable nature. You can explore [more alternatives here](/state-of-react-state-management-in-2019-779647206bbc).

_Read_: [_Making Sense of React Hooks_](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889) — by [Dan Abramov](https://medium.com/u/a3a8af6addc1?source=post_page-----cea8a629b08----------------------)

8\. ESM CDN
===========

![](https://miro.medium.com/max/60/1*dSWVWelaiGClQXD6nGhBuA.jpeg?q=20)

![](https://miro.medium.com/max/4000/1*dSWVWelaiGClQXD6nGhBuA.jpeg)

ES Modules is the standard for working with modules in the browser, standardized by ECMAScript. Using ES modules you can easily encapsulate functionalities into modules which can be consumed via CDN etc. With the release of Firefox 60, all [major browsers will support](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) ES modules, and the Node mteam is working on adding ES module support to [Node.js](https://nodejs.org/en/). Also, [ES module integration for WebAssembly](https://www.youtube.com/watch?v=qR_b5gajwug) is coming in the next few years. Just imagine modular [Bit](https://github.com/teambit/bit) UI components composed in your app via CDN…

*   [ES modules: A cartoon deep-dive — Mozilla Hacks — the Web developer blog](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
*   [denoland/deno](https://github.com/denoland/deno)

9\. Progressive web apps. Still growing.
========================================

[Progressive web applications](https://developers.google.com/web/progressive-web-apps) take advantage of the latest technologies to [combine the best of web and mobile apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/). Think of it as a website built using web technologies but that acts and feels like an app. Recent advancements in the browser and in the availability of service workers and in the Cache and Push APIs have enabled web developers to allow users to install web apps to their home screen, receive push notifications and even work offline.

Since PWAs provide an intimate user experience and because all network requests can be intercepted through service workers, it is imperative that the app be hosted over HTTPS to prevent man-in-the-middle attacks, which also spells better security. Here’s a great talk by Facebook developer [Omer Goldberg](https://medium.com/u/49b16006351c?source=post_page-----cea8a629b08----------------------) outlining best practices for PWAs.

10\. Designer-developer integrations
====================================

[

![](https://miro.medium.com/freeze/max/60/1*55RGwH_5D3mIZoVhSCXWOA.gif?q=20)

![](https://miro.medium.com/max/1600/1*55RGwH_5D3mIZoVhSCXWOA.gif)







](https://bit.dev)

With the uprise of [component-driven design systems](https://dev.to/jonisar/ui-component-design-system-a-developer-s-guide-19fg) to enable a [consistent UI across products and teams](/building-a-consistent-ui-design-system-4481fb37470f), [new tools have emerged](/7-tools-for-building-your-design-system-in-2020-452d9c9b3b8e) to bridge the gap between designers and developers. [This is no simple task however](https://codeburst.io/ui-design-system-and-component-library-where-things-break-d9c55dc6e386); While code itself is really the only source of truth (this is what your user really gets), most tools try to bridge the gap from the designer’s end. In this category you can find Framer, Figma, Invision DSM and more.

From the developer’s end you can see how platforms like [Bit.dev](https://bit.dev), which host your next-gen component library and helps create adoption for shared components. The platform provides rendered visualization for your actual source-code so that designers can collaborate wit developers and create discussions over the source-code itself, in a visual way.

Another promising idea to take note of is [design-tokens](https://css-tricks.com/what-are-design-tokens/). Placing tokens in your code through which designers can really control simple styling aspects (e.g. colors) directly through external collaboration tools. Integrated with platforms like Bit.dev, this can create a tighter workflow than ever before.

[

UI Component Design System: A Developer's Guide
-----------------------------------------------

### Component design systems let teams collaborate to introduce a consistent user visual and functional experience across…

#### dev.to



](https://dev.to/jonisar/ui-component-design-system-a-developer-s-guide-19fg)

[

UI Design System and Component Library: Where Things Break
----------------------------------------------------------

### Is the workflow between designers and developers broken for UI components? And will it be better in 2020?

#### codeburst.io



](https://codeburst.io/ui-design-system-and-component-library-where-things-break-d9c55dc6e386)

[

7 Tools for Building Your Design System in 2020
-----------------------------------------------

### Building a component design system? Seeking better designer-developer collaboration? Check out these awesome tools ⭐️

#### blog.bitsrc.io



](/7-tools-for-building-your-design-system-in-2020-452d9c9b3b8e)

11\. Web assembly — into the future?
====================================

[Web assembly](https://webassembly.org/) brings language diversity into web development to cover gaps created by JavaScript. It is defined as a “a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications”.

In his post, [Eric Elliott](https://medium.com/u/c359511de780?source=post_page-----cea8a629b08----------------------) [elegantly outlines the concept’s benefits](https://medium.com/javascript-scene/what-is-webassembly-the-dawn-of-a-new-era-61256ec5a8f6):

*   **An improvement to JavaScript:** Implement your performance critical stuff in wasm and import it like a standard JavaScript module.
*   **A new language:** WebAssembly code defines an AST (Abstract Syntax Tree) represented in a **binary format**. You can **author and debug in a text format** so it’s readable.
*   **A browser improvement:** **Browsers will understand the binary format**, which means we’ll be able to compile binary bundles that compress smaller than the text JavaScript we use today. Smaller payloads mean faster delivery. Depending on **compile-time optimization opportunities**, WebAssembly bundles may run faster than JavaScript, too!
*   **A Compile Target:** A way for other languages to get first-class binary support across the entire web platform stack

To learn more about this concept, why it’s useful, where it will be used and why it’s not here yet, I suggest [this great post](https://medium.com/javascript-scene/why-we-need-webassembly-an-interview-with-brendan-eich-7fb2a60b0723) and [this great video](https://www.youtube.com/watch?v=aZqhRICne_M&feature=emb_title).

[

Why We Need WebAssembly: An Interview with Brendan Eich
-------------------------------------------------------

### Brendan Eich & Eric Elliott Discuss WebAssembly Details

#### medium.com

](https://medium.com/javascript-scene/why-we-need-webassembly-an-interview-with-brendan-eich-7fb2a60b0723)
