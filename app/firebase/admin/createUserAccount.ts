import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../config';

interface CreateUserAccountProps {
    id: string;
    username: string;
    residenceName: string;
    password: string;
    createdAt: number;
}

export default async function createUserAccount(
    props: CreateUserAccountProps,
): Promise<any> {
    const { id, username, residenceName, password, createdAt } = props;

    // create new uuid
    // const userId = uuidv4();

    // hash password
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newData = {
        'id': id,
        'username': username,
        'residence_name': residenceName,
        'password': hashPassword,
        'created_at': createdAt,
    }

    await setDoc(doc(db, "user", id), newData);

    // delete data from account_request
    await deleteDoc(doc(db, "account_request", id));
    return newData;
}