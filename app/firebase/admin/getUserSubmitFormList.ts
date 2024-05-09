import { collection, getDocs } from "firebase/firestore";
import { UserSubmitFormProps, jsonToUserSubmitForm } from "../user/user";
import { db } from "../config";

export default async function getUserSubmitFormList(): Promise<Array<UserSubmitFormProps>> {
    const userCollection = collection(db, 'user');
    const userSnapshot = await getDocs(userCollection);
    const userSubmitFormList = userSnapshot.docs.map((doc) => jsonToUserSubmitForm(doc.data()));

    return userSubmitFormList;
}