/* eslint-disable prettier/prettier */
<template>
    <div class="container">
        <div class="folders">
            <figure class="folders-figure"
                    v-for="(folder, index) in folders"
                    :key="`Folder-${index}`"
                    v-on:click="navigation(folder)"
            >
                <img src="../assets/folder.svg" alt="Folder">
                <figcaption>{{ folder }}</figcaption>
            </figure>
        </div>
        <div class="files">
            <figure class="files-figure"
                    v-for="(file, index) in files"
                    :key="`Files-${index}`"
            >
                <img
                    class="fileIcon"
                    v-if="file.fileExtension === '.txt'"
                    src="../assets/filelogos/file.svg"
                    alt="file">

                <img
                    class="fileIcon"
                    v-else-if="file.fileExtension === '.pdf'"
                    src="../assets/filelogos/pdf.svg"
                    alt="file">
                <img
                    class="fileIcon"
                    v-else-if="['.mp4', '.mov', '.mkv', '.webm'].includes(file.fileExtension)"
                    src="../assets/filelogos/video.svg"
                    alt="video"
                />
                <img
                    class="fileIcon"
                    v-else-if="['.png', '.jpeg', '.jpg', '.svg', '.gif'].includes(file.fileExtension)"
                    src="../assets/filelogos/image2.svg"
                    alt="Image"
                />
                <img class="fileIcon"
                     v-else src="../assets/filelogos/file.svg"
                     alt="Unknown file type"
                />
                <figcaption>{{ file.fileName }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script>
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

img {
    width: 6rem;
}

img.fileIcon {
    height: 4rem;
}

.folders, .files {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 2rem;
    margin: 2rem;
}

figcaption {
    word-wrap: break-word
}
</style>
