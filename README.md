aerochimps-dot-com
==================

Aerochimps Website.

What you need to run in local:
- Apache server running;
- NodeJS
- Bower;
- Compass;

If you'r lost in that list above... I will help you. Just follow this steps:

## 1. Apache server:
This project is running using some php includes. Because of that you need a local server running.
We're using [MAMP](http://www.mamp.info). If you are a Windows user, try [WAMP](http://www.wampserver.com)

## 2. NodeJS
We're using Bower and Compass. And both need Noje.js to run. Just go to http://nodejs.org install the pack to you OS. Right now this is all you need to know about it. :D

## 3. Bower
Bower manange all the pack/plugins/extensions used in the project.
Go to the http://bower.io, follow the stpes to install it. (You will need to do it via command line. Don't be scared. It's easy.)

## 4. Compass
We're compiling all styles using compass. It means you will never change any of `.css` files. All the time you will work in `.scss` files.
Anyway, go to http://compass-style.org/install and follow the steps to install it.

# To run it:
First of all you need to make sure you put the project folder inside of the folder where Apache is running (Take a look in preferences of MAMP/WAMP. It's easy to find what folder is that).

After that, turn on your apache server.
You will be able to access http://localhost:8888 and see  the folder of our project. (But wait. Things aren't working yet.)

Now you need open your terminal.app and navigate until the project folder.
Inside of our project folder you will use `bower install`.
It install all dependencies used in our project.

After that in the same folder you need to use `compass watch`.
This will make compass compile all `.scss` files in `.css` files

Ok, that's it. Now refresh your browser and everything will be working fine (If you do everything right, obviously)
