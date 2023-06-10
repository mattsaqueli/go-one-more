describe('Resources', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {
      statusCode: 200,
      fixture: 'quote.json'
    }).as('quoteRequest')

    cy.visit('http://localhost:3000/resources')

    cy.wait('@quoteRequest')
  })

  it('displays the heading "Mental Health Resources for Veterans"', () => {
    cy.get('.resources-container h2').should('have.text', 'Mental Health Resources for Veterans')
  })

  it('displays a list of resources', () => {
    cy.get('.resources-container ul li').should('have.length', 5)
  })

  it('displays the correct content for each resource', () => {
    cy.get('.resources-container ul li').eq(0).should('contain.text', 'Veterans Crisis Line')
    cy.get('.resources-container ul li').eq(1).should('contain.text', 'Department of Veterans Affairs (VA) Mental Health Services')
    cy.get('.resources-container ul li').eq(2).should('contain.text', 'Give an Hour')
    cy.get('.resources-container ul li').eq(3).should('contain.text', 'National Resource Directory (NRD)')
    cy.get('.resources-container ul li').eq(4).should('contain.text', 'Wounded Warrior Project')
  })

  it('displays additional information paragraphs', () => {
    cy.get('.resources-container p').should('have.length', 2)
  })

  it('displays the correct content in the additional information paragraphs', () => {
    cy.get('.resources-container p').eq(0).should('contain.text', 'Remember, this list is just a starting point')
    cy.get('.resources-container p').eq(1).should('contain.text', 'Please verify the availability and details of these resources')
  })

  it('opens the correct links when clicked', () => {
    cy.get('.resources-container ul li').eq(0).find('a').should('have.attr', 'href', 'https://www.veteranscrisisline.net/Chat')
    cy.get('.resources-container ul li').eq(1).find('a').should('have.attr', 'href', 'https://www.va.gov/mental-health')
    cy.get('.resources-container ul li').eq(2).find('a').should('have.attr', 'href', 'https://www.giveanhour.org')
    cy.get('.resources-container ul li').eq(3).find('a').should('have.attr', 'href', 'https://www.nrd.gov')
    cy.get('.resources-container ul li').eq(4).find('a').should('have.attr', 'href', 'https://www.woundedwarriorproject.org')
  })
})
