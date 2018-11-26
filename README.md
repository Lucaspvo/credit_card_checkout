# Credit Card Checkout

This is an example of a credit card checkout using VueJs for rendering the application and managing this SPA state.
To run and access it, follow the steps below (using docker or not):

Before getting to the next steps, go to a directory of your choice and clone the repository with:

`git clone https://github.com/Lucaspvo/credit_card_checkout.git`

After cloning it you can advance to one of the next steps.

## Using Docker

First install docker following the steps on this link:

https://docs.docker.com/install/linux/docker-ce/ubuntu/#uninstall-old-versions

After installing it, run the following command to instantiate the docker container with a nodejs environment to run the application:

`docker run -v $(pwd):/usr/src/credit_card_checkout -w /usr/src/credit_card_checkout -p 80:8080 -it node bash`

Once inside the container, run the next commands:

`su - node`

`cd /usr/src/credit_card_checkout`

`npm install`

`npm run serve`

After these commands, open your browser and type http://localhost

## Without Docker

Install NodeJs on your local machine by following one of the instructions at the bellow link, according to your OS:

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages

After installing NodeJs on your local machine, run the next commands:

`npm install`

`npm run serve`

After these commands, open your browser and type http://localhost:8080
