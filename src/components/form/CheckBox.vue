<template>
    <div class="flex items-center px-4">
        <input id="filter-color-0" name="name" value="label" type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
        <label for="`filter-${label}-0`" class="ml-3 capitalize text-sm text-gray-600">{{ label }}</label>
    </div>
</template>

<script setup>
    defineProps(['label'])
</script>
