# Control Mapping Platform

## Purpose

The Control Mapping Platform assists security organizations in aligning their defenses with evolving threats and diverse compliance frameworks. It provides a centralized hub for understanding threats, mapping controls, and maintaining compliance with standards like ISO, PCI, NIST, and more. By offering clarity on which controls effectively mitigate specific threats, the platform empowers security professionals to make informed decisions, enhancing cybersecurity resilience.


![Wireframe](https://media.git.generalassemb.ly/user/47378/files/18201dbb-b315-4ed8-9e83-ce498def784f)



![COLOR](https://i.imgur.com/sfgKVVq.png)

## Languages Used
- Node.js
- Express
- MongoDB

## Route Table

| Route                           | Folder/Controller             | EJS View File                   | Purpose/Description                             |
|---------------------------------|-------------------------------|---------------------------------|-------------------------------------------------|
| `/`                             | `views/home.ejs`              | N/A                             | Home Page - Application's Home Page              |
| `/about`                        | `views/about.ejs`             | N/A                             | About Page - About Page                          |
| `/support`                      | `views/support.ejs`           | N/A                             | Support Page - Support Page                      |
| `/threats`                      | `controllers/threatController.js` | `views/threats/threatsForm.ejs` | Threats Form/List - List of Threats and Form for Creating a New Threat   |
| `/threats/:threatID`            | `controllers/threatController.js` | `views/threats/threatsView.ejs` | Viewing Threat Details - View Details of a Threat |
| `/threats/:threatID/edit`       | `controllers/threatController.js` | `views/threats/threatsEdit.ejs` | Editing Threat Details - Edit Details of a Threat |
| `/threats/new`                  | `controllers/threatController.js` | `views/threats/threatsNew.ejs`  | Creating a New Threat - Create a New Threat      |
| `/controls`                     | `controllers/controlController.js`| `views/controls/controlsForm.ejs` | Controls Form/List - List of Controls and Form for Creating a New Control |
| `/controls/:controlID`          | `controllers/controlController.js`| `views/controls/controlsView.ejs` | Viewing Control Details - View Details of a Control |
| `/controls/:controlID/edit`     | `controllers/controlController.js`| `views/controls/controlsEdit.ejs` | Editing Control Details - Edit Details of a Control |
| `/controls/new`                 | `controllers/controlController.js`| `views/controls/controlsNew.ejs`  | Creating a New Control - Create a New Control    |
| `/tools`                        | `views/tools.ejs`              | N/A                             | Tools Page - Tools Page                          |

**Purpose/Description** 


              +-------------------+
              |     Threats       |
              +-------------------+
              | - threatID        |
              | - name            |
              | - description     |
              +-------------------+
                     |
                     |
                     |
                     v
              +-------------------+
              |     Controls      |
              +-------------------+
              | - controlID       |
              | - name            |
              | - description     |
              | - framework       |
              | - implementation  |
              +-------------------+


## MVP Goals

**Schemas and Data Entry:**
- Create two schemas, one for capturing MITRE ATT&CK tactics and techniques and another for defining organizational controls in response to those tactics and techniques.
- Implement a user-friendly data entry interface to input and manage MITRE ATT&CK information and custom control details.
- Create three different sub pages (ABOUT, SUPPORT, TOOL).

## Stretch Goals

**EJS Partials Integration:**
- Use EJS (Embedded JavaScript) partials for rendering common elements, such as headers, footers, and data display sections.


## Dependencies

To install the required dependencies, run the following command:

npm install express mongoose ejs dotenv method-override 
