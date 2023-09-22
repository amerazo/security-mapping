# Control Mapping Platform

## Purpose

The Control Mapping Platform assists security organizations in aligning their defenses with evolving threats and diverse compliance frameworks. It provides a centralized hub for understanding threats, mapping controls, and maintaining compliance with standards like ISO, PCI, NIST, and more. By offering clarity on which controls effectively mitigate specific threats, the platform empowers security professionals to make informed decisions, enhancing cybersecurity resilience.


![Wireframe](https://media.git.generalassemb.ly/user/47378/files/18201dbb-b315-4ed8-9e83-ce498def784f)

## Languages Used
- Node.js
- Express
- MongoDB

## Route Table

## Route Table

## Route Table

| Route                            | Description                                         |
|----------------------------------|-----------------------------------------------------|
| `/`                              | Home Page                                           |
| `/about`                         | About Page                                          |
| `/support`                       | Support Page                                        |
| `/threats`                       | List of Threats                                     |
| `/threats/:threatID`             | View Threat Details                                 |
| `/threats/:threatID/controls`    | List Controls for a Threat                          |
| `/threats/:threatID/controls/new`| Create a New Control for a Threat                   |
| `/threats/:threatID/edit`        | Edit Threat Details                                 |
| `/threats/:threatID/controls/:controlID/edit` | Edit Control Details for a Threat |
                    |


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
