import * as admin from "firebase-admin";

const db = admin.firestore();

/**
 *
 * This function will send users a notification
 * each time any user posts a comment on any product.
 * 
 * Customize this function to:
 * 
 * 1. Find the commenter's display name and show that in the notification, instead of the user's email
 * 
 * 2. On click, send the user to the product page the comment was posted on.
 * 
 * 3. OPTIONAL: Send notifications only to admins and super admins.
 */

export async function notifyUsersFunction(change: any, context: any) {
  const data = change.after.data();

  const payload = {
    notification: {
      title: `New comment!`,
      body: `New comment posted by ${data.user_email}`,
      click_action: "https://shop-katerina.web.app/"
    }
  };

  /**
   * The following can be considered standard code to send
   * notifications to users. It has been customized 
   * to work with async functions.
   * 
   * To avoid errors and linter complaints, we are always
   * guarding against undefined values.
   */

  const tokens_snapshot = await db.collection("fcmTokens").get();
  const res_promises = tokens_snapshot.docs.map(async token_snap => {
    const response = await sendMessage(token_snap, payload);
    return response;
  });

  const message_responses = await Promise.all(res_promises);
  for (let i = 0; i < message_responses.length; i++) {
    if (
      message_responses[i] &&
      message_responses[i]["message_response"] &&
      message_responses[i]["message_response"]["results"] &&
      message_responses[i]["message_response"]["token_id"]
    ) {
      message_responses[i]["message_response"]["results"].forEach(
        async (result: any, index: any) => {
          const error = result.error;
          if (error) {
            console.error(
              "Failure sending notification to",
              message_responses[i]["token_id"],
              error
            );
            // Cleanup the tokens who are not registered anymore.
            if (
              error.code === "messaging/invalid-registration-token" ||
              error.code === "messaging/registration-token-not-registered"
            ) {
              try {
                await db
                  .collection("fcmTokens")
                  .doc(message_responses[i]["token_id"])
                  .delete();
              } catch (error) {
                console.log(error);
              }
            }
          }
        }
      );
    }
  }
}

async function sendMessage(
  token_snap: FirebaseFirestore.QueryDocumentSnapshot,
  payload: {}
): Promise<any> {
  try {
    const message_response = await admin
      .messaging()
      .sendToDevice(
        token_snap ? (token_snap.id ? token_snap.id : "") : "",
        payload
      );
    return { message_response: message_response, token_id: token_snap.id };
  } catch (error) {
    console.log("user error", error);
    return false;
  }
}
