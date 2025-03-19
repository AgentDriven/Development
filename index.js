const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');

// Load package.json
const packageJson = require('./package.json');

// Initialize markdown-it with options
const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
}).use(anchor, {
    permalink: false,
    level: 2,
    slugify: s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')
});

// Function to get all markdown files recursively
async function getMarkdownFiles(dir = 'docs') {
    try {
        const files = await fsPromises.readdir(dir);
        const markdownFiles = [];
        
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = await fsPromises.stat(fullPath);
            
            if (stat.isDirectory()) {
                const subFiles = await getMarkdownFiles(fullPath);
                markdownFiles.push(...subFiles);
            } else if (file.endsWith('.md')) {
                const relativePath = path.relative('docs', fullPath);
                markdownFiles.push(relativePath);
            }
        }
        
        return markdownFiles;
    } catch (err) {
        console.error('Error reading directory:', err);
        return [];
    }
}

// Function to process markdown file
async function processMarkdown(filePath) {
    const content = await fsPromises.readFile(filePath, 'utf8');
    
    // Extract metadata from HTML comments
    const metadataMatch = content.match(/<!--\s*([\s\S]*?)\s*-->/);
    const metadata = {};
    
    if (metadataMatch) {
        const metadataContent = metadataMatch[1];
        metadataContent.split('\n').forEach(line => {
            const [key, value] = line.split(':').map(s => s.trim());
            if (key && value) {
                metadata[key] = value;
            }
        });
    }
    
    // Remove frontmatter and metadata comments
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');
    const processedContent = contentWithoutFrontmatter.replace(/<!--[\s\S]*?-->/g, '');
    
    // Extract title from first h1 heading if not in metadata
    const titleMatch = processedContent.match(/^#\s+(.+)$/m);
    const title = metadata.title || (titleMatch ? titleMatch[1] : 'Documentation');
    
    const html = md.render(processedContent);
    return createHtml(html, title, metadata, path.basename(filePath));
}

// HTML template function
async function createHtml(content, title, metadata = {}, currentFile = '') {
    const metaTags = Object.entries(metadata)
        .map(([key, value]) => `<meta name="${key}" content="${value}">`)
        .join('\n    ');

    // Extract GitHub URL from homepage or repository field
    const githubUrl = packageJson.homepage ||
        (packageJson.repository && packageJson.repository.url) ||
        'https://github.com/AgentDriven';

    // Get all markdown files
    const files = await getMarkdownFiles();

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${metaTags}
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .prose {
            max-width: 65ch;
            color: #374151;
        }
        .prose h1 {
            font-size: 2.25em;
            margin-top: 0;
            margin-bottom: 0.8888889em;
            line-height: 1.1111111;
            color: #111827;
        }
        .prose h2 {
            font-size: 1.5em;
            margin-top: 2em;
            margin-bottom: 1em;
            line-height: 1.3333333;
            color: #111827;
        }
        .prose p {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
            line-height: 1.75;
        }
        .prose ul {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
            padding-left: 1.625em;
            list-style-type: disc;
        }
        .prose li {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
        .prose blockquote {
            margin-top: 1.6em;
            margin-bottom: 1.6em;
            padding: 0em 1em;
            font-style: italic;
            border-left-width: 0.25rem;
            border-left-color: #e5e7eb;
            quotes: "\\201C""\\201D""\\2018""\\2019";
        }
        .prose code {
            color: #111827;
            font-weight: 600;
            font-size: 0.875em;
            background-color: #f3f4f6;
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
        }
        .prose pre {
            position: relative;
            color: #e5e7eb;
            background-color: #1f2937;
            overflow-x: auto;
            font-size: 0.875em;
            line-height: 1.7142857;
            margin-top: 1.7142857em;
            margin-bottom: 1.7142857em;
            border-radius: 0.375rem;
            padding: 0.8571429em 1.1428571em;
        }
        .prose pre code {
            background-color: transparent;
            border-width: 0;
            border-radius: 0;
            padding: 0;
            font-weight: 400;
            color: inherit;
            font-size: inherit;
            font-family: inherit;
            line-height: inherit;
        }
        .prose hr {
            border-color: #e5e7eb;
            border-top-width: 1px;
            margin-top: 3em;
            margin-bottom: 3em;
        }
        .prose strong {
            color: #111827;
            font-weight: 600;
        }
        .prose a {
            color: #2563eb;
            text-decoration: underline;
            font-weight: 500;
        }
        .prose ol {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
            padding-left: 1.625em;
            list-style-type: decimal;
        }
        .prose table {
            width: 100%;
            table-layout: auto;
            text-align: left;
            margin-top: 2em;
            margin-bottom: 2em;
            font-size: 0.875em;
            line-height: 1.7142857;
        }
        .prose thead {
            border-bottom-color: #e5e7eb;
            border-bottom-width: 1px;
        }
        .prose thead th {
            padding-right: 0.5714286em;
            padding-bottom: 0.5714286em;
            padding-left: 0.5714286em;
            font-weight: 600;
            color: #111827;
        }
        .prose tbody tr {
            border-bottom-color: #e5e7eb;
            border-bottom-width: 1px;
        }
        .prose tbody tr:nth-child(2n) {
            background-color: #f9fafb;
        }
        .prose tbody td {
            padding: 0.5714286em;
        }
        .copy-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.5rem;
            background-color: #374151;
            color: #e5e7eb;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .prose pre:hover .copy-button {
            opacity: 1;
        }
        .copy-button:hover {
            background-color: #4b5563;
        }
        .copy-button.copied {
            background-color: #059669;
        }
    </style>
</head>
<body class="bg-gray-50">
    <div class="min-h-screen flex flex-col md:flex-row">
        <!-- Mobile Navigation -->
        <nav class="md:hidden bg-white shadow-lg" aria-label="Mobile navigation">
            <div class="flex items-center justify-between p-4">
                <div class="flex items-center space-x-3">
                    <button id="mobile-menu-button" class="text-gray-600 hover:text-gray-900 focus:outline-none" aria-label="Toggle menu">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div>
                        <h1 class="text-lg font-bold text-gray-900">ADD</h1>
                        <p class="text-xs text-gray-500">Agent Driven Development</p>
                    </div>
                </div>
                <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
            <div id="nav-mobile" class="hidden mt-4 space-y-2 px-4 pb-4"></div>
        </nav>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block w-64 md:w-72 lg:w-80 xl:w-96 bg-white shadow-lg fixed top-0 left-0 h-full overflow-y-auto" aria-label="Desktop navigation">
            <div class="p-4">
                <div class="flex items-center space-x-3 mb-6">
                    <svg class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>
                        <h1 class="text-lg font-bold text-gray-900">ADD</h1>
                        <p class="text-xs text-gray-500">Agent Driven Development</p>
                    </div>
                </div>
                <div id="nav-desktop" class="mt-4 space-y-2"></div>
                <div class="mt-8 pt-4 border-t border-gray-200">
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <span>v${packageJson.version}</span>
                        <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main content -->
        <main class="flex-1 p-4 md:p-8 md:ml-64 md:ml-72 lg:ml-80 xl:ml-96">
            <div class="prose mx-auto">
                ${content}
            </div>
        </main>
    </div>

    <script>
        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileNav = document.getElementById('nav-mobile');
            
            mobileMenuButton.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
            });

            // Build navigation from headings
            const headings = document.querySelectorAll('h2'); // Only include h2 headings
            const navMobile = document.getElementById('nav-mobile');
            const navDesktop = document.getElementById('nav-desktop');
            
            // Add file links
            const currentFile = '${currentFile}';
            const files = ${JSON.stringify(await getMarkdownFiles())};
            
            files.forEach(file => {
                const isCurrentFile = file === currentFile;
                const fileName = file.replace('.md', '');
                const displayName = fileName.split('/').pop().charAt(0).toUpperCase() + fileName.split('/').pop().slice(1);
                
                // Create mobile file link
                const mobileFileLink = document.createElement('a');
                mobileFileLink.href = fileName === 'index' ? './' : fileName + '.html';
                mobileFileLink.textContent = displayName;
                mobileFileLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors' + 
                    (isCurrentFile ? ' bg-gray-100' : '');
                
                // Create desktop file link
                const desktopFileLink = document.createElement('a');
                desktopFileLink.href = fileName === 'index' ? './' : fileName + '.html';
                desktopFileLink.textContent = displayName;
                desktopFileLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors' + 
                    (isCurrentFile ? ' bg-gray-100' : '');
                
                navMobile.appendChild(mobileFileLink);
                navDesktop.appendChild(desktopFileLink);
                
                // Only add heading links for current file
                if (isCurrentFile) {
                    headings.forEach(heading => {
                        // Create mobile heading link
                        const mobileLink = document.createElement('a');
                        mobileLink.href = (fileName === 'index' ? '' : fileName + '.html') + '#' + heading.id;
                        mobileLink.textContent = heading.textContent;
                        mobileLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors pl-8';
                        
                        // Create desktop heading link
                        const desktopLink = document.createElement('a');
                        desktopLink.href = (fileName === 'index' ? '' : fileName + '.html') + '#' + heading.id;
                        desktopLink.textContent = heading.textContent;
                        desktopLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors pl-8';
                        
                        // Add active state on scroll
                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    // Remove active state from all links
                                    document.querySelectorAll('#nav-mobile a, #nav-desktop a').forEach(a => {
                                        a.classList.remove('bg-gray-100');
                                    });
                                    // Add active state to both links
                                    mobileLink.classList.add('bg-gray-100');
                                    desktopLink.classList.add('bg-gray-100');
                                }
                            });
                        }, { threshold: 0.5 });
                        
                        observer.observe(heading);
                        navMobile.appendChild(mobileLink);
                        navDesktop.appendChild(desktopLink);
                    });
                }
            });

            // Add copy buttons to code blocks
            document.querySelectorAll('pre').forEach(block => {
                const button = document.createElement('button');
                button.className = 'copy-button';
                button.textContent = 'Copy';
                block.appendChild(button);
                
                button.addEventListener('click', async () => {
                    const code = block.querySelector('code').textContent;
                    await navigator.clipboard.writeText(code);
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                });
            });
        });
    </script>
