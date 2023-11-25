/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/(site)/**/*.js","./app/(site)/**/**/*.js"],
    theme: {
        fontFamily: {
            pt_serif: ["PT Serif", "sans-serif"],
        },
        extend: {
            fontSize: {
                d1: ["48px", {
                    lineHeight: "70px",
                    fontWeight: "400",
                }],
                d2: ["32px", {
                    lineHeight: "62px",
                    fontWeight: "400",
                }],
            },
            colors: {
                mainColor:'#67A2FF',
                textLight: '#B4BABF',
                bgTheme:'#262D40',
                bgLine:'#D3D3D3',
                bodyText:'#FCFEFF',
                dark:'#383E45',
                tLight:'#ECF3FF'
            },
            boxShadow: {
                sm: "0px 1px 3px 0px #03004717",
                DEFAULT: "0px 0px 10px 0px rgba(0, 0, 0, 0.06)",
                lg: "0px 4px 25px -1px rgba(0, 0, 0, 0.20)",
            },
            lineClamp: {
                7: '7',
                8: '8',
                12: '12',
              },
        },
    },
    plugins: [
        require('tailwindcss-rtl'),
    ],
}

