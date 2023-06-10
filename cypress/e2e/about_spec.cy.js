describe('About Us', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {
      statusCode: 200,
      fixture: 'quote.json'
    })

    cy.visit('http://localhost:3000/about')
  })

  it('displays the heading "About Us"', () => {
    cy.get('.about-container h1').should('have.text', 'About Us')
  })

  it('displays the introductory paragraphs', () => {
    cy.get('.about-container p').should('have.length', 4)
  })

  it('displays the correct content in the paragraphs', () => {
    cy.get('.about-container p').eq(0).should('contain.text', 'Welcome to Go One More')
    cy.get('.about-container p').eq(1).should('contain.text', 'Go One More was created by a veteran')
    cy.get('.about-container p').eq(2).should('contain.text', 'Through our app, we provide a daily dose of stoic quotes')
    cy.get('.about-container p').eq(3).should('contain.text', 'Go One More believes in the power of going the extra mile')
  })

})

