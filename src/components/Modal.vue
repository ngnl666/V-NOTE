<template>
    <teleport to="body">
        <div class="relative w-full h-full">
            <div
                class="
                    flex
                    w-[250px]
                    bg-white/80
                    shadow-md
                    rounded-lg
                    overflow-hidden
                    absolute
                    top-2/4
                    left-2/4
                    -translate-x-2/4
                    z-50
                "
            >
                <div class="w-2 bg-red-500"></div>
                <div class="px-2 py-3">
                    <p class="text-md font-bold mb-2">確定要刪除 <span class="text-red-500">Note-10</span></p>
                    <div class="flex justify-between">
                        <p class="text-gray-600 text-sm">刪除後將無法復原</p>
                        <div class="space-x-2">
                            <button class="bg-white rouded-xl">取消</button>
                            <button class="bg-red-500 text-white rouded-2xl">刪除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
    <div class="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam neque quis ratione ullam natus eligendi,
        rem dicta illum aspernatur ea vero debitis in placeat labore sequi, provident totam esse. Molestias corporis
        illo consequatur velit iste placeat voluptaam eius dolorum harum quia?sicing elit. Sed quisquam neque quis
        ratione ullam natus eligendi, rem dicta illum aspernatur ea vero debitis in placeat labore sequi, provident
        totam esse. Molestias corporis illo consequatur velit iste placeat voluptaam eius doloru
    </div>
</template>

<script>
export default {
    name: 'Modal',
    setup() {},
};
</script>
