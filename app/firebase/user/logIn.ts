"use strict";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../config";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { UserProps, jsonToUser } from "./user";
import bcrypt from 'bcryptjs'; // Correctly import bcryptjs

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
    const userData = querySnapshot.docs[0].data();
    const samePassword = await bcrypt.compare(password, userData.password); // Use bcryptjs's compare method
    if (!samePassword) {
        throw new Error('Username dan/atau password salah');
    }

    const user = jsonToUser(userData);
    return user;
}
