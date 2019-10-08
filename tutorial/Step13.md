# Step13 - Deploy!

[previous step](Step12.md) <----> [next step](Step14.md) | [home](../README.md)

## Deploying to Firebase

Remember how we configured hosting in the beginning? Now it's time to use it!

1. So, first we have to build our application for production!

```
ng build --prod
```

The `--prod` flag will replace the `environment.ts` file with the `environment.prod.ts`, which has the `production` flag set to `true`,
which will enable production mode (`enableProdMode()` in `main.ts`). Read more [here](https://angular.io/api/core/enableProdMode) or ask me! :)

This command will generate a directory, `dist/`, into which will be all we need for our app to run. 

![The /dist directory](img/dist.png)

2. And now, my favorite step! Just type and run

```
firebase deploy
```
And your app is live in the URL provided there!

Now. go to your [console](https://console.firebase.google.com/), in your project, at the hosting tab, and see it there!

[previous step](Step12.md) <----> [next step](Step14.md) | [home](../README.md)
