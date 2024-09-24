declare module 'tailwindcss/lib/util/flattenColorPalette' {
  import { Color } from 'tailwindcss/types/generated/colors';
  export default function flattenColorPalette(colors: Record<string, Color>): Record<string, string>;
}
