# Control Mapping Platform

![Wireframe](https://media.git.generalassemb.ly/user/47378/files/18201dbb-b315-4ed8-9e83-ce498def784f)

## Languages Used
- Node.js
- Express
- MongoDB

## Route Table

## Route Table

| Route                   | Description                                          |
|-------------------------|------------------------------------------------------|
| `/`                     | Home Page                                            |
| `/about`                | About Page                                           |
| `/support`              | Support Page                                         |
| `/threats`              | List of Threats                                      |
| `/threats/:threatID`    | View Threat Details                                  |
| `/threats/:threatID/controls` | View Controls Mapped to Threat to Mitigate Risks |
| `/threats/new`          | Create a New Threat                                  |
| `/controls/new`         | Create a New Control                                 |
| `/threats/:threatID/edit` | Edit Threat Details                                |
| `/controls/:controlID/edit` | Edit Control Details                               |


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

