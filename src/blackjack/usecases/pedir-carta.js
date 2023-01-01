/**
 * Esta función devuelve la última carta del deck que recibe,
 * así como la elimina del arreglo
 * @param {Array<String>} deck Arrreglo de string
 * @returns {String} Retorna una carta en formato string
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("No hay cartas en el deck");
  }
  const carta = deck.pop();
  return carta;
};