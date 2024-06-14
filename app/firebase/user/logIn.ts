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
      collection(db, "users"),
      where("username", "==", username),
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
      console.error("User not found");
      throw new Error('Username and/or password is incorrect');
  }

  // Get user data
  const userData = querySnapshot.docs[0].data();
  console.log("Retrieved user data:", userData); // Log retrieved user data for debugging

  // Compare hash password
  const samePassword = await bcrypt.compare(password, userData.password); // Use bcryptjs's compare method
  console.log("Password match result:", samePassword); // Log result of password comparison

  if (!samePassword) {
      console.error("Password mismatch");
      throw new Error('Username and/or password is incorrect');
  }

  const user = jsonToUser(userData);
  return user;
}
