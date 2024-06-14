import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../config";

const getUserSignUpList = async () => {
  const querySnapshot = await getDocs(collection(db, "account_request"));
  const userList = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const fileUrl = await getDownloadURL(ref(storage, data.id_card));
      return { id: doc.id, ...data, file: fileUrl };
    })
  );
  return userList;
};

export default getUserSignUpList;
