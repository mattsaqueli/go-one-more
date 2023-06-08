
describe('App', () => {
  beforeEach(() => {
    cy.fixture('quote.json').then(quotes => {
      cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {
        statusCode: 200,
        body: quotes
      }).as('getQuote')
    })

    cy.visit('http://localhost:3000/')
  })

  it('should have navigation links', () => {
    cy.get('.nav-section').within(() => {
      cy.contains('Home').should('exist')
      cy.contains('Favorites').should('exist')
      cy.contains('About Us').should('exist')
      cy.contains('Resources').should('exist')
    })
  })

  it('should navigate to the correct pages when the links are clicked', () => {
    cy.get('.nav-section').within(() => {
      cy.contains('Home').click()
      cy.url().should('include', '/')
      
      cy.contains('Favorites').click()
      cy.url().should('include', '/favorites')
      
      cy.contains('About Us').click()
      cy.url().should('include', '/about')
      
      cy.contains('Resources').click()
      cy.url().should('include', '/resources')
    })
  })

  it('should display a quote on the home page', () => {
    cy.get('.quote-section').should('contain', 'True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition.')
  })

  it('should add a quote to favorites when the "Add to Favorites" button is clicked', () => {
    cy.get('.fav-btn').click()
    cy.contains('Favorites').click()
    cy.url().should('include', '/favorites')
    cy.get('.favorites-container').should('contain', 'True will is quiet humility, resilience, and flexibility; the other kind of will is weakness disguised by bluster and ambition.')
  })
})


