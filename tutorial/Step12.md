# Step12 - Next steps

[previous step](Step11.md) <----> [next step](Step13.md) | [home](../README.md)

## What next?

The next steps are going to be less guided. I'll be here, and I'll ask you to search
the documentation. We'll look at the documentation together, too. But it's important to
learn how to use the documentation!

If at any point you are super stuck, you can either look at the [finished example](https://github.com/mandarini/shop) and
we will discuss things as we go along!

## Task 01 : Notifying a specific user

Now, if you want, go to `NotifyUsersFirstTimeFunction` and try to fix this code so that it sends a push notification
to the user who just accepted push notifications.

## Task 02 : Write more rules and restrictions

If you feel comfortable using Angular, add the functionality for users to edit their own comments,
not being able to change the rating.

## Task 03: Type check with a Cloud Function

Another way to type check the submitted data, is to take the task of writing through a Cloud Function.
So, when a user wants to write to a document, instead of calling Firestore directly,
you call a Cloud Function that will call Firestore eventually.

In that function you can check to see if this data is valid. Take some of the checking functionality
off the rules and add it to a Cloud Function.

Return meaningful errors.


[previous step](Step11.md) <----> [next step](Step13.md) | [home](../README.md)
