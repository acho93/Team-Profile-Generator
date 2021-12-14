const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArray = []; 

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the manager's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: idInput => {
                if (isNaN(idInput)) {
                  console.log("Please enter a numerical ID!");  
                  return false;
                } else { 
                  return true;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: emailInput => {
                if (String(emailInput).toLowerCase().match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                  return true;
                } else {
                  console.log("Please enter a valid email!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if  (isNaN(officeInput)) {
                    console.log("Please enter a numerical office number!")
                    return false;
                } else { 
                  return true;
                }
            }
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
=========================
Add Employees to the Team
=========================
`);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the employee's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: idInput => {
                if (isNaN(idInput)) {
                  console.log("Please enter a numerical ID!");  
                  return false;
                } else { 
                  return true;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: emailInput => {
                if (String(emailInput).toLowerCase().match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                  return true;
                } else {
                  console.log("Please enter a valid email!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub?",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                  } else {
                    console.log("Please enter the engineer's GitHub!");
                    return false;
                  }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                  } else {
                    console.log("Please enter the intern's school!");
                    return false;
                  }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: "Would you like to add more employees?",
            default: false
        },
    ])
    
};

addManager()
    .then