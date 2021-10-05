<template>
    <div>

        <Files
            :key="`DisplayFiles-${filesKey}`"
            :files="files"
            :folders="folders"
            v-on:folderClicked="receiveFolderClick"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Files from "@/components/Files.vue";
// import UserLogin from "@/components/UserLogin.vue";
import RequestFiles from "@/js/reqfiles";

export default {
    name: "Home",
    components: {
        Files,

        // UserLogin,
    },
    data() {
        return {
            files: [],
            folders: [],
            navigationPath: ".",
            filesKey: 0,
            testNum: 0,
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
            console.log(this.files, this.folders);
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        async receiveFolderClick(folderPath) {
            this.navigationPath += `/${folderPath}`;
            const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath);
            const reqFiles = filesAndFoldersRequest.data.files;
            const reqFolders = filesAndFoldersRequest.data.folders;
            this.files = reqFiles;
            this.folders = reqFolders;
            console.log(reqFiles);
            console.log(reqFolders);
        },
    },
};
</script>
