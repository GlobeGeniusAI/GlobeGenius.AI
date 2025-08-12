import { auth } from "@/firebase/config";
import { signOut as firebaseSignOut } from "firebase/auth";

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
