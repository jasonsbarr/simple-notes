# Simple Notes

## A CLI note-taking app using Node.js

Create short notes with a title and body text using Node.js.

Uses synchronous file I/O methods for simplicity, although I plan to refactor to use asynchronous methods if the need arises, e.g. if a notes file gets large enough to cause a hit on I/O performance.

## Installation

For now you'll just have to clone the repo:

```bash
git clone git@github.com:jasonsbarr/simple-notes.git
```

You can also [download the ZIP file](https://github.com/jasonsbarr/simple-notes/archive/master.zip) from GitHub.

## Usage

```bash
node path/to/app.js command [arguments]
```

### Add

`add` requires two arguments, `--title="[string]"` and `--body="[string]"`.

This will add the note to `notes.json` in the app's root, and will create the file if it doesn't already exist.

Note titles must be unique.

Example:

```bash
node app.js --title="Hello there" --body="This is a note"
```

### Remove

`remove` requires `--id=[number]`. If you don't know the ID of the note you wish to remove, use the `list` command to find it.

Example:

```bash
node app.js remove --id=3
```

### List

`list` takes no arguments and simply prints a list of note IDs and titles to stdout.

```bash
node app.js list
```

### Read

`read` takes the `--id=[number]` argument and prints the note title and content to stdout.

```bash
node app.js read --id=2
```

### Other options

You can also use `--help` and `--version` to get more information about the app and its usage.

### License

Copyright 2019 Jason Barr \<jason@jasonsbarr.com\>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
