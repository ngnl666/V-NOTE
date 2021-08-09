import { reactive, computed, watch, readonly } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// state
const state = reactive({
  myNotes: JSON.parse(localStorage.getItem('stared')) || [],
  currNote: {},

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

// actions

export default {
  state: readonly(state),
  uploadNote,
  setCurrNote,
  addStar,
};
