<template>
    <div class="w-56 p-4 animate__animated animate__backInDown">
        <div
            class="
                bg-gradient-to-br
                from-green-400
                to-green-200
                text-white
                flex
                justify-between
                rounded-xl
                shadow-xl
                cursor-pointer
                p-4
                hover:scale-125 hover:duration-300 hover:my-4
            "
            :class="{ fade: isFade }"
            @click.self="goToNote(note.id)"
        >
            <p class="font-extralight" @click.self="goToNote(note.id)">標題: {{ note.title }}</p>
            <span>
                <i
                    class="far fa-star duration-200 hover:scale-125"
                    @click="addStar(note.id, true)"
                    v-if="!note.stared"
                ></i>
                <i class="fas fa-star duration-200 hover:scale-125" @click="addStar(note.id, false)" v-else></i>
            </span>
        </div>
    </div>
</template>

<script>
import { ref, inject, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import 'animate.css';

export default {
    name: 'LatestNotes',
    props: {
        note: {
            type: Object,
        },
    },
    setup({ note }) {
        // destructor props
        const store = inject('store');
        const { state, addStar } = store;

        const router = useRouter();
        const isFade = ref(false);

        const goToNote = id => {
            isFade.value = true;
            setTimeout(() => {
                isFade.value = false;
                router.push({ path: `/current/view/${id}` });
            }, 750);
        };

        return {
            ...toRefs(state),
            isFade,
            addStar,
            note,
            goToNote,
        };
    },
};
</script>

<style lang="scss" scoped>
@keyframes fadeout {
    20% {
        transform: translate(-10%, 0%);
    }
    60% {
        transform: translate(150%, 0%);
    }
    100% {
        transform: translate(150%, 0%);
        opacity: 0;
    }
}
.fade {
    animation: fadeout 0.75s ease-in;
}
</style>
