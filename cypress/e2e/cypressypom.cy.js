import principal from "../POM/principal"

describe('smoke test', () => {
  const main = new principal()

  beforeEach(() => {
    main.homepage()
    main.clicar()
  });

  it('Agregar una opción a la web', () => {
    main.agregar("Marbella")
  })

  it('Agregar varias opciones', () => {
    main.agregar("Marbella")
    main.agregar("Sidney")
    main.agregar("Almayate")
  })

  it("Eliminar varias opciones ya existentes", () => {
    main.agregar("Marbella")
    main.agregar("Sidney")
    main.agregar("Almayate")
    main.borrartarea()
  })
})