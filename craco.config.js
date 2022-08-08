const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    plugins: [
      // antd 的按需加载
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'lib',
          style: true
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
        aliases: {
          'react/jsx-runtime': 'react/jsx-runtime.js',
          'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
        }
      }
    }
  ],
  webpack: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js'
    }
  }
}
