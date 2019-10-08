# Step04 - Firebase init

[previous step](Step03.md) <----> [next step](Step05.md) | [home](../README.md)

## Initialize Firebase

Now it's time to initialize Firebase and connect this project to the project we just create in the console.
The gist is -> you manage your application on Firebase console through the command line.

1. So, first thing to do is sign in:

```
firebase login
```

Now, firebase tools know who you are what your projects are. You can see them by running

```
firebase list
```

but that's not what we need.

2. We need to choose the project we want to and generate the files we need to for deployment.
   So, in your console run

```
firebase init
```

This will eventually generate the following files and directories, `firebase.json`, `.firebaserc`, `firestore.indexes.json`, `firestore.rules`, and `functions/`. You can read more about these files in
the [documentation](https://firebase.google.com/docs/cli/#initialize_a_firebase_project).

- In the first step/question choose Firestore and Hosting. You don't really **have** to choose
  Firestore, but in this way you can version control your security rules (they are version
  controled anyhow in the console, but you can have them right there in your project if you do so, so it's cool.)
- We will also choose `hosting`, `storage`, and `functions`.
- You can see these steps in [this video](https://youtu.be/R3Y4fjm_Dik).

* In **Hosting Setup**:
  - in the _pubic directory_ question, be sure to specify
    the public directory to be "`dist/you_applications_name`".
  - Configure as a single-page app --> Yes
  - And don't overwrite `index.html`

3. Now that initialization is finished, take a look at your generated files! You can read more about `firebase.json` in the [docs](https://firebase.google.com/docs/cli/#the_firebasejson_file).

[previous step](Step03.md) <----> [next step](Step05.md) | [home](../README.md)
