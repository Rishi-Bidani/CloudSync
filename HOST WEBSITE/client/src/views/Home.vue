<template>
    <section class="section-1">
        <SideBar
            sbwidth="320px"
            sbheader="CloudSync"
            :menu="menu"
            v-on:button-click="sideBarButtonClick"
        />
    </section>
    <div class="container">
        <div class="center margin1">
            <div class="breadcrumb-nav"
                 ref="breadcrumbNav"
            >
                <span class="breadcrumb-item"
                      :key="`root-0`"
                      @click="navClicked(0)"
                >
                    root>&nbsp;
                </span>
                <span class="breadcrumb-item"
                      v-for="(item, index) in navigationPath.split(`/`).slice(1)"
                      :key="`item-${index}`"
                      @click="navClicked(index+1)"
                >
                    {{ item }}>&nbsp;
                </span>
            </div>
        </div>
        <Files
            :key="`DisplayFiles-${filesKey}`"
            :files="files"
            :folders="folders"
            v-on:folderClicked="receiveFolderClick"
            v-on:single-click-file="singleClickFile"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Files from "@/components/Files.vue";
import RequestFiles from "@/js/reqfiles";
import SideBar from "@/components/SideBar"
import {globalvars} from "@/js/globalvariables";
import Post from "@/js/requests";
import {useRouter} from "vue-router";

export default {
    name: "Home",
    components: {
        Files,
        SideBar
    },
    data() {
        return {
            files: [],
            folders: [],
            navigationPath: ".",
            filesKey: 0,
            testNum: 0,
            navId: 0,
            selectedFile: "",
            menu: [
                {
                    type: "title",
                    text: "File Properties"
                },
                {
                    id: "filename",
                    dataPath: "",
                    type: "item",
                    text: "File Name: "
                },
                {
                    id: "filesize",
                    type: "item",
                    text: "File Size: "
                },
                {
                    type: "title",
                    text: "File Options"
                },
                {
                    type: "button",
                    text: "Download"
                }
            ]
        };
    },
    beforeCreate() {
        const router = useRouter();
        const checkLogin = async () => {
            return await Post.checkLogin()
        }
        checkLogin().then(resp => {
            if (!resp.data) {
                router.push("/")
            }
        })
    },
    async created() {
        const sessId = globalvars.sessionId;
        const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath, sessId);
        const reqFiles = filesAndFoldersRequest.data.files;
        const reqFolders = filesAndFoldersRequest.data.folders;
        try {
            this.files = reqFiles;
            this.folders = reqFolders;
            // console.log(this.files, this.folders);
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        async receiveFolderClick(folderPath) {
            this.navigationPath += `/${folderPath}`;
            await this.displayFolders()
        },

        async displayFolders() {
            const sessId = globalvars.sessionId;
            const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath, sessId);
            const reqFiles = filesAndFoldersRequest.data.files;
            const reqFolders = filesAndFoldersRequest.data.folders;
            this.files = reqFiles;
            this.folders = reqFolders;
        },
        async navClicked(navid) {
            // console.log(navid)
            this.navigationPath = this.navigationPath.split("/").slice(0, navid + 1).join("/")
            await this.displayFolders()
        },
        singleClickFile(fileName, fileSize) {
            // console.log(fileName, fileSize)
            this.selectedFile = fileName;
            this.menu[1].text = "File Name: " + fileName
            if (fileSize < 1) {
                fileSize = fileSize * 1024 + "KB"
            } else {
                fileSize = fileSize + "MB"
            }
            this.menu[2].text = "File Size: " + fileSize
        },
        async sideBarButtonClick(name) {
            if (name === "Download") {
                const sessId = globalvars.sessionId
                const relPath = this.navigationPath + "/" + this.selectedFile;
                await RequestFiles.reqFileDownload(this.selectedFile, relPath, sessId)
            } else {

            }
        }
    },
};
</script>
<style scoped>
.container {
    width: 100%;
    overflow-y: scroll;
}

.section-1 {
    position: relative;
}

.center {
    display: flex;
    justify-content: center;
}

.margin1 {
    margin: 1rem;
}

.breadcrumb-nav {
    width: 80%;
    min-height: 3rem;
    height: fit-content;
    background-color: white;
    word-break: break-all;
    text-align: left;
    border-radius: 0.5rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.2rem;
}

.breadcrumb-nav::-webkit-scrollbar-track {
    width: 10px;
    color: blue;
}
</style>
<!--Unscoped-->
<style>
.breadcrumb-item {
    cursor: pointer;
}

.breadcrumb-item:hover {
    color: blue;
}
</style>