# Step10 - Notifying users

[previous step](Step09.md) <----> [next step](Step11.md) | [home](../README.md)

## Cloud Messaging

Let's see how we can notify our users for new comments.
Do notify our users, we need our app to have a service worker, and we need to store the user's device token.

Then, we can trigger a cloud function once a new comment is written, and send the users a push notification.

Let's look at the code of `notifyUsersFunction`.

See [docs here](https://firebase.google.com/docs/cloud-messaging/js/client).

In order to receive, see [docs here](https://firebase.google.com/docs/cloud-messaging/js/receive).

We'll walk through the steps now.

[previous step](Step09.md) <----> [next step](Step11.md) | [home](../README.md)
