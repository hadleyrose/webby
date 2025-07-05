import markdownIt from 'markdown-it';

// set markdown options to parse html, \n, and links
const options = {
    html: true,
    breaks: true,
    linkify: true
};

// create markdownit instance and disable parsing indented text as code
const md = markdownIt(options).disable('code');

// create a window element
// and parse contents as markdown
export function window(content, titleBarTitle = 'test', center = true, type = "inactive") {
    if (!content) {
        throw new Error('Content must be non-empty string.');
    }
    var style = (center) ? "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)":""
    const output = `
    <div class="window" style="${style}">
        <div class="title-bar ${type}">
            <div class="title-bar-text">${titleBarTitle}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
            ${md.render(content)}
            <section class="field-row" style="justify-content: flex-end">
                <button>OK</button>
                <button>Cancel</button>
            </section>
        </div>
    </div>
    `;
    return output;
};
