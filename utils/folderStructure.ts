import { IFileOrFolder } from "../interfaces/index";

export const folderStructure: IFileOrFolder[] = [
  { path: "src", type: "folder" },
  { path: "src/controllers", type: "folder" },
  { path: "src/routes", type: "folder" },
  { path: "src/middleware", type: "folder" },
  { path: "src/utils", type: "folder" },
  { path: "src/db", type: "folder" },
  { path: "src/db/models", type: "folder" },
  {
    path: "src/app.js",
    type: "file",
    content: `
const express = require('express');
const app = express();
app.use(express.json());

// Middleware example
app.use(require('./middleware/middleware'));

// Routes example
app.use('/api/users', require('./routes/userRoutes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

module.exports = app;
    `,
  },
  {
    path: "src/routes/userRoutes.js",
    type: "file",
    content: `
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route handlers
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;
    `,
  },
  {
    path: "src/controllers/userController.js",
    type: "file",
    content: `
module.exports = {
  getUsers: (req, res) => {
    res.send('Here are all the users! 👥');
  },
  
  getUserById: (req, res) => {
    const { id } = req.params;
    res.send(\`You requested user with ID: \${id} 🆔\`);
  },

  createUser: (req, res) => {
    const { name } = req.body;
    res.send(\`User \${name} has been created! 🎉\`);
  }
};
    `,
  },
  {
    path: "src/middleware/middleware.js",
    type: "file",
    content: `
module.exports = (req, res, next) => {
  console.log('Middleware: Just checking if you’re still awake...');
  next();
};
    `,
  },
];
