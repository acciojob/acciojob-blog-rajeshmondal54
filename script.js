//your JS code here. If required.
const links = {
    bruteForce: {
        href: "https://acciojob.com/blog/brute-force-vs-optimization",
        article_name: "Brute Force vs. Optimization"
    },
    dsa: {
        href: "https://acciojob.com/blog/dsa-vs-competitive-programming",
        article_name: "DSA vs. Competitive Programming"
    },
    flexbox: {
        href: "https://acciojob.com/blog/complete-guide-on-flexbox",
        article_name: "Complete Guide on FlexBox"
    }
};

Object.values(links).forEach(({ href, article_name }) => {
    cy.contains(article_name)
        .parent() 
        .find('a')
        .should('have.attr', 'href', href);
});