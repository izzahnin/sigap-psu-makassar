import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { UserSignupProps, jsonToUserSignup } from "../user/user";


export default async function getUserSignUpList(): Promise<Array<UserSignupProps>> {
    const userCollection = collection(db, 'account_request');
    const userSnapshot = await getDocs(userCollection);
    const userSignUpList = userSnapshot.docs.map((doc) => jsonToUserSignup(doc.data()));

    return userSignUpList;
}