// src/styles/heroStyles.ts

export const colors = {
  background: '#e8f2ff',
  primaryText: '#2b2b2b',
  secondaryText: '#7a7a7a',
  descriptionText: '#555',
  accent: 'blue',
  footer: '#87CEEB',
};

export const heroWrapper = {
  minHeight: window.innerHeight - 300,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 4rem',

  [`@media (max-width: 768px)`]: {
    padding: '0', // Remove horizontal padding on small screens
  },
};

export const introText = {
  color: colors.accent,
  fontSize: '0.875rem',
  fontWeight: 500,
  fontFamily: 'monospace',
  marginBottom: '1rem',
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
  marginBottom: '2rem',
  maxWidth: 650,

  [`@media (max-width: 768px)`]: {
    fontSize: '0.875rem',
    padding: '0 1rem', // Optional: add minimal side padding so text doesn't touch screen edges
  },
};
