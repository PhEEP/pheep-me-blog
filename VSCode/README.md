# VSCode, it's what I use

You're likely to have a preference already on how your code editor works and looks for you. Either click the link or search the extension (`ctl + shift + x`) and type what is after the link, e.g. `sdras.night-owl`

## Extensions

Think of these like powerups for your workspace!

### Aesthetics

Make it look how I like 😉, or choose your own...

#### Theme

[**Night Owl**](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl) `sdras.night-owl`

> A VS Code theme for the night owls out there. Works well in the daytime, too, but this theme is fine-tuned for those of us who like to code late into the night. Color choices have taken into consideration what is accessible to people with colorblindness and in low-light circumstances. Decisions were also based on meaningful contrast for reading comprehension and for optimal razzle dazzle. ✨

#### Theme for writing

[**Markdown Theme Kit**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.theme-markdownkit) `ms-vscode.theme-markdownkit`

I switch between the variations here depending on the lighting in the room I'm in. Right now it's dark in here so I'm using _Markdown Editor Dark_.

#### Icons

[**VSCode Great Icons**](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons) `emmanuelbeziat.vscode-great-icons`

> A big pack of icons (100+) for your files.

I love this icon pack, because it's clean and descriptive and works with light and dark themes. There are many different icon packs and you'll likely find one you like better than the others.

### Git

[**Git History**](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) `donjayamanne.githistory`

☝️ title. Basically this will give you great tools to explore the history of whatever repository you're in. I use it mostly to see how code looked like when it worked... 🙄

[**Git Project Manager**](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager) `felipecaputo.git-project-manager`

> Git Project Manager (GPM) is a Microsoft VSCode extension that allows you to open a new window targeting a git repository directly from VSCode window.

If you frequently work within different git repositories (at one point I was bouncing between 3 for one project...), this will index your repos and allow you to open them from your command palette.

[**Git Lens -- Git supercharged**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) `eamodio.gitlens`

Literally everyone has something to say about `gitlens`. It's great, you should probably use it, 'nuff said.

### Utility

[**advanced-new-file**](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file) `patbenatar.advanced-new-file`

> Inspired by Sublime's AdvancedNewFile plugin, this adds the ability to create files anywhere in your workspace.

Super userful tool for creating new files without having to reach for the mouse or type out ridiculous paths. It will index your project and fuzzy search to find a root directory, from there you can specify an optional path followed by a filename with extension to create and open your new file!

I use the following settings, (`ctl+` \` to open User Settings), and I've set `ctl + alt + n` to be my shortcut for it.

```json
"advancedNewFile.exclude": {
    "node_modules": true,
    "node_modules_electron": true,
    "dev": true,
    "dist": true,
    "android": true,
    "bin": true,
    "ios": true,
},
"advancedNewFile.showInformationMessages": true,
"advancedNewFile.convenienceOptions": [
    "last",
    "current",
    "root"
],
```

[**Bracketeer**](https://marketplace.visualstudio.com/items?itemName=pustelto.bracketeer) `pustelto.bracketeer`

Cycle through bracket types with `ctl + shift + alt + k`, never worry about looking for that matching bracket again.

[**change-case**](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) `wmaurer.change-case`

> A wrapper around node-change-case for Visual Studio Code. Quickly change the case of the current selection or current word.

Inheriting someone else's poorly cased variables? Select them all, then change them all to the version you want.

[**Document This**](https://marketplace.visualstudio.com/items?itemName=joelday.docthis) `joelday.docthis`

> "Document This" is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files.

Get better at documenting your code 📋

[**EditorConfig for VS Code**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) `EditorConfig.EditorConfig`

> This plugin attempts to override user/workspace settings with settings found in .editorconfig files. No additional or vscode-specific files are required. As with any EditorConfig plugin, if root=true is not specified, EditorConfig will continue to look for an .editorconfig file outside of the project.

Set your .editorconfig file and share it with everyone else you want to foist your opinion on 😉
