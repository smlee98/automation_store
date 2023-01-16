import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-one_dark";

const codeEditorEnabler = () => {
    const codeEditor = ace.edit("codeEditor");

    // Listen For theme changes
    document.documentElement.getAttribute("data-bs-theme") === "light"
        ? codeEditor.setTheme("ace/theme/chrome")
        : codeEditor.setTheme("ace/theme/one_dark");

    document.querySelectorAll("[data-theme-value]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const themeChoice = toggle.getAttribute("data-theme-value");
            themeChoice === "light" && codeEditor.setTheme("ace/theme/chrome");
            themeChoice === "dark" && codeEditor.setTheme("ace/theme/one_dark");
        });
    });

    codeEditor.setOptions({
        mode: "ace/mode/csharp",
        showPrintMargin: false,
        fontSize: 16,
        tabSize: 4,
        useSoftTabs: true,
    });

    if (document.getElementById("codeEditor").classList.contains("viewMode")) {
        codeEditor.setReadOnly(true);
        codeEditor.setValue(
            `public void HelloWorld() {\r\n\t//Say Hello!\r\n\tConsole.WriteLine("Hello World");\r\n}`
        );
    }
};

codeEditorEnabler();
