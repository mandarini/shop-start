importScripts("https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js");

/**
 * Add your firebase messaging sender ID here
 * (you can find it in your environment file).
 */

firebase.initializeApp({
  messagingSenderId: ""
});
const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  var notificationTitle = "Background Message Title";
  var notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
