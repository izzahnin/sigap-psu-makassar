import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../config";
import { collection, doc, getDocs, or, query, setDoc, where } from 'firebase/firestore';
import { UserProps, jsonToUser } from "./user";

interface LogInProps {
    username: string;
    password: string;
}

export default async function logIn(
    props: LogInProps,
): Promise<UserProps> {
    const { username, password } = props;

    // query user
    const q = query(
        collection(db, "user"),
        where("username", "==", username),
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        throw new Error('Username dan/atau password salah');
    }

    // compare hash password
    const bcrypt = require('bcrypt');
    const samePassword = await bcrypt.compare(password, querySnapshot.docs[0].data()['password']);
    if (!samePassword) {
        throw new Error('Username dan/atau password salah');
    }

    const user = jsonToUser(querySnapshot.docs[0].data());
    return user;
}