# Step07 - Log in and create user

[previous step](Step06.md) <----> [next step](Step08.md) | [home](../README.md)

## Let's log in

Well, we are logged in now! But how do we set up our user roles?

1. You can set up custom auth claims. [Let's see what that is](https://firebase.google.com/docs/auth/admin/custom-claims).
2. But we will NOT be doing that. We will create our OWN user table, save the user data we want, and add roles to our users.

Let's look at our functions.

Let's see what we want the `createUserFunction` to do.

When a new user is created (when they log in for the first time) we want to copy some of their profile info in our users collection. We actually want to create a new document containing that user's
uid, display name, email and photo.

## Triggers

We talked about [function triggers](https://firebase.google.com/docs/functions).

We will need the [Firebase Authentication Triggers](https://firebase.google.com/docs/functions/auth-events).

Let's look at the docs and see what we can do about that.

## Syntax

We want the user info, and we want to write that info in Firestore.

### Firestore methods

First, let's look at the [available methods](https://firebase.google.com/docs/firestore/manage-data/add-data) of how to write and get data to and from Firestore.

Remember that Firestore keeps data in `collections` and `documents`.
Once we have an instance of firestore, we can access these collections and documents with dot syntax like this:

```
db.collection('products').doc(<product_id>).get()
```

`.get()` gets a product once. If we want to set, add, update, delete, there are relevant functions. Let's find these in the docs.

### Write user info in Firestore

With what you found in the docs, write the function to add a new user document in our users collection, with the info requested.

**Remember** that `.onCreate()` returns a [UserRecord](https://firebase.google.com/docs/reference/admin/node/admin.auth.UserRecord) object.

## Check the result

Once you're done, check if your code matches the relevant function from the finished example, found [here](https://github.com/mandarini/shop/blob/master/functions/src/sub_functions/createUserFunction.ts).

## Deploy

Now, let's deploy our function!

```
firebase deploy --only functions:createUser
```

## Delete manually your user, and sign in again to see if working

Go to the Authentication tab, delete your user, delete all cookies from you app, and sign in again to see if it worked.

## Check your Function status on Google Cloud

Go to [Google Cloud Console](https://console.cloud.google.com/functions) functions tab. Let's see what we can view there.

## Add role to your user

Once your user is in the users collection, let's go and manually set their role to super admin in the Firebase console.

After that, once we have a super admin ready, we can fix everything else from the UI.

[previous step](Step06.md) <----> [next step](Step08.md) | [home](../README.md)
