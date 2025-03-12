# Agent Driven Development Documentation

This directory contains the source files for the Agent Driven Development (ADD) documentation site, which is published using GitHub Pages.

## Structure

- `_config.yml` - Jekyll configuration
- `index.md` - Home page
- `methodology.md` - Overview of the ADD methodology
- `phases.md` - Detailed explanation of development phases
- `agent-editor.md` - Information about the Agent-Editor relationship

## Local Development

To run this site locally:

1. Install Jekyll and Bundler:

   ```
   gem install jekyll bundler
   ```

2. Navigate to the docs directory:

   ```
   cd docs
   ```

3. Install dependencies:

   ```
   bundle install
   ```

4. Start the local server:

   ```
   bundle exec jekyll serve
   ```

5. Open your browser to `http://localhost:4000`

## Publishing

The site is automatically published when changes are pushed to the main branch. GitHub Pages will build and deploy the site using Jekyll.
