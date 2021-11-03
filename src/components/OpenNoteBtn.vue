<template>
  <div class="mx-auto flex justify-center mb-8">
    <button
      class="
        bg-green-400
        text-white text-xl
        font-bold
        border-b-8 border-green-700
        transition
        duration-500
        rounded
        animate-pulse
        py-4
        px-6
        hover:bg-green-300 hover:border-green-500
      "
      @click="setIsOpen(true)"
    >
      <i class="fas fa-plus"></i>
    </button>
    <!-- <button @click="generateNote">generate</button> -->
  </div>
</template>
<script>
import { reactive, inject } from 'vue';

export default {
  name: 'OpenNoteBtn',
  setup() {
    const store = inject('store');
    const { uploadNote, setIsOpen } = store;

    // dev
    const generateNote = () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          if (i % 2 === 0) {
            uploadNote(
              reactive({
                title: `TEST${i + 1}`,
                content:
                  '*(1. 對照 excel (左皮右機)，先橘在黃)* "(2. 建立__虛擬機__(新d槽/baseVM/Less14) - 三個 e 槽皆相同(接less-xx) - less-xx/hardDisk/ - 改虛擬機名字)" 3. 開機 - _(新增d槽)_ - 查ip - 回遠端桌面輸入網址 4. nodepad++ C:/xampp/apache/conf/httpd.conf - 調整讀檔順序 *(5. 重啟 _(x"(am)"pp)_ 6. 建立虛擬機(新d槽/baseVM/Less14))* - 三個 e 槽皆相同(接less-xx)</p>',
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
                  '*(Lorem ipsum dolor sit)*, "(amet consectetur adipisicing elit.)" Doloribus vero _(voluptatem harum)_, quos dignissimos consequatur fugit nesciunt aperiam perferendis rerum provident perspiciatis illo temporibus tenetur atque ex *(voluptatibus rem saepe qui iure. Unde reprehenderit impedit omnis? Totam dolores, accusantium blanditiis, repellat pariatur maxime perferendis necessitatibus impedit ipsa soluta "(_(corporis)_)" quia.)*',
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
      setIsOpen,
      generateNote,
    };
  },
};
</script>
