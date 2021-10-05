/* eslint-disable prettier/prettier */
<template>
    <div class="container">
        <div class="folders">
            <figure class="folders-figure"
                    v-for="(folder, index) in folders"
                    :key="`Folder-${index}`"
                    v-on:click="navigation(folder)"
            >
                <img src="../assets/filelogos/file.svg" alt="Folder">
                <figcaption>{{ folder }}</figcaption>
            </figure>
        </div>
        <div class="files">
            <h1>Files</h1>
            <ul>
                <li v-for="(file, index) in files" :key="`Files-${index}`">
                    {{ file.fileName }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import RequestFiles from "@/js/reqfiles";
import {ref} from "vue"

export default {
    name: "Files",
    props: {
        test: Number,
        msg: String,
        nav: String,
        files: Array,
        folders: Array
    },

    methods: {
        navigation: async function (clickedFolder) {
            // this.navigationPath += `/${clickedFolder}`;
            // console.log(this.navigationPath);
            this.$emit("folderClicked", clickedFolder);

        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    text-align: left;
    cursor: pointer;
}

.folders {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 2rem;
    margin: 2rem;
}
</style>
