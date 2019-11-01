# Step05 - Now it's time to get started with our shop!

[previous step](Step04.md) <----> [next step](Step06.md) | [home](../README.md)

## What we learned

Now that you learned how to set up Firebase, create a database, a bucket and find your config parameters.
Let's see all these in the app we will be working on.

## Fork & Clone the repo

Fork this repo and then clone it, to start working!
Go to [https://github.com/mandarini/shop-start](https://github.com/mandarini/shop-start) and click the fork button.
Once you have it, then clone it locally so that we can start developing!

## Make it work

Once you have a local copy of this repo on your machine, go to the root of the project and run:

```
npm install
```

Then go to the functions directory:

```
cd functions/
```

and

```
npm install
```

there too.

## Connect it to the project you created in the Firebase console

### Copying the configuration settings

Remember in [Step02](Step02.md) how we connected our Firebase project from the console to our Angular application?
Copy the Firebase configuration for your project from the [Firebase console](console.firebase.google.com), as described in Step02, and
paste it in the `environment.ts` and `environment.prod.ts` files.

### Connecting our app to our project using the CLI

Now, connect your app with the project in the Firebase console, using the CLI.
Follow the steps on [Step04](Step04.md), but make sure you do not overwrite the files for functions. We'll do
it together now, so that you can see. You do not want to overwrite these, since I have already created
for you the things we will be working on.


## Serve it

Now, go back to the root of your project. Serve it and go to [localhost:4200](http://localhost:4200) so that we can see what's wrong with it!

```
ng serve
```

[previous step](Step04.md) <----> [next step](Step06.md) | [home](../README.md)
