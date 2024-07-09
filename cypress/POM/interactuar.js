class interactuar {

    clicar() {
       return cy.get('[data-testid="text-input"]').type('{enter}')
    
    }

    agregar() {
        cy.get('[data-testid="text-input"]').type("Hawaii{enter}")
    }
    agregar2() {
        cy.get('[data-testid="text-input"]').type("Australia{enter}")
    }
    agregar3() {
        cy.get('[data-testid="text-input"]').type("Canadá{enter}")
    }
    borrartarea() {
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()


}}
export default interactuar