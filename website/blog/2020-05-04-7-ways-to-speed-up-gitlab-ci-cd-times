---
title: 7 ways to speed up your GitLab CI/CD times
author: Wes Cossick
authorURL: http://twitter.com/ericnakagawa
---

As with any continuous integration and deployment platform, speed is crucial for developer efficiency. Recently we took our CI jobs and refactored them to ensure they were as fast as possible. Here’s how you can do the same:

1. Host your own GitLab runner

GitLab.com (GitLab’s hosted SaaS offering) provides shared runners for repositories to use. While this is fantastic for getting off the ground quickly, we found the single biggest speed improvement came from hosting our own runners. The bottleneck for us wasn’t actually the CPU or RAM; it was the network. On a private cloud server, the network is dramatically faster. We consistently noticed about double the speed on both DigitalOcean and Google Cloud Platform.

Network speed is especially important for building and deploying. Building often requires downloading libraries, dependencies, Docker images, etc. and deploying requires uploading assets elsewhere. When the network becomes congested on GitLab’s shared runners, these stages can feel like molasses.

The great news is it’s actually quite easy to set up your own runner! You can spin up servers from DigitalOcean, AWS, or GCP in next-to-no-time, and install GitLab’s runner on Linux with just a few commands. Just follow their instructions.

2. Pre-install dependencies

This is a big one. If you’re installing a dependency every time you run a CI job, you’re wasting time. Instead, you should be using Docker images for your CI jobs that already have all the necessary dependencies installed.

If you can’t find an image that has every dependency you need, you should pre-build it and store it in a container registry that GitLab’s runner has access to (we like to use GitLab’s built-in container registry).

3. Use tiny Linux distros for your CI images

Whenever possible, use a tiny Linux distribution for images that run your CI jobs. Alpine Linux is probably the most popular option, but there are others.

Why? Chances are you don’t need a bloated distribution like Ubuntu to run a few tests or execute some build commands. So don’t waste time downloading an image that could be 30–40x as large.

4. Use the overlay2 storage driver

The single easiest way to speed up your CI is to use the overlay2 Docker storage driver, instead of the default vfs driver (learn more). You can do that by adding the following lines to the top of your .gitlab-ci.ymlfile.

variables:
  DOCKER_DRIVER: overlay2
Make sure to use overlay2 and not just overlay , as we found it shaves off a few extra seconds versus the latter.

Alternatively, if you are hosting your own runner and have access to the config.toml file, you can enable this driver for every project automatically by adding the following line to the [[runners]] section (learn more):

environment = ["DOCKER_DRIVER=overlay2"]
5. Use a cached Docker image when building

Docker is smart — it uses a build cache to only build layers that have changed, thereby drastically speeding up image build times. But if Docker can’t find a previous build (which would happen if you’re using a clean slate each time you run a CI job), you’ll always end up building images from scratch.

To rectify this, simply let Docker know where it can find a previously built image with the --cache-from option (added in Docker v1.13). Learn more about docker build options here.

6. Thoughtfully organize your Dockerfiles

Speaking of Docker’s build cache, you should familiarize yourself with how it works. In a nutshell, each instruction is a layer, and each layer is only rebuilt if it has changed or if a layer before it has changed. What constitutes a “change” differs based on the type of instruction it is, but you can learn more about that here.

What matters, though, is that you don’t want to unnecessarily run instructions that haven’t really changed. For instance, if you have a container that installs NGINX with an instruction like:

RUN apt-get -y update && \
    apt-get -y install nginx
You probably don’t want to place an instruction that copies over source files before that instruction (like the one shown below).

COPY source/ /usr/share/nginx/html
Why? Because you almost certainly don’t need Docker to reinstall NGINX every time you change a source file. That will only slow down your builds.

7. Take advantage of GitLab’s powerful CI/CD configuration settings

There are three useful configuration features that, if employed properly, can greatly speed up your pipelines:

Cache dynamic dependencies

If you need to dynamically install certain dependencies during your job, and can’t pre-build them into a CI image for some reason, consider using GitLab’s cache between job runs. Take a look at the following example that demonstrates how to cache the node_modules directory between builds:

example-job:
  script:
    - yarn install --frozen-lockfile --check-files
  cache:
    paths:
      - node_modules/
Learn more about configuring GitLab’s cache.

Run jobs only when relevant files have changed

This is especially useful in monorepos where you may have multiple independent apps or microservices. If, for instance, you’ve only made changes to one front end app and not the others, why re-run tests for the ones that haven’t changed?

To save time, think about conditionally running jobs by pairing the only:changes key with pipelines for merge requests. Simply list the directories/files that need to change to necessitate running the job. Be sure to list anything that could possibly affect the job, including shared dependencies. Check out an example below:

test-example1:
  script:
    - yarn --cwd apps/example1/ test
  only:
    changes:
      - apps/example1/**/*
      - shared-dependencies/**/*test-example2:
  script:
    - yarn --cwd apps/example2/ test
  only:
    changes:
      - apps/example2/**/*
      - shared-dependencies/**/*
Learn more about using this feature.

Run jobs from future stages early

Stages are a great way to organize similar jobs, and most of the time, jobs in one stage won’t start running until all jobs from the previous stage have succeeded. But if you think about it, there are probably at least a few jobs in your pipeline that could safely run earlier without negatively impacting your project if they fail.

For example, we frequently use Chromatic to perform UI regression testing. These jobs happen at the end of our pipelines so that if they fail (i.e. visual changes are detected), they don’t block the pipeline from deploying changes to a review environment. But that’s really the only reason why they run so late in those pipelines.

In these cases, consider using the needs key to specify a limited set of job(s) from an earlier stage that must pass before running a job in a future stage. Used effectively, particularly with slower jobs toward the end of your pipeline, you can shave off a considerable amount of time.

Learn more about using the needs key.
If this helped you speed up your CI/CD times with GitLab, show your appreciation with some claps! And if you know of other helpful tips, please share them in the comments below.
