const postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-expand', () => {
  return (root) => {
    root.walkDecls('flex', decl => {
      const value = decl.value;
      const arrValue = value.split(/\s+/);
      const [flexGrow = '1', flexShrink = '0', flexBasis = 'auto'] = arrValue || [];
      decl.value = `${flexGrow} ${flexShrink} ${flexBasis}`;
      decl.before(postcss.decl({ prop: 'flex-grow', value: flexGrow }));
      decl.before(postcss.decl({ prop: 'flex-shrink', value: flexShrink }));
      decl.before(postcss.decl({ prop: 'flex-basis', value: flexBasis }));
    })
  }
})