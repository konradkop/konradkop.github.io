import React from 'react';
import { colors } from '../../styles';

export const Green = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'green', fontWeight: 600 }}>{children}</span>
);

export const Red = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: colors.accentRed, fontWeight: 600 }}>{children}</span>
);

export const Pink = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: 'pink', fontWeight: 600 }}>{children}</span>
);

export const Blue = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: colors.accent, fontWeight: 600 }}>{children}</span>
);

export const JavaScript = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      color: colors.jsBlack,
      backgroundColor: colors.jsYellow,
      fontWeight: 600,
      padding: '0 4px',
      borderRadius: '2px',
    }}
  >
    {children}
  </span>
);

export const Rust = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      color: colors.black,
      backgroundColor: 'red',
      fontWeight: 600,
      padding: '0 4px',
      borderRadius: '2px',
    }}
  >
    {children}
  </span>
);

export const Cpp = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      color: '#ffffff',
      backgroundColor: '#00599C', // official-ish C++ blue
      fontWeight: 600,
      padding: '0 4px',
      borderRadius: '2px',
    }}
  >
    {children}
  </span>
);


export const Python = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      color: '#FFD43B',           
      backgroundColor: '#306998', 
      fontWeight: 600,
      padding: '0 4px',
      borderRadius: '2px',
    }}
  >
    {children}
  </span>
);