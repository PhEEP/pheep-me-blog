# VSCode, it's what I use

You're likely to have a preference already on how your code editor works and looks for you. Either click the link or search the extension (`ctl + shift + x`) and type what is after the link, e.g. `sdras.night-owl`

## Extensions

Think of these like powerups for your workspace!

## Aesthetics

Make it look how I like 😉, or choose your own...

### Night Owl

[**sdras.night-owl**](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)

> A VS Code theme for the night owls out there. Works well in the daytime, too, but this theme is fine-tuned for those of us who like to code late into the night. Color choices have taken into consideration what is accessible to people with colorblindness and in low-light circumstances. Decisions were also based on meaningful contrast for reading comprehension and for optimal razzle dazzle. ✨

This is my default theme for most of my work. Love it 😻

### Markdown Theme Kit

[**ms-vscode.theme-markdownkit**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.theme-markdownkit)

I switch between the variations here depending on the lighting in the room I'm in. Right now it's dark in here so I'm using _Markdown Editor Dark_.

### VSCode Great Icons

[**emmanuelbeziat.vscode-great-icons**](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)

> A big pack of icons (100+) for your files.

I love this icon pack, because it's clean and descriptive and works with light and dark themes. There are many different icon packs and you'll likely find one you like better than the others.

## Git

If you use `git`, and you probably are, then these extensions are super helpful.

### Git History

[**donjayamanne.githistory**](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

☝️ title. Basically this will give you great tools to explore the history of whatever repository you're in. I use it mostly to see how code looked like when it worked... 🙄

### Git Project Manager

[**felipecaputo.git-project-manager**](https://marketplace.visualstudio.com/items?itemName=felipecaputo.git-project-manager)

> Git Project Manager (GPM) is a Microsoft VSCode extension that allows you to open a new window targeting a git repository directly from VSCode window.

If you frequently work within different git repositories (at one point I was bouncing between 3 for one project...), this will index your repos and allow you to open them from your command palette. Be sure to set the directories within which to look for git projects in your user settings.

```json
// my settings
"gitProjectManager.baseProjectsFolders": [
    "C:/Users/phili/Dev",
    "C:/Users/phili/Dev/PheepMe/Blog", /** 👈 this blog **/
    "C:/Users/phili/Dev/Work/Work-repo-one",
    "C:/Users/phili/Dev/Work/Work-repo-two",
    "C:/Users/phili/Dev/Work/Work-repo-three",
],
```

### Git Lens -- Git supercharged

[**eamodio.gitlens**](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

> GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.

Literally everyone has something to say about `gitlens`. It's great, you should probably use it. I love finding a `git blame` from the dark ages and having a new scape🐐.

```json
// my settings
"gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true
},
"gitlens.keymap": "chorded",
```

## Utility

### advanced-new-file

[**patbenatar.advanced-new-file**](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)

> Inspired by Sublime's AdvancedNewFile plugin, this adds the ability to create files anywhere in your workspace.

Super userful tool for creating new files without having to reach for the mouse or type out ridiculous paths. It will index your project and fuzzy search to find a root directory, from there you can specify an optional path followed by a filename with extension to create and open your new file!

I've set `ctl + alt + n` to be my shortcut

```json
// my settings
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

### Bracketeer

[**pustelto.bracketeer**](https://marketplace.visualstudio.com/items?itemName=pustelto.bracketeer)

Cycle through bracket types with `ctl + shift + alt + k`, never worry about looking for that matching bracket again.

### change-case

[**wmaurer.change-case**](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)

> A wrapper around node-change-case for Visual Studio Code. Quickly change the case of the current selection or current word.

Inheriting someone else's poorly cased variables? Select them all, then change them all to the version you want.

### Document This

[**joelday.docthis**](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)

> "Document This" is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files.

Get better at documenting your code 📋

### EditorConfig

[**EditorConfig for VS Code**](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

> This plugin attempts to override user/workspace settings with settings found in .editorconfig files. No additional or vscode-specific files are required. As with any EditorConfig plugin, if root=true is not specified, EditorConfig will continue to look for an .editorconfig file outside of the project.

Set your .editorconfig file and share it with everyone else you want to foist your opinion on 😉

```yaml
# my settings
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.{css,scss,less}]
indent_size = 2
```

### ES7 React/Redux/GraphQL/React-Native snippets

[dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

Follow the link, read the snippets info, wonder where this was everytime you're rewriting boilerplate.
