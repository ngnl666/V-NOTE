import { reactive, computed, watch, readonly } from 'vue';
import router from '../router';
import { _postNote, _getAllNote } from '@/compositions/api';
import {
  uploadImgToStorage,
  getUrlfromStorage,
  deleteImgFromStorage,
} from '@/compositions/firebase';

// state
const state = reactive({
  myNotes: JSON.parse(localStorage.getItem('stared')) || [],
  currNote: {},
  currImage: [],
  isOpen: false,
  isSort: false,
  isEdit: false,
  showModal: false,
  keyword: '',
  nextPageId: '',
  hasNextPage: [true, true],
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
        (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
      )
      .slice(0, 7);
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
});

// watch(
//   () => state.myNotes,
//   v => {
//     localStorage.setItem('stared', JSON.stringify(v));
//   },
//   { deep: true }
// );

watch(
  () => state.nextPageId,
  v => fetchCurrNote(v)
);

// mutations
const editNote = newNote => {
  const id = state.myNotes.findIndex(item => item.id === newNote.id);
  state.myNotes.splice(id, 1, { ...newNote });
  setLoading();
};

const addStar = (id, status) => {
  status
    ? (state.myNotes.find(item => item.id === id).stared = true)
    : (state.myNotes.find(item => item.id === id).stared = false);
};

const sortMyNotes = status => {
  if (status) {
    state.isSort = true;
    state.myNotes.sort(
      (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
    );
  } else {
    state.isSort = false;
    state.myNotes.sort(
      (a, b) => Date.parse(a.date).valueOf() - Date.parse(b.date).valueOf()
    );
  }
};

const getTime = t =>
  `${new Date(t).toISOString().split('T')[0]} ${new Date(t).toLocaleTimeString(
    'zh-tw'
  )}`;

const setKeyword = word => (state.keyword = word);

const setCurrNote = note => (state.currNote = note);

const setIsOpen = status => (state.isOpen = status); // here

const setIsEdit = status => (state.isEdit = status);

const setShowModal = (myNote, status) => {
  setCurrNote(myNote);
  state.showModal = status;
};

const setDarkMode = status => {
  if (status) {
    document.documentElement.classList.add('dark');
    document.querySelector('.controlLabel').dataset.content = '🌙';
  } else {
    document.documentElement.classList.remove('dark');
    document.querySelector('.controlLabel').dataset.content = '☀️';
  }
  localStorage.setItem('darkmode', JSON.stringify(status));
};

const setLoading = () => {
  // 改成 ajax
  state.loadingStatus.isLoading = true;
  setTimeout(() => (state.loadingStatus.isLoading = false), 1000);
};

const deleteMyNote = id => {
  state.myNotes.splice(
    state.myNotes.findIndex(item => item.id === id),
    1
  );
  setLoading();
  router.push({ name: 'all' });
};

const resetHasNextPage = () => {
  let id = state.myNotes.findIndex(item => item.id === state.currNote.id);
  if (id === 0) {
    state.hasNextPage[0] = false;
  } else if (id === state.myNotes.length - 1) {
    state.hasNextPage[1] = false;
  } else {
    state.hasNextPage = [true, true];
  }
};

const nextPage = status => {
  for (let i = 0; i < state.myNotes.length; i++) {
    if (state.myNotes[i].id === state.currNote.id) {
      if (status === -1 && state.myNotes[i - 1]?.id) {
        state.hasNextPage[1] = true;
        i === 1
          ? (state.hasNextPage[0] = false)
          : (state.hasNextPage[0] = true);
        state.nextPageId = state.myNotes[i - 1].id;
        return;
      }
      if (status === 1 && state.myNotes[i + 1]?.id) {
        state.hasNextPage[0] = true;
        i === state.myNotes.length - 2
          ? (state.hasNextPage[1] = false)
          : (state.hasNextPage[1] = true);
        state.nextPageId = state.myNotes[i + 1].id;
        return;
      }
    }
  }
};

// actions
const fetchCurrNote = id => {
  setCurrNote(state.myNotes.find(item => item.id === id));
  if (!state.currNote) setCurrNote(state.myNotes[0]);
  router.push({ params: { id: id } });
};

const uploadNote = async newNote => {
  const res = await _postNote({ ...newNote, image: state.currImage });
  if (res) state.myNotes.push(res.data);
  state.currImage = [];
};

const getAllNote = async () => {
  const res = await _getAllNote();
  if (res) return (state.myNotes = res.data);
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
  deleteMyNote,
  fetchCurrNote,
  getTime,
  getAllNote,
  removeImg,
  nextPage,
  resetHasNextPage,
  setCurrNote,
  setDarkMode,
  setIsEdit,
  setIsOpen,
  setKeyword,
  setLoading,
  setShowModal,
  sortMyNotes,
  uploadNote,
  uploadImg,
  editNote,
};