</body>
</html>`;
}

// Function to build static site
async function build() {
    try {
        // Create _site directory if it doesn't exist
        await fsPromises.mkdir('_site', { recursive: true });
        
        // Get all markdown files recursively
        const files = await getMarkdownFiles();
        
        // Process each markdown file
        for (const file of files) {
            // Process markdown to HTML
            const html = await processMarkdown(path.join('docs', file));
            const outputPath = path.join('_site', file.replace('.md', '.html'));
            
            // Create necessary directories
            await fsPromises.mkdir(path.dirname(outputPath), { recursive: true });
            await fsPromises.writeFile(outputPath, html);
            
            // Copy markdown file
            const mdOutputPath = path.join('_site', file);
            await fsPromises.mkdir(path.dirname(mdOutputPath), { recursive: true });
            await fsPromises.copyFile(path.join('docs', file), mdOutputPath);
        }

        // Create a .nojekyll file to prevent GitHub Pages from using Jekyll
        await fsPromises.writeFile(path.join('_site', '.nojekyll'), '');
        
        console.log('Build completed successfully!');
    } catch (err) {
        console.error('Build failed:', err);
        process.exit(1);
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    const command = args[0] || 'serve';
    const port = process.env.PORT || 3000;

    if (command === 'build') {
        build();
    } else {
        // Build first, then serve
        build().then(() => {
            const app = express();
            
            // Serve static files from _site directory
            app.use(express.static('_site'));
            
            // Handle HTML requests
            app.get('/*', (req, res) => {
                const filePath = req.path.endsWith('/') ? req.path + 'index.html' : req.path;
                const htmlPath = filePath.endsWith('.html') ? filePath : filePath + '.html';
                const fullPath = path.join(__dirname, '_site', htmlPath);
                
                // Try to serve the HTML file
                if (fs.existsSync(fullPath)) {
                    res.sendFile(fullPath);
                } else {
                    // Try to serve index.html for the path
                    const indexPath = path.join(__dirname, '_site', path.dirname(htmlPath), 'index.html');
                    if (fs.existsSync(indexPath)) {
                        res.sendFile(indexPath);
                    } else {
                        res.status(404).sendFile(path.join(__dirname, '_site', '404.html'));
                    }
                }
            });
            
            app.listen(port, () => {
                console.log(`Server running at http://localhost:${port}`);
            });
        });
    }
}

module.exports = { build }; 