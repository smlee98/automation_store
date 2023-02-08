import Tagify from "@yaireo/tagify";

const tagifyEnabler = (e) => {
    const inputEl = document.querySelectorAll(".tagify");

    inputEl.forEach(
        (el) =>
            new Tagify(el, {
                maxTags: 5,
                pattern: /^.{0,10}$/,
            })
    );
};

tagifyEnabler();
