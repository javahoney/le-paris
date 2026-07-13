// boombox/radio, disque vinyle, micro, casque audio, double croche
export const musicIcons = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="#E8821E" stroke-width="2" stroke-linecap="round"><rect x="3" y="8" width="18" height="11" rx="1"/><circle cx="8" cy="14" r="2.3"/><circle cx="16" cy="14" r="2.3"/><path d="M7 8V5h10v3"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#E8821E" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="0.8" fill="#E8821E" stroke="none"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#E8821E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#E8821E" stroke-width="2" stroke-linecap="round"><path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="#E8821E" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/><path d="M9 18V6l11-3v11M9 10l11-3"/></svg>',
];

export function iconFor(index: number) {
  return musicIcons[index % musicIcons.length];
}

export function rotationFor(index: number) {
  return ((index * 37) % 25) - 12;
}
