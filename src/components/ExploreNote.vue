<template>
  <div class="p-4 w-100 mx-auto md:w-3/4 lg:w-3/5">
    <div
      class="border-2 border-gray-200/60 rounded-lg overflow-hidden shadow-xl"
    >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/720x400"
      />
      <div class="p-6">
        <p class="text-md font-medium text-gray-400 mb-1 dark:text-white">
          Arron Su
        </p>
        <h3 class="text-2xl font-medium text-gray-900 mb-3 dark:text-white">
          TEST10
        </h3>
        <p class="leading-relaxed mb-3 dark:text-gray-400">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <div class="flex flex-wrap items-center">
          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >Learn More
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
          <span class="exploreAttribute">
            <i class="far fa-heart iconHover mr-2"></i>
            30
          </span>
          <span
            class="text-gray-400 inline-flex items-center leading-none text-sm"
            ><i class="far fa-bookmark iconHover"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExploreNote',
};
</script>
