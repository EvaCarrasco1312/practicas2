    class principal {
        homepage() {
           return cy.visit('https://todomvc.com/examples/react/dist/')
        }

        clicar() {
         return cy.get('[data-testid="text-input"]').type('{enter}')
      }
  
        agregar(text) {
          cy.get('[data-testid="text-input"]').type(text + "{enter}")
      }

        borrartarea() {
          cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
      }
  }

    export default principal
