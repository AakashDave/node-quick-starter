import { FileSystemItemType } from "../../enums";
import { IFileOrFolder } from "../../interfaces/index";

export const folderStructure: IFileOrFolder[] = [
  { path: "src", type: FileSystemItemType.Folder },
  { path: "src/controllers", type: FileSystemItemType.Folder },
  { path: "src/routes", type: FileSystemItemType.Folder },
  { path: "src/middlewares", type: FileSystemItemType.Folder },
  { path: "src/utils", type: FileSystemItemType.Folder },
  { path: "src/db", type: FileSystemItemType.Folder },
  { path: "src/db/models", type: FileSystemItemType.Folder },
  {
    path: "src/app.js",
    type: FileSystemItemType.File,
    content: `
const express = require('express');
const app = express();
app.use(express.json());

// Middleware example
app.use(require('./middlewares/middleware'));

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
    type: FileSystemItemType.File,
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
    type: FileSystemItemType.File,
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
    path: "src/middlewares/middleware.js",
    type: FileSystemItemType.File,
    content: `
module.exports = (req, res, next) => {
  console.log('Middleware: Just checking if you’re still awake...');
  next();
};
    `,
  },
];
