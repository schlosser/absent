[Connecting the Dots][article]
==============================

#### Chronic Absenteeism in New York City Public Schools

## Team

- Hari Devaraj, sd2920
- Edo Roth, enr2116
- Dan Schlosser, drs2161
- Samantha Wiener, srw2168
- Robert Ying, ry2242

## Background

We chose to create a [website][article] to tell the story of chronic absenteeism in New York City Public Schools. This narrative is comprised of interviews with professionals in the Department of Education, the Department of Probation, teachers, principals, and administrators. 

We structured the website to reflect our approach to this project, combining anecdotes from our interviews with data from our research. We felt it important to represent the data we found across New York City in a visual format that illustrates some of the factors we took into consideration in our process.  We highlighted the percentage of families on public assistance and school attendance in different zip codes.  We chose to display this data visually to allow readers to engage with the data we had available, in order to encourage them to use our work as a platform for future research.

We didn't feel that the data we collected was conclusive in regards to revealing causal factors for chronic absenteeism. For this reason, we chose to focus our article on content from our interviews. We highlighted a few of the core conclusions we reached and some of the guiding insights from our reporting using striking large, orange pull-quotes.

Finally, we used HTML circles to visualize some of our more shocking statistics.

## Data Analysis:

See the `data` folder for more information on how to run our data analytic scripts on your machine.

## Website: First-Time Setup

Install [npm][npm-install]. Then, install gulp:

```bash
npm install -g gulp  # May require `sudo`
```

## Developing

```bash
npm install            # One time
gem install scss_lint  # One time
gulp serve
```

## Gulp Commands

An overview of Gulp commands available:

### `gulp build`

Builds the site into the `dist` directory.  This includes:

- SCSS w/ linting, sourcemaps and autoprefixing
- JS linting and uglification
- Handlebars to HTML

### `gulp build:optimized`

This is used for distributing an optimized version of the site (for deployment).  It includes everything from `gulp build` as well as:
- SCSS minification
- CSS / JS inline-sourcing 

### `gulp watch`

Watchs for changes in local files and rebuilds parts of the site as necessary, into the `dist` directory.

### `gulp serve`

Runs `gulp watch` in the background, and serves the `dist` directory at `localhost:3000` with automatic reloading using [Browsersync][browsersync].

## About this Repo

### Features

- Install the project in just three commands (see "Developing" below).
- Use [Handlebars.js][handlebars] to keep our HTML organized into templates and partials.
- Use [SCSS][scss] to keep our CSS organized into logical components.
- Use [Autoprefixer][autoprefixer] to automatically insert browser prefixes where necessary to handle cross browser compatibility.
- Use [Browsersync][browsersync] to automatically launch a development version of our website, reload the page whenever we change the HTML, and inject changes to CSS, JavaScript, and images with needing to reload.
- Use [HTML Minifier][htmlmin], [CSSNano][cssnano], [UglifyJS][uglifyjs], and [ImageMin][imagemin] to compress and optimize our HTML, CSS, JavaScript, and images, respectively.
- Use [SCSS-Lint][scss-lint], [JSHint][jshint], and [JSCS][jscs] to perform [linting][linting] and style checking on our SCSS and JavaScript files.

All with one command from the terminal:

```bash
gulp serve
```

### Structure

```bash
├── Gulpfile.js       # Controls Gulp, used for building the website
├── README.md         # This file
├── data.yml          # Metadata associated with the site.
├── dist/             # Gulp builds the static site into this directory
├── package.json      # Dependencies
└── src/              # All source code
    ├── font/         # Font files
    ├── img/          # Images and SVGs
    ├── js/           # Javascript libraries and scripts
    ├── partials/     # Handlebars HTML partials that are included / extended
    ├── sass/         # Stylesheets
    └── templates/    # Handlebars HTML files, one per page on the site.
```

[article]: https://absent.schlosser.io/
[autoprefixer]: https://css-tricks.com/autoprefixer/
[browsersync]: http://www.browsersync.io/
[cssnano]: http://cssnano.co/
[gulp]: http://gulpjs.com/
[handlebars]: http://handlebarsjs.com/
[htmlmin]: https://github.com/kangax/html-minifier
[imagemin]: https://github.com/imagemin/imagemin
[jscs]: http://jscs.info/
[jshint]: http://jshint.com/
[linting]: https://en.wikipedia.org/wiki/Lint_%28software%29
[npm-install]: https://nodejs.org/en/download/
[uglifyjs]: https://github.com/mishoo/UglifyJS
[scss]: http://sass-lang.com/
[scss-lint]: https://github.com/brigade/scss-lint
