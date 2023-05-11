import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'mydumi-demo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName:'antd',
        libraryDirectory:'es',
        style:true,
      },
    ],
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: (prop) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }
      return true;
    },
  },
});
