import principal from "../POM/principal"
import interactuar from "../POM/interactuar"

describe('smoke test', () => {
  const main = new principal()
  const interact = new interactuar()

  beforeEach(() => {
    main.homepage()
    interact.agregar()
    
  });

  it('Agregar una opción a la web', () => {
  
  })

  it('Agregar varias opciones', () => {
     interact.agregar2()
     interact.agregar3()

  })

    it("Eliminar varias opciones ya existentes", () => {
      interact.agregar2()
      interact.agregar3()
      interact.borrartarea()
  })
  
})