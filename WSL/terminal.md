# Make that terminal shine 🌟

Do you...

1.  like the way the default `ubuntu` terminal looks or
2.  would you rather have a snazzy terminal your cyberpunk friends would drool over?

Let's go for #2!

## Hyper.js 🌩

Head over to [Hyper.js](https://hyper.is) and get yourself the latest version. Download and install it, then open that bad boy and let's make some changes.

Once the terminal is open, hit `ctl + ,` to open `.hyper.js`. First things first we need to confirm that `bash` will launch on startup.

Make sure your `shell` option is set as follows:

```js
shell: 'C:\\Windows\\System32\\bash.exe',
```

While you're in the settings, change the font-size and font to your preference. I'm currently using the following:

```js
fontSize: 14,
fontFamily: "Dank Mono, Menlo, etc.",
```

[Dank Mono](https://dank.sh) is an amazing typeface for code, it has great weighting, lovely design, and ligature support. It does cost 💷40, so if you need an alternative I have also liked `Fira Code`.

### Theme

The default theme is pretty good, but there are so many to choose from! You can browse Hyper.js site or just install the `Night Owl` theme (it's gorgeous, clean, and looks great at the wee hours of the night).

- Open `git bash` (hyper installation doesn't work from WSL... 🤷‍♂)
- type `hyper i hyper-night-owl`
- hit enter
- close and reopen your Hyper terminal to see the changes
- 😿 openly

## Fish 🐟

You may have heard of Zsh, or Z Shell. It's great and all, but I've fallen in love with Fish. Where `zsh` needed plugins for autocomplete and smart suggestions, Fish gets those right off the bat. It's also proven to be a bit snappier, especially with the right theme (some themes are craaaaaaaaaaazy slow...).

```bash
# Install Fish
commands to install fish
# Install oh-my-fish
commands to install omf
# Get that simple-ass-prompt
omf theme simple-ass-prompt
```

`simple-ass-prompt` is a great theme to start out with. It gives you good information on where you are in your directory and just enough `git` insight to keep you from committing work to the wrong branch. There are, of course, others and you are most welcome to try them, `omf theme` will list them out and `omf install <theme>` to install. The one I'm currently using is `slavic-cat`, a variation on `toaster` with a more proletarian vibe ⚒.

### Set fish as the terminal to run on `bash init`

I use `nano` to edit `~/.bashrc`, if you know VIM, more power to you.

We need to ensure that `fish` is executed as the current shell once `bash` has inited.

`nano ~/.bashrc`

Once in `nano`, navigate with the arrow keys all the way down to the bottom. The following should be there, if it isn't then add it. If it's somewhere else, remove it by deleting those lines and typing the following at the end.

```config
if [ -t 1 ]; then
  exec fish
fi
```

`ctl + X`, say `yes` to save changes, hit Enter
