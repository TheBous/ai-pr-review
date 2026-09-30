// Shared output-language rule appended to every prompt that produces text the
// user reads. The prompts themselves stay in English; only the language of the
// generated content changes. Structural tokens the UI depends on stay English.
export const OUTPUT_LANGUAGE_INSTRUCTION = `## Output language

Write ALL human-readable text in Italian: titles, subtitles, overviews, narratives, annotations, callout labels and text, file descriptions, review tips, findings and chat answers. Diagram labels (Mermaid node and edge text) are also in Italian.

Keep in English, exactly as specified above: JSON keys, enum values (importance, callout type, status), file paths, code identifiers, and Mermaid syntax.`;
