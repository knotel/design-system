module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    ['@babel/transform-runtime', { sourceType: 'unambiguous' }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs'
  ]
}
