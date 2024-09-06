export function getDistanceBrightness(
  element: HTMLElement,
  x: number,
  y: number,
  maxDistance = 200,
): number {
  return getBrightness(getDistance(element, x, y), maxDistance);
}

function getBrightness(distance: number, maxDistance = 200): number {
  return Math.max(0, 1 - distance / maxDistance);
}

function getDistance(element: HTMLElement, x: number, y: number): number {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  return Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
}

export function onLoaded(loaded: (e?: Event) => void): void {
  document.addEventListener('DOMContentLoaded', loaded);
  document.addEventListener('livewire:navigated', loaded);
}
