import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../config";
import { doc, setDoc } from 'firebase/firestore';

interface SignUpProps {
    residenceName: string;
    username: string;
    idCard: File;
}

export default async function signUp(
    props: SignUpProps,
): Promise<any> {
    const { residenceName, username, idCard } = props;

    // create new uuid
    const userId = uuidv4();
    const createdAt = new Date().getTime();

    // Upload image to storage
    const imageRef = ref(storage, `ktp/${userId}-ktp.${idCard.name.split('.').pop() || '.jpg'}`);
    await uploadBytes(imageRef, idCard);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(imageRef);

    const newData = {
        'residence_name': residenceName,
        'username': username,
        'created_at': createdAt,
        'id_card': imageUrl,
    }
    
    await setDoc(doc(db, "account_request", userId), newData);
    return newData;
}