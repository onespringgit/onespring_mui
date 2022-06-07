module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          "src/Button.jsx",
          "src/Checkbox.jsx",
          "src/Radio.jsx"
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'onespring_mui'
};