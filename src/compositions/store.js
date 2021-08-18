import { reactive, computed, watch, readonly } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// state
const state = reactive({
  myNotes: JSON.parse(localStorage.getItem('stared')) || [],
  currNote: {},
  sorted: false,
  loadingStatus: {
    isLoading: false,
    fullPage: true,
    blur: '25px',
    color: '#68d391',
    loader: 'dots',
  },

  // getters
  getLatestNote: computed(() => state.myNotes.slice(-7)),
});

// mutations
const uploadNote = payload => state.myNotes.push({ ...payload, id: uuidv4() });

const setCurrNote = payload => (state.currNote = payload);

const addStar = (id, status) => {
  status
    ? (state.myNotes.find(item => item.id === id).stared = true)
    : (state.myNotes.find(item => item.id === id).stared = false);
};

const isSorted = () =>
  state.sorted ? (state.sorted = false) : (state.sorted = true);

const deleteMyNote = payload => {
  console.log(state.myNotes.find(item => item.id === payload));
  state.myNotes.splice(
    state.myNotes.find(item => item.id === payload),
    1
  );
  console.log(typeof state.myNotes);
};

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

watch(
  () => state.sorted,
  v => {
    if (v) {
      return state.myNotes.sort(
        (a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()
      );
    } else {
      return state.myNotes.sort(
        (a, b) => Date.parse(a.date).valueOf() - Date.parse(b.date).valueOf()
      );
    }
  },
  { deep: true }
);

// actions

export default {
  state: readonly(state),
  uploadNote,
  deleteMyNote,
  setCurrNote,
  addStar,
  isSorted,
  setLoading,
};
