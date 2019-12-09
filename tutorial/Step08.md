# Step08 - Type checking with rules

[previous step](Step07.md) <----> [next step](Step09.md) | [home](../README.md)

## What's our schema?

We learned how to resctrict user access with rules.
Now, let's see how to impose type checking and a schema to our data.

Let's take a look at this function in our `firestore.rules` file:

```
    function commentIsValid() {
      return request.resource.data.rating is number &&
             request.resource.data.rating >= 1 &&
             request.resource.data.rating <= 5 &&
             request.resource.data.text is string &&
             request.resource.data.text.size() > 2 &&
             request.resource.data.text.size() < 2000 &&
             request.resource.data.title is string &&
             request.resource.data.title.size() > 2 &&
             request.resource.data.title.size() < 120 &&
             ((request.auth.uid != null && request.resource.data.user_email == request.auth.token.email) ||
              (request.auth.uid == null && request.resource.data.user_email == 'anonymous' ));
    }
```

We can check the type of each field, the size of each field, and even the content!

| _Additional step here:_                                  |
| -------------------------------------------------------- |
| In your `functions` directory run the following command: |                
| `firebase deploy --only functions:getFullProduct`        |
| We will explain in the next step what this function does.|

Try to submit an invalid comment, and see if it works!

## Give our product a schema

Turn this function into some restrictions to the products created:

```
  function productIsValid() {
      /**
       * Write conditions to make sure the input for creating a product is valid
       */
  }
```

Once done:

```
firebase deploy --only firestore:rules
```

## Getting creative

You can get pretty creative with rules, and you can end up with a pretty strict and structure database schema! It's up to you.
The most important thing, though, is to remember that the rules are the best shield between you and any malicious users! So use them wisely.

[previous step](Step07.md) <----> [next step](Step09.md) | [home](../README.md)
