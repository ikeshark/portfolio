const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports  = {
    plugins: [
        tailwind,
        autoprefixer,
        process.env.NODE_ENV === 'production' 
            ? cssnano({ preset: 'default' })
            : null,
        process.env.NODE_ENV === 'production'
            ? purgecss({
                content: ['*.html'],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            })
            : null
    ]
}