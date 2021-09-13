<template>
    <div class="max-w-5xl mx-auto flex justify-center space-x-12 items-center">
        <loading
            v-model:active="loadingStatus.isLoading"
            :can-cancel="true"
            :is-full-page="loadingStatus.fullPage"
            :blur="loadingStatus.blur"
            :loader="loadingStatus.loader"
            :color="loadingStatus.color"
        />
        <div class="nextPageBtn" :class="{ invisible: !hasNextPage[0] }" @click="nextPage(-1)">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="max-w-[820px] border border-gray-300 rounded-3xl p-8">
            <router-view> </router-view>
        </div>
        <div class="nextPageBtn" :class="{ invisible: !hasNextPage[1] }" @click="nextPage(1)">
            <i class="fas fa-chevron-right"></i>
        </div>
    </div>
</template>

<script>
import { onMounted, inject, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: 'CurrentNote',
    components: {
        Loading,
    },
    setup() {
        const store = inject('store');
        const { state, nextPage, resetHasNextPage, setLoading } = store;

        setLoading();

        onMounted(() => resetHasNextPage());

        return {
            ...toRefs(state),
            nextPage,
        };
    },
};
</script>
