<template>
    <div class="container">
        <div class="folders">
            <h1>Folders</h1>
            <ul>
                <li
                    v-for="(folder, index) in folders"
                    :key="`Folder-${index}`"
                    v-on:click="navigation(folder)"
                >
                    {{ folder }}
                </li>
            </ul>
        </div>
        <div class="files">
            <h1>Files</h1>
            <ul>
                <li v-for="(file, index) in files" :key="`Files-${index}`">
                    {{ file.fileName }}
                </li>
            </ul>
        </div>
        {{ msg }}
    </div>
</template>

<script>
import RequestFiles from "@/js/reqfiles";
export default {
    name: "Files",
    props: {
        msg: String,
        nav: String,
    },
    data() {
        return {
            files: [],
            folders: [],
            navigationPath: ".",
        };
    },
    async created() {
        const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath);
        const reqFiles = filesAndFoldersRequest.data.files;
        const reqFolders = filesAndFoldersRequest.data.folders;
        // console.log(reqFiles);
        // console.log(this.nav);
        // for (const file in reqFiles) {
        //     console.log(file);
        // }
        try {
            this.files = reqFiles;
            this.folders = reqFolders;
            // console.log(this.files, this.folders);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        navigation: function (clickedFolder) {
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
</style>
