import { reactive, computed, watch, readonly } from 'vue';
import router from '../router';

import {
  uploadImgToStorage,
  getUrlfromStorage,
  deleteImgFromStorage,
} from '@/compositions/firebase';
import { signIn } from '@/compositions/auth';

import {
  _deleteOneNote,
  _editNote,
  _getAllNote,
  _getOneNote,
  _getOnePublishNote,
  _getPaginate,
  _likedNote,
  _postNote,
  _publishNote,
  _removePublish,
} from '@/compositions/api';

// state
const state = reactive({
  userInfo: {},
  myNotes: [],
  shareNotes: [],
  selectedTags: [],
  likedNoteList: JSON.parse(localStorage.getItem('likedNotes')) || [],
  alertMsg: { type: '', msg: '', exist: false },
  currNote: {},
  currImage: [],
  mode: '',
  isOpen: false,
  isSort: false,
  isEdit: false,
  keyword: '',
  showModal: false,
  loadingStatus: {
    isLoading: false,
    fullPage: true,
    blur: '25px',
    color: '#68d391',
    loader: 'dots',
  },

  // getters
  getLatestNote: computed(() => {
    return state.myNotes
      .slice()
      .sort(
        (a, b) =>
          Date.parse(b.createdAt).valueOf() - Date.parse(a.createdAt).valueOf()
      )
      .slice(0, 5);
  }),

  filteredNote: computed(() =>
    state.myNotes.filter(item => {
      if (state.keyword.includes('#') && item.tags)
        return item.tags.includes(state.keyword.slice(1));
      if (state.keyword === '★') return item.stared;

      return (
        item.title.includes(state.keyword) ||
        item.content.includes(state.keyword)
      );
    })
  ),

  filteredSharedNote: computed(() => {
    return state.shareNotes.filter(item => {
      const res = item.Notes[0].tags.filter(
        tag => state.selectedTags.indexOf(tag) !== -1
      );
      if (!state.selectedTags.length) return true;
      return res.length ? true : false;
    });
  }),
});

watch(
  () => state.myNotes,
  v => {
    localStorage.setItem('stared', JSON.stringify(v));
  },
  { deep: true }
);

watch(
  () => state.likedNoteList,
  v => {
    localStorage.setItem('likedNotes', JSON.stringify(state.likedNoteList));
  },
  { deep: true }
);

// mutations
const setKeyword = word => (state.keyword = word);

const setIsOpen = status => (state.isOpen = status);

const setIsEdit = status => (state.isEdit = status);

const setSelectedTags = tags => (state.selectedTags = tags);

const setCurrNote = note => (state.currNote = note);

const setCurrImage = img => (state.currImage = img);

const removemyNotes = () => (state.myNotes = []);

const removeShareNotes = () => (state.shareNotes = []);

const setLikedNoteList = (id, status) => {
  if (status) {
    state.likedNoteList.push(id);
  } else {
    state.likedNoteList.splice(
      state.likedNoteList.findIndex(item => item === id),
      1
    );
  }
};

const setIsLoading = () => {
  state.loadingStatus.isLoading = true;
  setTimeout(() => {
    state.loadingStatus.isLoading = false;
  }, 700);
};

const setAlertMsg = (type, msg) => {
  state.alertMsg = { type, msg, exist: true };
  setTimeout(() => (state.alertMsg.exist = false), 2000);
};

const setUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (!userInfo?.uid) {
    state.userInfo = '';
    return;
  }
  state.userInfo = userInfo;
};

const removeCurrImage = () => (state.currImage = []);

const addStar = (id, status) => {
  state.myNotes.find(item => item._id === id).stared = status;
  status ? setAlertMsg('success', '文章已加入收藏') : false;
};

const getTime = t =>
  `${new Date(t).toISOString().split('T')[0]} ${new Date(t).toLocaleTimeString(
    'zh-tw'
  )}`;

const setShowModal = (myNote, status) => {
  setCurrNote(myNote);
  state.showModal = status;
};

const setDarkMode = status => {
  if (status) {
    state.mode = 'dark';
    document.documentElement.classList.add('dark');
    document.querySelector('.controlLabel').dataset.content = '🌙';
  } else {
    state.mode = 'bright';
    document.documentElement.classList.remove('dark');
    document.querySelector('.controlLabel').dataset.content = '☀️';
  }
  localStorage.setItem('darkmode', JSON.stringify(status));
};

const nextPage = (status, id) => {
  const index = state.myNotes.findIndex(item => item._id === id);

  if (index + status < 0) {
    getOneNote(state.myNotes[state.myNotes.length - 1]._id);
  } else if (index + status > state.myNotes.length - 1) {
    getOneNote(state.myNotes[0]._id);
  } else {
    getOneNote(state.myNotes[index + status]._id);
  }
};

