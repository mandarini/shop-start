# Step06 - Security Rules

[previous step](Step05.md) <----> [next step](Step07.md) | [home](../README.md)

## Go to your form and try to add a product

Add whatever you want.
If you want, you can add some apricots:

```
Name: Apricots
Title: Some nice apricots
Description: Apricots from our apricot tree
Price: 4
Image: https://cdn.pixabay.com/photo/2018/05/27/16/19/apricots-3433818_960_720.jpg
```

Click `ADD PRODUCT`

And, surprise!!!

You are not logged in, yet, you could create a product!!!!
Wow, that's not secure, like, AT ALL!!!

First of all, let's see our new product in our database.
Go to your project Console, go to Firebase and look at your newly created product!

What do our rules look like? Let's look in the rules tab.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

So, allow read and write to everyone? That cannot be good. There's even a warning there for us!

Let's fix this right away!

## Writing some rules

In the editor in the rules tab:

1. Get rid of

```
 match /{document=**} {
      allow read, write;
    }
```

2. Within the `match /databases/{database}/documents` add the following rule:

```
    match /products/{productID} {
      allow read;
      allow create, delete:  if exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
                                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'super_admin';
      allow update: if exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
                                   get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'super_admin' ||
                                    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
```

Now, try to add a product!
Oops! It failed! :)

I've went ahead and written a number of rules for us, to get us started.
They are all in the `firestore.rules` file.
Let's take a look.

We will explain more as we go along.

## Learn about rules

[This awesome video](https://www.youtube.com/watch?v=eW5MdE3ZcAw) explains everything about rules.
[And here's the documentation](https://firebase.google.com/docs/firestore/security/get-started).

## Let's deploy our rules

```
firebase deploy --only firestore:rules
```

Now look in your database, in the rules tab, and see them there!

[previous step](Step05.md) <----> [next step](Step07.md) | [home](../README.md)
