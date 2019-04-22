module.exports = {
  name: "auroraui",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/auroraui/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
