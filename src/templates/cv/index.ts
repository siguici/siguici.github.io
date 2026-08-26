import type { Component } from 'astro';
import CompactTemplate from './Compact.astro';
import DefaultTemplate from './Default.astro';
import ModernTemplate from './Modern.astro';

export type CVTemplate = 'default' | 'modern' | 'compact';

export const templates = {
  default: DefaultTemplate,
  modern: ModernTemplate,
  compact: CompactTemplate,
} satisfies Record<CVTemplate, Component>;

export const DEFAULT_TEMPLATE: CVTemplate = 'default';
