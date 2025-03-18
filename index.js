const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');

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

// HTML template function
function createHtml(content, title, metadata = {}) {
    const metaTags = Object.entries(metadata)
        .map(([key, value]) => `<meta name="${key}" content="${value}">`)
        .join('\n    ');
    
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
            <div class="p-4">
                <div id="nav-mobile" class="mt-4 space-y-2"></div>
            </div>
        </nav>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block w-64 bg-white shadow-lg fixed top-0 left-0 h-full overflow-y-auto" aria-label="Desktop navigation">
            <div class="p-4">
                <div id="nav-desktop" class="mt-4 space-y-2"></div>
            </div>
        </nav>

        <!-- Main content -->
        <main class="flex-1 p-4 md:p-8 md:ml-64">
            <div class="prose mx-auto">
                ${content}
            </div>
        </main>
    </div>

    <script>
        // Build navigation from headings
        document.addEventListener('DOMContentLoaded', () => {
            const headings = document.querySelectorAll('h2'); // Only include h2 headings
            const navMobile = document.getElementById('nav-mobile');
            const navDesktop = document.getElementById('nav-desktop');
            
            headings.forEach(heading => {
                // Create mobile link
                const mobileLink = document.createElement('a');
                mobileLink.href = '#' + heading.id;
                mobileLink.textContent = heading.textContent;
                mobileLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors';
                
                // Create desktop link
                const desktopLink = document.createElement('a');
                desktopLink.href = '#' + heading.id;
                desktopLink.textContent = heading.textContent;
                desktopLink.className = 'block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors';
                
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

// Function to process markdown file
async function processMarkdown(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    
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
    return createHtml(html, title, metadata);
}

// Function to build static site
async function build() {
    try {
        // Create _site directory if it doesn't exist
        await fs.mkdir('_site', { recursive: true });
        
        // Process cursorrules.md
        const cursorRulesHtml = await processMarkdown('docs/cursorrules.md');
        await fs.writeFile('_site/cursorrules.html', cursorRulesHtml);
        
        // Process journal.md if it exists
        try {
            const journalHtml = await processMarkdown('docs/journal.md');
            await fs.writeFile('_site/journal.html', journalHtml);
        } catch (err) {
            console.log('No journal.md found, skipping...');
        }
        
        console.log('Build completed successfully!');
    } catch (err) {
        console.error('Build failed:', err);
        process.exit(1);
    }
}

// Express server setup
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from docs directory
app.use(express.static('docs'));

// Serve raw markdown files
app.get('/cursorrules.md', async (req, res) => {
    try {
        const content = await fs.readFile('docs/cursorrules.md', 'utf8');
        res.setHeader('Content-Type', 'text/markdown');
        res.send(content);
    } catch (err) {
        res.status(500).send('Error reading markdown file');
    }
});

app.get('/journal.md', async (req, res) => {
    try {
        const content = await fs.readFile('docs/journal.md', 'utf8');
        res.setHeader('Content-Type', 'text/markdown');
        res.send(content);
    } catch (err) {
        res.status(500).send('Error reading markdown file');
    }
});

// Serve HTML versions
app.get('/', async (req, res) => {
    try {
        const html = await processMarkdown('docs/cursorrules.md');
        res.send(html);
    } catch (err) {
        res.status(500).send('Error processing markdown');
    }
});

app.get('/journal', async (req, res) => {
    try {
        const html = await processMarkdown('docs/journal.md');
        res.send(html);
    } catch (err) {
        res.status(500).send('Error processing markdown');
    }
});

// Check if we're being run directly
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args[0] === 'build') {
        build();
    } else {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }
}

module.exports = { build, app }; 