/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: [
                        'Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400',
                        'Playfair+Display:wght@400;500;600;700;800',
                        'Noto+Serif:wght@400;700',
                        'sans-serif',
                    ],
                },
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-remove-trailing-slashes',
    ],
};
