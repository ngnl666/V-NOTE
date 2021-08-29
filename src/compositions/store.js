import { reactive, computed, watch, readonly } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// state
const state = reactive({
  myNotes: JSON.parse(localStorage.getItem('stared')) || [],
  currNote: {},
  isSort: true,
  keyword: '',
  loadingStatus: {
    isLoading: false,
    fullPage: true,
    blur: '25px',
    color: '#68d391',
    loader: 'dots',
  },

  // getters
  getLatestNote: computed(() =>
    state.isSort ? state.myNotes.slice(0, 7).reverse() : state.myNotes.slice(-7)
  ),

  filteredNote: computed(() =>
    state.myNotes.filter(item => {
      if (state.keyword.includes('#')) {
        return item.tags.includes(state.keyword.slice(1));
      } else {
        return (
          item.title.includes(state.keyword) ||
          item.content.includes(state.keyword)
        );
      }
    })
  ),
});

// mutations
const uploadNote = payload =>
  state.myNotes.push({ ...payload, id: uuidv4(), date: new Date() });

const addStar = (id, status) => {
  status
    ? (state.myNotes.find(item => item.id === id).stared = true)
    : (state.myNotes.find(item => item.id === id).stared = false);
};

const SortMyNotes = payload => {
  if (payload) {
    state.isSort = true;
    return state.myNotes.sort(
      (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
    );
  } else {
    state.isSort = false;
    return state.myNotes.sort(
      (a, b) => Date.parse(a.date).valueOf() - Date.parse(b.date).valueOf()
    );
  }
};

const deleteMyNote = payload =>
  state.myNotes.splice(
    state.myNotes.findIndex(item => item.id === payload),
    1
  );

const getTime = t =>
  `${new Date(t).toISOString().split('T')[0]} ${new Date(t).toLocaleTimeString(
    'zh-tw'
  )}`;

const setKeyword = payload => (state.keyword = payload);

const setLoading = () => {
  state.loadingStatus.isLoading = true;
  setTimeout(() => (state.loadingStatus.isLoading = false), 1000);
};

watch(
  () => state.myNotes,
  v => {
    localStorage.setItem('stared', JSON.stringify(v));
  },
  { deep: true }
);

// actions
const fetchCurrNote = id => {
  state.currNote = state.myNotes.find(item => item.id === id);
};

export default {
  state: readonly(state),
  uploadNote,
  deleteMyNote,
  addStar,
  SortMyNotes,
  getTime,
  setKeyword,
  setLoading,
  fetchCurrNote,
};
