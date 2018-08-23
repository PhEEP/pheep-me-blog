# Make that terminal shine 🌟

Make sure you've set up [WSL](/WSL) first.

Do you...

1.  like the way the default `ubuntu` terminal looks or
2.  would you rather have a snazzy terminal your cyberpunk friends would drool over?

![Vaporwave Terminal 🌆](/docs/.vuepress/public/git_lg_terminal.jpg)

Let's go for #2!

## Hyper.js 🌩

Head over to [Hyper.js](https://hyper.is/#installation) and get yourself the latest version. Download and install it, then open that bad boy and let's make some changes. If you're already using [`chocolatey`](https://chocolatey.org/install) then `choco install hyper` works as well, and the package is at the _2.0_ version!.

**N.B** If you want to use Chocolatey, you'll be in Powershell, not the Ubuntu terminal.

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

### Hyper keybinds

- Split terminal horizontally: `ctl + shift + e`
- Split terminal vertically: `ctl + shift + d`
  - The above are both relative to the position of your cursor, so you can have one wide pane on top of two smaller ones

## [Dank Mono](https://dank.sh)

Dank Mono is an amazing typeface for code, it has great weight, delightul cursive interjecdtions, and fluid ligatures. If you can't afford the 💷40 pounds (definitely worth it if you can), a great alternative is [`Fira Code`](https://github.com/tonsky/FiraCode), `choco install firacode`.

### Theme

The default theme is pretty good, but there are so many to choose from! You can browse Hyper.js site or just install the `Night Owl` theme (it's gorgeous, clean, and looks great at the wee hours of the night).

- Open `git bash` (hyper installation doesn't work from WSL... 🤷‍♂)
- type `hyper i hyper-night-owl`
- hit enter
- close and reopen your Hyper terminal to see the changes
- 😿 openly

Browse themes [here](https://hyper.is/themes) to find one that works for you. I also use `hyper-solarized-light` when I'm outside or in a room that is too bright.

## Fish 🐟

[Fish](https://github.com/fish-shell/fish-shell)

You may have heard of Zsh, or Z Shell. It's great and all, but I've fallen in love with Fish. Where `zsh` needed plugins for autocomplete and smart suggestions, Fish gets those right off the bat. It's also proven to be a bit snappier, especially with the right theme (some themes are a tad sluggish...).

```bash
# Install Fish
sudo apt install fish
# If for some strange reason that doesn't work, give this a try
sudo apt-add-repository ppa:fish-shell/release-2
sudo apt-get update
sudo apt-get install fish
```

**N.B.** You should be able to use `sudo apt` for all your installing. `apt` is a revamped version of the `apt-get` package manager for Ubuntu that gained popularity with Ubuntu `16.04`. There are some great explanations at [askubuntu](https://askubuntu.com/questions/445384/what-is-the-difference-between-apt-and-apt-get) and [itsfoss](https://itsfoss.com/apt-vs-apt-get-difference/).

## oh-my-fish (omf) 🍥

[oh-my-fish](https://github.com/oh-my-fish/oh-my-fish)

> Oh My Fish provides core infrastructure to allow you to install packages which extend or modify the look of your shell. It's fast, extensible and easy to use.

It's what you use to extend Fish and it works real good 🤷‍♂

```bash
# Install oh-my-fish
curl -L https://get.oh-my.fish | fish
# Get that simple-ass-prompt
omf install simple-ass-prompt
# Or, if you're feeling sassy, slavic-cat
omf install slavic-cat
# view currently installed themes and a list of available ones
omf theme
# get help
omf -h
```

`simple-ass-prompt` is a great theme to start out with. It gives you good information on where you are in your directory and just enough `git` insight to keep you from committing work to the wrong branch. There are, of course, others and you are most welcome to try them. `omf theme` will list them out and `omf install <theme>` will install the chosen `<theme>`.

I'm currently enjoying `slavic-cat`, a variation on `toaster` with a more proletarian vibe 😹⚒.

**N.B.** In the course of testing themes, you may encounter an error informing you that a config is overwriting some theme. Run `omf doctor` and follow the on-screen instructions. Most often the output includes the following:

```bash
Warning: fish_prompt.fish is overridden.
  fish_config command persists the prompt to ~/.config/fish/functions/fish_prompt.fish
  That file takes precedence over Oh My Fish\'s themes. Remove the file to fix it:
  rm ~/.config/fish/functions/fish_prompt.fish
```

`rm ~/.config/fish/functions/fish_prompt.fish` in your terminal will fix this.

## `exec fish` on bash init

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
