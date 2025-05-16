import { CSSProperties } from 'react';

export const colors = {
  background: '#e8f2ff',
  primaryText: '#2b2b2b',
  secondaryText: '#7a7a7a',
  descriptionText: '#555',
  accent: 'blue',
  footer: '#87CEEB',
  lightRed: '#f8d7da',
  accentRed: '#842029',
};

export const introText = {
  color: colors.accent,
  fontSize: '0.875rem',
  fontWeight: 500,
  fontFamily: 'monospace',
  marginBottom: '1rem',
};

export const introTextRed = {
  color: colors.accentRed,
  fontSize: '0.875rem',
  fontWeight: 500,
  fontFamily: 'monospace',
  marginBottom: '1rem',
};

export const timelineHorizontalLineRed: CSSProperties = {
  position: 'absolute',
  left: '0px',
  top: '1rem',
  width: '1.25rem',
  height: '2px',
  marginLeft: '0.7rem',
  backgroundColor: colors.accentRed,
};

export const timelineHorizontalLineBlue: CSSProperties = {
  position: 'absolute',
  left: '0px',
  top: '1rem',
  width: '1.25rem',
  height: '2px',
  marginLeft: '0.7rem',
  backgroundColor: colors.accent,
};

export const timelineDotRed = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: colors.accentRed,
  marginLeft: '1.7rem',
  marginRight: '1rem',
  marginTop: '.7rem',
  flexShrink: 0,
};

export const timelineDotBlue = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: colors.accent,
  marginLeft: '1.7rem',
  marginRight: '1rem',
  marginTop: '.7rem',
  flexShrink: 0,
};

export const mainTitle = {
  fontSize: '3rem',
  fontWeight: 700,
  color: colors.primaryText,
  marginBottom: '0.5rem',

  [`@media (max-width: 768px)`]: {
    fontSize: '2rem',
  },
};

export const subtitle = {
  fontSize: '2.25rem',
  fontWeight: 600,
  color: colors.secondaryText,
  marginBottom: '2rem',

  [`@media (max-width: 768px)`]: {
    fontSize: '1.5rem',
  },
};

export const description = {
  color: colors.descriptionText,
  fontSize: '1rem',
  lineHeight: 1.6,
  maxWidth: 650,
};
