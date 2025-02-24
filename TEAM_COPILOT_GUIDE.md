# Team Copilot Guide

This file provides guidelines and best practices for using GitHub Copilot as part of our project workflow.

## Purpose
- Ensure consistent prompts and instructions during development.
- Enable a streamlined coding approach by leveraging Copilot suggestions effectively.

## Best Practices

1. Use Clear Prompts  
   Formulate prompts that are concise and specific.

2. Reference Existing Code  
   When possible, refer Copilot to existing files or functions so it can contextualize suggestions.

3. Review Suggestions Thoroughly  
   Always verify Copilot’s output for correctness and adherence to coding standards.

4. Provide Context  
   If a feature spans multiple files, describe the relationships between them to guide Copilot.

5. Avoid Sensitive Data  
   Never include passwords, tokens, or other secrets in prompts or code.

## Additional Guidelines

1. Adhere to Code Rules  
   - Follow established linting, formatting, and naming conventions.
   - Maintain code consistency across all files.

2. Project Awareness  
   - Review relevant sections of the project to ensure Copilot is provided with correct context.
   - Cross-reference multiple files or components when adding new features to maintain coherence.

3. Leverage README Files  
   - Consult README files in each directory to understand project structure and usage.
   - Keep README files updated to reflect new features or changes.

4. Thorough Documentation  
   - Write doc comments that are both machine-readable (e.g., JSDoc) and understandable by humans.
   - Document major flows and data models in the code where applicable, aiding both team members and automated tools.

## Example Prompting Style
- "Create a new function in logger.js to format log entries as JSON."
- "In tasks.js, add a route that returns a list of tasks with status fields."

## Updating This Guide
If new team members join or we adopt new practices, update this file accordingly. Keep it concise so it remains easy to consult.

