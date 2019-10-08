# Step03 - Set up authentication, Firestore and Buckets

[previous step](Step02.md) <----> [next step](Step04.md) | [home](../README.md)

Now it's time to set up Authentication for our application!

## Set up Authentication in the Firebase Console

First off, you need to set up the Authentication in your Firebase Console.

1. On the side menu of your project in your Firebase Console, click _Authentication_.
2. On the **Sign-In method** tab, choose _Google_. We will use Google Authentication
   for our project today. You can use any other provider you want in your future
   projects.
3. Click _enable_ and _save_
4. Scroll down to authorized domains. These are domains that Firebase has authorized
   to use Authentication. Check that `localhost` is there, for our development purposes.
   Once we deploy, we will add the domain of our deployed application.

## Create a database

In order to be able to start using Firestore, you need to create your database.

1. Go to the Database tab of your Project console and click 'Create'.
2. Get familiar with everything that is on your screen. Let's look at the rules and indexes tabs.

## Create a storage bucket

In order to be able to create data backups, you will need a storage bucket.
Let's create one in the Storage tab.

[previous step](Step02.md) <----> [next step](Step04.md) | [home](../README.md)
