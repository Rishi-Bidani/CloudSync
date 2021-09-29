<template>
    <div class="container">
        <div class="files">
            <ul>
                <li v-for="(file, index) in files" :key="`Files-${index}`">
                    {{ file.fileName }}
                </li>
            </ul>
        </div>
        <div class="folders">{{ msg }}</div>
    </div>
</template>

<script>
import RequestFiles from "@/js/reqfiles";
export default {
    name: "Files",
    props: {
        msg: String,
    },
    data() {
        return {
            files: [],
            folders: [],
        };
    },
    async created() {
        const filesAndFoldersRequest = await RequestFiles.getFilesandFolders("test");
        const reqFiles = filesAndFoldersRequest.data.files;
        const reqFolders = filesAndFoldersRequest.data.folders;
        console.log(reqFiles);
        for (const file in reqFiles) {
            console.log(file);
        }
        try {
            this.files = reqFiles;
            this.folders = reqFolders;
            console.log(this.files, this.folders);
        } catch (error) {
            console.log(error);
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
