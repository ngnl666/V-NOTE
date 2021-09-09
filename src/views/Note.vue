<template>
    <div class="max-w-4xl mx-auto">
        <transition name="fade" mode="out-in">
            <div class="mx-auto flex justify-center" v-if="!isOpen">
                <button
                    class="
                        bg-green-400
                        text-white text-xl
                        font-bold
                        border-b-8 border-green-700
                        transition
                        duration-500
                        rounded
                        py-4
                        px-6
                        hover:bg-green-300 hover:border-green-500
                    "
                    @click="isOpen = !isOpen"
                >
                    <i class="fas fa-plus"></i>
                </button>
                <button @click="generateNote">generate</button>
            </div>
            <div class="note border border-gray-300 rounded-3xl p-8" v-else>
                <div class="mb-8">
                    <div class="mb-6">
                        <label class="text-gray-400 align-middle mr-4 dark:text-white" for="note__title--input"
                            >標題:</label
                        >
                        <input
                            type="text"
                            id="note__title--input"
                            maxlength="15"
                            autocomplete="off"
                            v-model.trim="note.title"
                        />
                        <span class="text-red-400 ml-4" :class="{ hidden: !isNull }">*此欄位不能為空</span>
                    </div>
                    <div class="mb-4">
                        <label class="text-gray-400 align-middle mr-4 dark:text-white" for="note__tags--input"
                            >Tags:</label
                        >
                        <span class="relative">
                            <input
                                type="text"
                                id="note__tags--input"
                                maxlength="10"
                                autocomplete="off"
                                v-model.trim="tag"
                                @keyup.enter="addTags()"
                            />
                            <span class="text-2xl text-green-400 absolute right-3 pt-1" @click="addTags()"
                                ><i class="fas fa-arrow-alt-circle-right"></i
                            ></span>
                            <div class="text-red-400 ml-4" v-if="note.tags.length === 5">*最多同時擁有 5 個 tag</div>
                        </span>
                    </div>

                    <ul class="flex flex-wrap">
                        <li
                            class="bg-gray-200 text-white rounded-md px-2 py-0.5 mr-4 dark:bg-gray-400"
                            v-for="(tag, index) in note.tags"
                            :key="index"
                        >
                            # {{ tag }}
                        </li>
                    </ul>
                </div>
                <div class="mb-8">
                    <div class="mb-4">
                        <label class="text-gray-400 dark:text-white">內文:</label>
                        <span class="text-red-400 ml-4" :class="{ hidden: !isNull }">*此欄位不能為空</span>
                    </div>
                    <textarea v-model.trim="note.content"></textarea>
                </div>
                <div class="flex justify-end">
                    <button
                        class="
                            bg-transparent
                            border border-red-700
                            text-red-700
                            font-bold
                            rounded
                            py-2
                            px-6
                            mr-4
                            hover:bg-red-700 hover:text-white
                            dark:text-white
                        "
                        @click="isOpen = !isOpen"
                    >
                        取消
                    </button>
                    <button
                        class="bg-green-400 text-white font-bold rounded py-2 px-6 hover:bg-green-500"
                        @click="upload(note)"
                    >
                        上傳
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { reactive, ref, inject, toRefs } from 'vue';

export default {
    name: 'Note',
    setup() {
        const store = inject('store');
        const { state, uploadNote } = store;

        let isOpen = ref(false);
        let isNull = ref(false);
        let tag = ref('');

        const note = reactive({
            title: '',
            content: '',
            tags: [],
            stared: false,
        });

        const addTags = () => {
            if (tag.value && note.tags.length < 5) {
                note.tags.push(tag.value);
                tag.value = '';
            }
        };

        const upload = note => {
            if (!note.title || !note.content) {
                isNull.value = true;
                window.scrollTo({
                    top: document.querySelector('.note').offsetTop - 20,
                    behavior: 'smooth',
                });
                return;
            }
            uploadNote(note);
            isNull.value = isOpen.value = false;
            note.title = note.content = '';
            note.tags = [];
        };

        // dev
        const generateNote = () => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    if (i % 2 === 0) {
                        uploadNote(
                            reactive({
                                title: `TEST${i + 1}`,
                                content:
                                    '1. 對照 excel (左皮右機)，先橘在黃 2. 建立虛擬機(新d槽/baseVM/Less14) - 三個 e 槽皆相同(接less-xx) - less-xx/hardDisk/ - 改虛擬機名字 3. 開機 - 新增d槽 - 查ip - 回遠端桌面輸入網址 4. nodepad++ C:/xampp/apache/conf/httpd.conf - 調整讀檔順序 5. 重啟 xampp 6. 建立虛擬機(新d槽/baseVM/Less14) - 三個 e 槽皆相同(接less-xx)',
                                tags: ['123', '456', '789'],
                                stared: false,
                                date: new Date(),
                            })
                        );
                    } else {
                        uploadNote(
                            reactive({
                                title: `TEST${i + 1}`,
                                content:
                                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero voluptatem harum, quos dignissimos consequatur fugit nesciunt aperiam perferendis rerum provident perspiciatis illo temporibus tenetur atque ex voluptatibus rem saepe qui iure. Unde reprehenderit impedit omnis? Totam dolores, accusantium blanditiis, repellat pariatur maxime perferendis necessitatibus impedit ipsa soluta corporis quia.',
                                tags: ['111', '222', '333'],
                                stared: false,
                                date: new Date(),
                            })
                        );
                    }
                }, 1000 * i);
            }
        };

        return {
            ...toRefs(state),
            tag,
            note,
            isOpen,
            isNull,
            addTags,
            upload,
            generateNote,
        };
    },
};
</script>

<style lang="scss" scoped>
// animation
.fade-enter-active,
.fade-leave-active {
    transition: all 1s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
.fade-leave-from {
    transform: translateY(20%);
}
.fade-enter-from {
    transform: translateY(20%);
}
</style>
