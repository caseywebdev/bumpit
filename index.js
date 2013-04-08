module.exports = function (current, section, target) {
  var sections = {
    major: [/^(\d+).*/, function (__, major) {
      return (target || +major + 1) + '.0.0';
    }],
    minor: [/\.(\d+).*/, function (__, minor) {
      return '.' + (target || +minor + 1) + '.0';
    }],
    patch: [/\.(\d+)\.(\d+).*/, function (__, minor, patch) {
      return '.' + minor + '.' + (target || +patch + 1);
    }],
    build: [/-(\d+).*/, function (__, build) {
      return '-' + (target || +build + 1);
    }],
    tag: [/[a-z]+$/, target]
  };

  return section && !sections[section] ?
    section : current.replace.apply(current, sections[section || 'patch']);
};
