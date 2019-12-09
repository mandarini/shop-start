# Step08 - Compound queries

[previous step](Step07.md) <----> [next step](Step09.md) | [home](../README.md)

## Add product uid to newly created product

Now, let's look at `addProductIdToProductFunction` to see what we need it to do.

We talked about data manipulation.

Similarly to `createUserFunction`, write a function that will add the product id to the product, after it has been written.

Check your code [here](https://github.com/mandarini/shop/blob/master/functions/src/sub_functions/addProductIdToProductFunction.ts):

## No subcollections!

As we explained previously, when requesting an object from a collection, Firestore does not bring us back its subcollections.
So, if we need to get the comments for each product, we would have to request them in a separate call from our front end.
And then, for each comment, we would have to request the user info, to display the user's image and name with it.

How can we save ourselves from so many different calls from our front end?

1. You can structure your data in such a way that you do not have to make too many queries.
   That means data duplication. And it's not a bad practice when we're talking about NoSQL databases.
   Resources on how to structure your data:
   [How to Structure Your Data](https://www.youtube.com/watch?v=haMOUb3KVSo)
   [What is a NoSQL Database](https://www.youtube.com/watch?v=v_hR4K4auoQ)
   [Cloud Firestore Data Modeling](https://www.youtube.com/watch?v=lW7DWV2jST0)

2. You can create a Cloud Function that will take that load off the client and do the combination of queries for you!

In this example, it really does not save us much, and we could really duplicate our data. But keep this as an example when
a more complex and expensive operation comes up for your app.

eg.

- Collect data from multiple collections
- Search your data
- Manipulate your data upon writing them

Let's look at `getFullProductFunction` to see how it works!

## Deploy

```
firebase deploy --only functions
```

And deploy everything.

[previous step](Step07.md) <----> [next step](Step09.md) | [home](../README.md)
