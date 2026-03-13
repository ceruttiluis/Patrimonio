export function normalizarTexto(valor: string): string {
  if (!valor) return '';

  return valor
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}