/*
 * @Author: guanjiajun www.guanjiajun@ewake.com
 * @Date: 2023-05-16 17:20:41
 * @LastEditors: guanjiajun www.guanjiajun@ewake.com
 * @LastEditTime: 2023-05-16 17:20:54
 * @FilePath: \uniapptest\my-vue3\.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    // 小程序全局变量
    globals: {
        uni: true,
        wx: true,
        WechatMiniprogram: true,
        getCurrentPages: true,
        UniApp: true,
        UniHelper: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: false,
                printWidth: 100,
                trailingComma: 'all',
                endOfLine: 'auto',
            },
        ],
        'vue/multi-word-component-names': ['off'],
        'vue/no-setup-props-destructure': ['off'],
        'vue/no-deprecated-html-element-is': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
    },
}