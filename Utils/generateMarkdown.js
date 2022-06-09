function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-green.png)`
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributions}
## Tests
${data.tests}
## License
${data.license}
## Questions
If you have any questions, please contact me via email at [${data.email}](mailto:${data.email}) or through github at [${data.github}](https://github.com/${data.github})
`;
};

module.exports = generateMarkdown;
