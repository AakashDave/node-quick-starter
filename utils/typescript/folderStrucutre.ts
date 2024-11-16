import { FileSystemItemType } from "../../enums";
import { IFileOrFolder } from "../../interfaces/index";

export const folderStructure : IFileOrFolder[] = [
    { path: ".env" , type: FileSystemItemType.File },
    { path: '__tests__', type: FileSystemItemType.Folder },
    { path: 'src', type: FileSystemItemType.Folder },
    { path: "src/controllers", type: FileSystemItemType.Folder },
    { path: "src/routes", type: FileSystemItemType.Folder },
    { path: "src/middlewares", type: FileSystemItemType.Folder },
    { path: "src/utils", type: FileSystemItemType.Folder },
    { path: "src/config", type: FileSystemItemType.Folder },
    { path: "src/db", type: FileSystemItemType.Folder },
    { path: "src/db/models", type: FileSystemItemType.Folder },
    { path: "src/services", type: FileSystemItemType.Folder },
    { path: "src/repositories", type: FileSystemItemType.Folder },
    { path: "src/interfaces", type: FileSystemItemType.Folder },
    { path: "src/validators", type: FileSystemItemType.Folder },
    { path: "src/views", type: FileSystemItemType.Folder },
    {
        path: "src/index.ts",
        type: FileSystemItemType.File,
        content: `
            import app from './app';
    
            const PORT = process.env.PORT || 3000;
    
            app.listen(PORT, () => {
              console.log(\`Server is running on http://localhost:\${PORT}\`);
            });
            `
    },
    {
        path: 'src/app.ts',
        type: FileSystemItemType.File,
        content: `
        import express, { Application } from 'express';
        import routes from './routes';

        const app: Application = express();

        // Middleware
        app.use(express.json());

        // Routes
        app.use('/api', routes);

        export default app;
        `
    },
    {
        path: 'src/routes/index.ts',
        type: FileSystemItemType.File,
        content: `
        import { Router } from 'express';

        const router = Router();
        
        // router.get('/dashboard', dashboardController);

        export default router;`
    },
    {
        path: 'tsconfig.json',
        type: FileSystemItemType.File,
        content: `
            {
                "compilerOptions": {
                    "target": "ES2020",
                    "module": "CommonJS",
                    "strict": true,
                    "esModuleInterop": true,
                    "skipLibCheck": true,
                    "outDir": "./dist",
                    "rootDir": "./src"
                },
                "include": ["src/**/*.ts"],
                "exclude": ["node_modules", "dist"]
            }
        `
    },
    { 
        path: ".gitignore" ,
        type: FileSystemItemType.File,
        content: `
            # Node.js dependencies
            node_modules/

            # Logs
            logs/
            *.log
            npm-debug.log*
            yarn-debug.log*
            yarn-error.log*

            # Environment variables
            .env

            # Compiled output
            dist/
            build/
            *.js
            *.js.map

            # TypeScript specific
            *.tsbuildinfo

            # Debugging files
            *.swp
            *.swo
            .vscode/
            .idea/

            # System files
            .DS_Store
            Thumbs.db

            # Tests
            coverage/

            # Temporary files
            *.tmp
            *.temp
        `
    },

      
] 