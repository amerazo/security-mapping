// SET UP
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const db = require('./models');
const app = express();
app.use(methodOverride('_method'));
const ExcelJS = require('exceljs'); 
//IMPORT MAPPING SCHEMA
const Mapping = require('./models/Mapping');

// IMPORT THE CONTROLLERS
const threatController = require('./controllers/threatController');
const controlController = require('./controllers/controlController');

//MIDDLEWARE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//HOME ROUTE
// http://localhost:2000/
app.get('/', (req, res) => {
  res.render('home'); 
});


// USE THE CONTROLLERS
app.use('/', threatController);
app.use('/controls', controlController);

//SUPPORT
//http://localhost:2000/support
app.get('/support', (req, res) => {
  res.render('support'); 
});

//SUPPORT
//http://localhost:2000/about
app.get('/about', (req, res) => {
  res.render('about'); 
});

//TOOL GET
app.get('/tool', async (req, res) => {
   // GET LIST OF CONTROL
    const controls = await db.Control.find({}); 
    // GET LIST OF THREATS 
    const threats = await db.Threat.find({}); 
    // GET LIST OF ASSOCIATIONS && POPULATE WITH THREAT && CONTROL DATA
    const associations = await Mapping.find({})
    // POPULATE THREAT WITH THE 'NAME' FIELD
    .populate('threat', 'name') 
    // POPULATE CONTROL WITH THE 'controlName' FIELD
    .populate('control', 'controlName'); 
    // RENDER 'TOOL.EJS' TEMPLATE && PASS THREATS, CONTROLS && ASSOCIATION VARS
    res.render('tool', { threats, controls, associations });
});


// TOOL POST
app.post('/tool', async (req, res) => {
const { threatId, controlId } = req.body;
// CRETAE A NEW MAPPING ENTRY IN DB 
const mapping = await Mapping.create({ threat: threatId, control: controlId });
// GO TO TOOL PAGE TO SHOW ENTRY
res.redirect('/tool');
});

// EXPORT DATA TO EXCEL ROUTE
app.get('/excel', async (req, res) => {
// GET THE DATA TO EXPORT 'ASSOCIATIONS'
const associations = await Mapping.find({})
.populate('threat', 'name')
.populate('control', 'controlName');
// CREATE NEW EXCEL WORKSHEET && WORKBOOK
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Associations');

// COLUMN HEADERS
worksheet.columns = [
  { header: 'Threat Name', key: 'threatName', width: 20 },
  { header: 'Threat ID', key: 'threatId', width: 20 },
  { header: 'Control Name', key: 'controlName', width: 20 },
  { header: 'Control ID', key: 'controlId', width: 20 },
];

// POPULATE WORKSHEET W/ DATA
associations.forEach((association) => {
worksheet.addRow({
  threatName: association.threat.name,
  threatId: association.threat._id.toString(),
  controlName: association.control.controlName,
  controlId: association.control._id.toString(),
});
});

// RESPONSE HEADERS FOR EXCEL DOWNLOAD
res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
res.setHeader('Content-Disposition', 'attachment; filename=associations.xlsx');

// PIPE THE WORKBOOK TO THE RESPONSE
  await workbook.xlsx.write(res);
  res.end();
});

//PORT 
app.listen(process.env.PORT, function () {
  console.log('LISTENING ON PORT', process.env.PORT);
});
