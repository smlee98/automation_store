/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{pug,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1216px",
            "2xl": "1408px",
        },
        colors: {
            blue: "#1fb6ff",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },
        fontFamily: {
            sans: [
                "Pretendard",
                "-apple-system",
                "BlinkMacSystemFont",
                "system-ui",
                "Roboto",
                "Helvetica Neue",
                "Segoe UI",
                "Apple SD Gothic Neo",
                "Noto Sans KR",
                "Malgun Gothic",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "sans-serif",
            ],
        },
        extend: {},
    },
    plugins: [],
};
