import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth();

export const createAccount = async (email, password, username) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
    await sendEmailVerification(auth.currentUser);
    return { type: 'success', msg: '註冊成功，請至信箱查收驗證信！' };
  } catch (error) {
    return { type: 'error', msg: '此信箱已被使用！' };
  }
};

export const signIn = async (Email, Password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      Email,
      Password
    );

    const { accessToken, displayName, email, emailVerified, uid } =
      userCredential.user;
    localStorage.setItem(
      'userInfo',
      JSON.stringify({ accessToken, displayName, email, emailVerified, uid })
    );

    if (!emailVerified) {
      return { type: 'error', msg: '信箱尚未驗證！' };
    }
  } catch (error) {
    return { type: 'error', msg: '帳號或密碼錯誤！' };
  }
};

export const userSignOut = async () => {
  try {
    await signOut(auth);
    localStorage.setItem('userInfo', JSON.stringify({}));

    return { type: 'success', msg: '登出成功！' };
  } catch (error) {
    return { type: 'error', msg: '登出失敗！' };
  }
};