const sortMyNotes = status => {
  if (status) {
    state.isSort = true;
    state.myNotes.sort(
      (a, b) =>
        Date.parse(b.createdAt).valueOf() - Date.parse(a.createdAt).valueOf()
    );
  } else {
    state.isSort = false;
    state.myNotes.sort(
      (a, b) =>
        Date.parse(a.createdAt).valueOf() - Date.parse(b.createdAt).valueOf()
    );
  }
};

const loginWithDemoAccount = async () => {
  await signIn(
    import.meta.env.VITE_DEMO_EMAIL,
    import.meta.env.VITE_DEMO_PASSWORD
  );
  setAlertMsg('success', '登入成功！');
  router.push({ name: 'Home' });
};

/* --------- actions --------- */
const deleteOneNote = async currNote => {
  const res = await _deleteOneNote(currNote._id);
  removePublish(currNote._id);
  if (!res) {
    state.loadingStatus.isLoading = false;
    setAlertMsg('error', '刪除文章失敗');
    return;
  }

  setAlertMsg('success', '刪除文章成功');
  currNote.image.forEach(item => removeImg(item));
  getAllNote();
  router.push({ name: 'all' });
};

const editNote = async (id, tempData) => {
  state.loadingStatus.isLoading = true;
  const res = await _editNote(id, tempData);
  if (!res) {
    state.loadingStatus.isLoading = false;
    setAlertMsg('error', '編輯文章失敗');
    return;
  }

  state.loadingStatus.isLoading = false;
  setAlertMsg('success', '編輯文章成功');
  getOneNote(id);
};

const getAllNote = async () => {
  state.loadingStatus.isLoading = true;
  const res = await _getAllNote(state.userInfo.uid);
  const staredNotes = JSON.parse(localStorage.getItem('stared')) || [];
  if (!res) {
    state.loadingStatus.isLoading = false;
    setAlertMsg('error', '取得文章列表失敗');
    return;
  }

  state.myNotes = res.data;
  staredNotes.forEach(item => {
    state.myNotes.forEach((note, i) => {
      if (note._id === item._id) {
        item.stared
          ? (state.myNotes[i].stared = true)
          : (state.myNotes[i].stared = false);
      }
    });
  });
  state.loadingStatus.isLoading = false;
};

const getOneNote = async id => {
  const res = await _getOneNote(id);
  if (!res) {
    state.loadingStatus.isLoading = false;
    setAlertMsg('error', '取得文章失敗');
    return;
  }

  setCurrNote(res.data);
  router.push({ params: { id: id } });
};

const getPaginate = async page => {
  state.loadingStatus.isLoading = true;
  const res = await _getPaginate(page);
  if (!res.data) {
    setAlertMsg('error', '取得文章列表失敗');
    state.loadingStatus.isLoading = false;
    return;
  }
  state.loadingStatus.isLoading = false;
  state.shareNotes = [...state.shareNotes, ...res.data];
};

const likedNote = async (id, status) => {
  const note = await _getOnePublishNote(id);
  note.data.like += status;

  const res = await _likedNote(note.data._id, { data: note.data });
  if (!res) {
    setAlertMsg('error', '點擊愛心失敗！');
    return;
  }

  state.shareNotes.find(item => item._id === res.data._id).like = res.data.like;
};

const publishNote = async data => {
  const res = await _publishNote(data);
  if (!res) {
    setAlertMsg('error', '分享文章失敗！');
    state.loadingStatus.isLoading = false;
    return;
  }

  getAllNote();
};

const removePublish = async id => {
  await _removePublish(id);
};

const uploadNote = async newNote => {
  const res = await _postNote({ ...newNote, image: state.currImage });
  if (!res) {
    setAlertMsg('error', '上傳文章失敗');
    return;
  }

  removeCurrImage();
  getAllNote();
};

const uploadImg = async file => {
  const res = await uploadImgToStorage(
    file,
    `images/${new Date().toISOString()}_${file.name}`
  );
  const url = await getUrlfromStorage(res.metadata.fullPath);

  state.currImage.push({ fileName: res.metadata.fullPath, url: url });
};

const removeImg = async data => {
  await deleteImgFromStorage(data.fileName);

  state.currImage.splice(
    state.currImage.findIndex(item => item.fileName === data.fileName),
    1
  );
};

export default {
  state: readonly(state),
  addStar,
  deleteOneNote,
  editNote,
  getTime,
  getAllNote,
  getOneNote,
  getPaginate,
  likedNote,
  loginWithDemoAccount,
  nextPage,
  publishNote,
  removeImg,
  removeCurrImage,
  removePublish,
  removemyNotes,
  removeShareNotes,
  setAlertMsg,
  setCurrImage,
  setCurrNote,
  setDarkMode,
  setIsEdit,
  setIsLoading,
  setIsOpen,
  setLikedNoteList,
  setKeyword,
  setShowModal,
  setSelectedTags,
  sortMyNotes,
  setUserInfo,
  uploadNote,
  uploadImg,
};
