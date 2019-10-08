# Step11 - Scheduled Backups

[previous step](Step10.md) <----> [next step](Step12.md) | [home](../README.md)

## Why and how

Unlike the Realtime Database, Firestore does not have automated backups.
If you care about your data, you have to back it up, and you have to do it yourself, here!

Luckily, Firebase offers a very easy way to do so!

Steps [here](https://firebase.google.com/docs/firestore/solutions/schedule-export), but we'll see it, too.

## Scheduling a function

Take a look in `functions/src/index.ts` and also at `scheduledBackupFunction.ts`.

Generally, the steps you have to do are the following:

- Write a functions that does what you want
- Create a Pub/Sub topic on the Google Cloud console
- Create a job on the Google Cloud Scheduler, give it a frequency and a target (the Pub/Sub topic)
- Hook the function to the Pub/Sub topic, so that it’s triggered with it

Or, we can straight away use the `pubsub.schedule()` method of Cloud Functions, which uses the [unix-cron format](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules).

Again, let's take a look to how we could do this more manually, in the Google Cloud console.

Also, docs:
[Creating and configuring cron jobs](https://cloud.google.com/scheduler/docs/creating)
[Cloud Scheduler quickstart](https://cloud.google.com/scheduler/docs/quickstart)
[Cloud Pub/Sub triggers](https://firebase.google.com/docs/functions/pubsub-events)

## Importing backed up data

[Docs here](https://firebase.google.com/docs/firestore/manage-data/export-import)

You need the `gcloud` package installed.
Then, you run 
```
gcloud beta firestore import gs://[BUCKET_NAME]/[EXPORT_PREFIX]/
```

Or you can run this command in the Google Cloud Shell! 

[previous step](Step10.md) <----> [next step](Step12.md) | [home](../README.md)
