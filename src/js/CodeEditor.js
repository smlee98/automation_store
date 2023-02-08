import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/mode-csharp";

const codeEditorEnabler = () => {
    const clipboard = document.querySelector("#clipboard");
    const copyToClipboard = (textToCopy) => {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // text area method
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            textArea.remove();
        }
    };

    const editors = document.querySelectorAll(".code-editor");
    editors.forEach((el) => {
        const codeEditor = ace.edit(el.id);

        // Listen For theme changes
        document.documentElement.getAttribute("data-bs-theme") === "light"
            ? codeEditor.setTheme("ace/theme/chrome")
            : codeEditor.setTheme("ace/theme/one_dark");

        document.querySelectorAll("[data-theme-value]").forEach((toggle) => {
            toggle.addEventListener("click", () => {
                const themeChoice = toggle.getAttribute("data-theme-value");
                themeChoice === "light" &&
                    codeEditor.setTheme("ace/theme/chrome");
                themeChoice === "dark" &&
                    codeEditor.setTheme("ace/theme/one_dark");
            });
        });

        if (clipboard) {
            const copyTooltip =
                window.bootstrap.Tooltip.getInstance("#clipboard");

            clipboard.addEventListener("hide.bs.tooltip", () => {
                copyTooltip.setContent({
                    ".tooltip-inner": "클립보드에 복사",
                });
                copyTooltip.update();
            });

            const quickadd = () => {
                clipboard.classList.add("animate");
                copyTooltip.setContent({
                    ".tooltip-inner": "복사 완료",
                });
                copyTooltip.update();

                setTimeout(function () {
                    clipboard.classList.remove("animate");
                }, 200);
            };

            clipboard.addEventListener("click", () => {
                copyToClipboard(codeEditor.getValue());
                quickadd();
            });
        }

        codeEditor.setOptions({
            mode: "ace/mode/csharp",
            showPrintMargin: false,
            fontSize: 16,
            tabSize: 4,
            useSoftTabs: true,
        });

        if (el.classList.contains("viewMode")) {
            codeEditor.setReadOnly(true);
            codeEditor.setValue(
                `public void HelloWorld() {\r\n\t//Say Hello!\r\n\tConsole.WriteLine("Hello World");\r\n}`
            );
            codeEditor.clearSelection();
        }
    });
};

codeEditorEnabler();
