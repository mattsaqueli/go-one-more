describe('Favorites', () => {
  beforeEach(() => {
    cy.fixture('favquote.json').then(quote => {
      cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {
        statusCode: 200,
        body: quote
      }).as('getQuote')
    })

    cy.visit('http://localhost:3000/favorites')
    cy.wait('@getQuote')
  })

  it('should have navigation links', () => {
    cy.get('.nav-section').should('contain', 'Home')
    cy.get('.nav-section').should('contain', 'Favorites')
    cy.get('.nav-section').should('contain', 'About Us')
    cy.get('.nav-section').should('contain', 'Resources')
  })

  it('should display "No quotes have been favorited...yet." when favorites is empty', () => {
    cy.get('.favorites-container').contains('No quotes have been favorited...yet.').should('exist')
  })

  it('should display the favorited quote', () => {
    cy.visit('http://localhost:3000')
    cy.get('.fav-btn').click()
    cy.contains('Favorites').click()
    cy.url().should('include', '/favorites')
    cy.get('.favorites-container').should('contain', 'The secret of getting ahead is getting started.').should('exist')
  })
})
