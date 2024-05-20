describe('Main Page', () => {
  it('should load the page', () => {
    cy.visit('/')
  })
  it('should click in see all projects button in home page', () => {
    cy.get('a').contains('Ver Todos').click()
  })
  it('should check if the CodeFeed are being displayed', () => {
    cy.get('.title').contains('CodeFeed')
  })
  it('should load CodeFeed project details on click in any project', () => {
    cy.get('.title').contains('CodeFeed').click()
  })
  it('should have a title with CodeFeed written', () => {
    cy.get('.title').contains('CodeFeed')
  })
  it('should click in projects button in header navbar', () => {
    cy.get('.link').contains("Projetos").click()
  })
  it('should click in about me button in header navbar', () => {
    cy.get('.link').contains("Sobre mim").click()
  })
})