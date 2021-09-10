import { reactive, computed, watch, readonly } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import router from '../router';

// state
const state = reactive({
    myNotes: JSON.parse(localStorage.getItem('stared')) || [],
    currNote: {},
    isSort: false,
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
    getLatestNote: computed(() =>
        state.myNotes.sort((a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf()).slice(0, 7)
    ),

    filteredNote: computed(() =>
        state.myNotes.filter(item => {
            if (state.keyword.includes('#')) {
                return item.tags.includes(state.keyword.slice(1));
            } else {
                return item.title.includes(state.keyword) || item.content.includes(state.keyword);
            }
        })
    ),
});

// mutations
const uploadNote = newNote => state.myNotes.push({ ...newNote, id: uuidv4(), date: new Date() });

const addStar = (id, status) => {
    status
        ? (state.myNotes.find(item => item.id === id).stared = true)
        : (state.myNotes.find(item => item.id === id).stared = false);
};

const SortMyNotes = status => {
    if (status) {
        state.isSort = true;
        state.myNotes.sort((a, b) => Date.parse(b.date).valueOf() - Date.parse(a.date).valueOf());
    } else {
        state.isSort = false;
        state.myNotes.sort((a, b) => Date.parse(a.date).valueOf() - Date.parse(b.date).valueOf());
    }
};

const deleteMyNote = id =>
    state.myNotes.splice(
        state.myNotes.findIndex(item => item.id === id),
        1
    );

const getTime = t => `${new Date(t).toISOString().split('T')[0]} ${new Date(t).toLocaleTimeString('zh-tw')}`;

const setKeyword = word => (state.keyword = word);

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

const nextPage = status => {
    for (let i in state.myNotes) {
        if (state.myNotes[i].id === state.currNote.id) {
            console.log(+i);
            if (+i === 0) {
                hasNextPage[0] = false;
                return;
            }
            if (+i === state.myNotes.length - 1) {
                hasNextPage[1] = false;
                return;
            }
            status === -1
                ? (state.nextPageId = state.myNotes[i - 1].id)
                : (state.nextPageId = state.myNotes[+i + 1].id);
            break;
        }
    }
};

watch(
    () => state.myNotes,
    v => {
        localStorage.setItem('stared', JSON.stringify(v));
    },
    { deep: true }
);

watch(
    () => state.nextPageId,
    v => fetchCurrNote(v)
);

// actions
const fetchCurrNote = id => {
    state.currNote = state.myNotes.find(item => item.id === id);
    if (!state.currNote) {
        state.currNote = state.myNotes[0];
        router.push({ name: 'all' });
    }
};

export default {
    state: readonly(state),
    uploadNote,
    deleteMyNote,
    addStar,
    SortMyNotes,
    getTime,
    setKeyword,
    setDarkMode,
    setLoading,
    fetchCurrNote,
    nextPage,
};
