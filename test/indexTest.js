const jsdom = require("jsdom");
const path = require("path");
var chai = require("chai");
chai.use(require("chai-fs"));

describe("This assignment", () => {
  it("has been correctly cloned to your local environment", () => {
    chai.assert.isDirectory(
      "./.git",
      'no ".git" folder was found within "welcome-completing-assignment". Use "git init" to create one'
    );
  });

  it("has a file named myfile.md", () => {
    chai.assert.isFile(
      "./myfile.md",
      "No file named 'myfile.md' found. Create one in the root of the assignment's directory"
    );
  });
});
