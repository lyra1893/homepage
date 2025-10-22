/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
    semi: false,
    singleQuote: true,
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-tailwindcss',
    ],
    tailwindFunctions: ['clsx', 'cn', 'cva'],
    tailwindStylesheet: 'resources/css/app.css',
    tabWidth: 4,
    overrides: [
        {
            files: '**/*.yml',
            options: {
                singleQuote: false,
                tabWidth: 2,
            },
        },
    ],
}
