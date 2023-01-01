/**
 * Esta función obtiene y devuelve el valor numérico de la carta
 * que recibe
 * @param {String} carta
 * @returns {Number} Retorna el valor numérico de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };
  