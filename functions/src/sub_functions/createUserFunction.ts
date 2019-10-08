import * as admin from "firebase-admin";

const db = admin.firestore();

export async function createUserFunction(user: any) {
  /**
   * When a new user is created (when they log in for the first time)
   * we want to copy some of their profile info
   * in our users collection.
   * We actually want to create a new document containing that user's
   * uid, display name, email and photo.
   */
}
