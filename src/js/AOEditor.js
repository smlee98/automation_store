import AOEditor from "../ckeditor/build/ckeditor";

const editorEnabler = () => {
    const editorEl = document.querySelectorAll(".editor");

    if (editorEl) {
        editorEl.forEach((el) => {
            AOEditor.create(el, {
                simpleUpload: {
                    uploadUrl: "upload/image",
                },
            })
                .then((newEditor) => {
                    window.editor = newEditor;
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }
};

editorEnabler();
