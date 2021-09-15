<template>
    <div class="max-w-5xl mx-auto flex justify-center space-x-12 items-center" v-if="!isEdit">
        <loading
            v-model:active="loadingStatus.isLoading"
            :can-cancel="true"
            :is-full-page="loadingStatus.fullPage"
            :blur="loadingStatus.blur"
            :loader="loadingStatus.loader"
            :color="loadingStatus.color"
        />
        <div
            class="nextPageBtn"
            :class="{ invisible: !hasNextPage[0] }"
            @click="
                nextPage(-1);
                triggerAnimation(0);
            "
        >
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="max-w-[820px] overflow-hidden">
            <div
                class="w-full border border-gray-300 rounded-3xl p-8"
                :class="{ moveLeft: displaying[0], moveRight: displaying[1] }"
            >
                <router-view> </router-view>
            </div>
        </div>
        <div
            class="nextPageBtn"
            :class="{ invisible: !hasNextPage[1] }"
            @click="
                nextPage(1);
                triggerAnimation(1);
            "
        >
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
    <Note v-else />
</template>

<script>
import { onMounted, inject, reactive, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import Note from '@/views/Note.vue';

export default {
    name: 'CurrentNote',
    components: {
        Loading,
        Note,
    },
    setup() {
        const store = inject('store');
        const { state, nextPage, resetHasNextPage, setLoading } = store;

        let displaying = reactive([false, false]);

        const triggerAnimation = num => {
            displaying[num] = true;
            setTimeout(() => (displaying[num] = false), 500);
        };

        setLoading();

        onMounted(() => resetHasNextPage());

        return {
            ...toRefs(state),
            triggerAnimation,
            displaying,
            nextPage,
        };
    },
};
</script>

<style scoped>
@keyframes moveLeft {
    0% {
        transform: translateX(0%);
        opacity: 0.5;
    }
    100% {
        transform: translateX(-125%);
    }
}

@keyframes moveRight {
    0% {
        transform: translateX(0%);
        opacity: 0.5;
    }
    100% {
        transform: translateX(125%);
    }
}

.moveLeft {
    animation: moveLeft 0.5s ease-out;
}
.moveRight {
    animation: moveRight 0.5s ease-out;
}
</style>
