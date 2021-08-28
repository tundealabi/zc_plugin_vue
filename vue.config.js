module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://zc-todo-plugin-vue.netlify.app/'
      : '/',
};
