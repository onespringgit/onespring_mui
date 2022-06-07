module.exports = {
  components: {
      categories: [
          {
              name: "UI Component",
              include: [
                  "src/Button.jsx",
                  "src/Checkbox.jsx",
                  "src/Radio.jsx"
              ]
          }
      ],
      wrapper: 'src/Wrapper/UXPinWrapper.js',
      webpackConfig: 'webpack.config.js',
  },
  name: "UXPIN-MUI"
}