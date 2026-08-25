import type { Component } from 'astro';
import CompactTemplate from './Compact.astro';
import DefaultTemplate from './Default.astro';
import FuturistTemplate from './Futurist.astro';
import ModernTemplate from './Modern.astro';

export type CVTemplate = 'default' | 'modern' | 'compact' | 'futurist';

export const DEFAULT_TEMPLATE: CVTemplate = 'default';

export const templates = {
  default: DefaultTemplate,
  modern: ModernTemplate,
  futurist: FuturistTemplate,
} satisfies Record<CVTemplate, Component>;
