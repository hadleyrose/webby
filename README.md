# `development` branch README

This is the `development` branch for my website [hadleyrose.io](http://hadleyrose.io), where I'll test and troubleshoot new features and updates. 

Below, I'll track my next steps and ideas for the site.

## TODOs
~~- [ ] Create shortcode for titlebar html~~

~~- [ ] Create shortcode for window body html~~ **or integrate into existing shortcode**

> [!NOTE]
>
> While testing the titlebar shortcode with my existing window shortcode, I realized that the titlebar would always end up nested within the window body.
>
> I wanted to find a way to provide the shortcode with title data without having as much code as the [original html](https://github.com/hadleyrose/webby/blob/b887212d8e325a467fe9e917f2e2573ac005629a/src/index.md?plain=1#L7-L23).
>
> I also wanted to define this information in the page itself, while writing, and not have to add it to and pull it from the page front matter.
>
> I needed to be able to define variables in the shortcode itself.
>
> I found [this post](https://css-irl.info/a-versatile-markdown-shortcode-for-eleventy/), demonstrating the use of positional arguments in a shortcode.
>
> It took me a few tests to realize that the content is the first value being read, then the positional arguments.
>
> I was then able to condense the window shortcodes into a [single shortcode](https://github.com/hadleyrose/webby/blob/0ffa4776d976ccaa6703129fcd3355f51e9ec044/src/js/shortcodes/window.js#L15).

- [ ] Update shortcode to opt in and define window buttons
- [ ] Add in drafted extra css
- [ ] Add in drafted three.js code and assets



