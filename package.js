Package.describe({
  name: 'clinical:keybindings',
  version: '1.4.1',
  summary: 'Keybindings modal for  ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/keybindings',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('session');
  api.use('mousetrap:mousetrap@1.4.6');

  // api.use('clinical:modals@1.0.5');
  // api.use('grove:less@0.1.1');
  // api.use('clinical:fonts@1.1.0');

  // api.addFiles('client/components/keybindingsModal/keybindingsModal.html','client');
  // api.addFiles('client/components/keybindingsModal/keybindingsModal.js','client');
  // api.addFiles('client/components/keybindingsModal/keybindingsModal.less','client');

  api.addFiles('client/keybindings.js', 'client');

  api.export('keybindingsModal');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('clinical:keybindings');
// });
