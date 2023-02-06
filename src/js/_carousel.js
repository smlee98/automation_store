const carouselController = () => {
    const carousels = document.querySelectorAll(".carousel-w-100");
    for (const carousel of carousels) {
        const carouselIndicators = carousel.querySelectorAll(
            ".carousel-indicators button span"
        );
        let intervalID;

        const bsCarousel = new window.bootstrap.Carousel(carousel);

        window.addEventListener("load", () => {
            fillCarouselIndicator(1);
        });

        carousel.addEventListener("slide.bs.carousel", (e) => {
            let index = e.to;
            fillCarouselIndicator(++index);
        });

        const fillCarouselIndicator = (index) => {
            let i = 0;
            for (const carouselIndicator of carouselIndicators) {
                carouselIndicator.style.width = 0;
            }
            clearInterval(intervalID);
            bsCarousel.pause();

            intervalID = setInterval(() => {
                i++;

                if (i >= 100) {
                    // i = 0; -> just in case
                    bsCarousel.next();
                } else {
                    carousel.querySelector(
                        ".carousel-indicators .active span"
                    ).style.width = `${i}%`;
                }
            }, 50);
        };
    }
};

export default carouselController;
