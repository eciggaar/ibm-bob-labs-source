<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter, page } = useData();

// index.md pages already contain their own "# Heading"
const show = computed(
    () => frontmatter.value.title && !page.value.relativePath.endsWith("index.md"),
);
</script>

<template>
    <div v-if="show" class="page-header vp-doc">
        <h1>{{ frontmatter.title }}</h1>
        <p v-if="frontmatter.duration" class="page-duration">
            ⏱ Duration: {{ frontmatter.duration }} minutes
        </p>
    </div>
</template>

<style scoped>
.page-header {
    margin-bottom: 24px;
}
.page-duration {
    margin: 8px 0 0;
    font-size: 14px;
    color: var(--vp-c-text-2);
}
</style>
