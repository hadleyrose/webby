import markdownIt from 'markdown-it';

// set markdown options to parse html, \n, and links
const options = {
    html: true,
    breaks: true,
    linkify: true
};

// create markdownit instance and disable parsing indented text as code
const md = markdownIt(options).disable('code');

// create a centered window element
// and parse contents as markdown
export function centerWindow(children) {
    if (!children) {
        throw new Error('Children must be non-empty string.');
    }
    return `<div class="window" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)">${md.render(children)}</div>`;
};

// create a window element
// and parse contents as markdown
export function window(children) {
    if (!children) {
        throw new Error('Children must be non-empty string.');
    }
    return `<div class="window">${md.render(children)}</div>`;
};