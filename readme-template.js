const readmeTemplate = () => {
  return `
    # ${titleInput}
    ${licenseBadge}

    ## Project Description
    ${description}

    ## Table Of Contents
    - ${installation} (#installation)
    - ${usage} (#Usage)
    - ${license} (#License)
    - ${contributing} (#Contributing)
    - 

    ## Installation Instructions
    ${installation} 

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing 
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    For more information or questions about the project, contact ${email} or DM me on GitHub: ${githubUser}.
    `;
};

module.exports = readmeTemplate;
