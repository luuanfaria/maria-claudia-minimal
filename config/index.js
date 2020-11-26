module.exports = {

    author: "https://github.com/luuanfaria",
    siteTitle: "Maria Claudia",
    siteShortTitle: "Maria Claudia", // Used as logo text in header, footer, and splash screen
    siteDescription: "Site profissional Maria Claudia, Professora Adjunto.",
    siteUrl: "https://maria-claudia-minimal.netlify.app/",
    siteLanguage: "pt_BR",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "Maria Claudia", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "",
    shownArticles: 0,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/maria-claudia-castro-52741a18/"
        },
        {
            name: "Lattes",
            url: "http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4796270A6"
        },
    ],
  
    navLinks: {
        menu: [            
            {
                name: "Sobre",
                url: "/#about",
            },
            {
                name: "Projetos",
                url: "/#projects",
            },
            {
                name: "Publicações",
                url: "/publications",
            }
        ],
        button: {
            name: "Contato",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Perfil",
            url: "/perfil"
        }
    ]
}