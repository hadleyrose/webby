export default function centerWindow(children) {
    if (!children) {
        throw new Error('Children must be non-empty string.');
    }
    return `<div class="window" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)">${children}</div>`;
};