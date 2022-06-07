module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          "src/components/Button/Button.jsx",
          "src/components/Checkbox/Checkbox.jsx",
          "src/components/Radio/Radio.jsx"
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'onespring_mui'
};