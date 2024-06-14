import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../config";
import { UserSignUp } from "@/app/view/DaftarPengajuan/DaftarPengajuan";

const getUserSignUpList = async (): Promise<UserSignUp[]> => {
  const querySnapshot = await getDocs(collection(db, "account_request"));
  const userList = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const fileUrl = await getDownloadURL(ref(storage, data.id_card));
      return {
        id: doc.id,
        username: data.username,
        residence_name: data.residence_name,
        id_card: data.id_card,
        file: fileUrl
      };
    })
  );
  return userList;
};

export default getUserSignUpList;

