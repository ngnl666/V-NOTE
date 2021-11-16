import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const metadata = {
  contentType: 'image/jpeg, image/jpg, image/png',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadImgToStorage = async (file, filename) => {
  const imagesRef = ref(storage, filename, metadata);
  return await uploadBytes(imagesRef, file).then(snapshot => snapshot);
};

export const deleteImgFromStorage = async filename => {
  const imagesRef = ref(storage, filename);
  await deleteObject(imagesRef)
    .then(() => console.log('刪除圖片成功'))
    .catch(error => console.log('刪除圖片失敗'));
};

export const getUrlfromStorage = async filename => {
  const imagesRef = ref(storage, filename);
  return await getDownloadURL(imagesRef)
    .then(url => url)
    .catch(error => console.log('獲取 url 失敗'));
};
