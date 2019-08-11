module.exports = {
  title: '揭阳市医学科研管理系统',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false, // 设置是否显示设置侧边栏

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: false, // 显示标签

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true, // 页头固定

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true, // 显示网站Logo

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
