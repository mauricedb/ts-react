import React, { useState } from 'react';

const pages = [
  {
    name: 'Home',
    description: 'Overview',
    path: '/',
  },
  {
    name: 'Menu Maestro',
    description: 'AI-powered meal planning and recipe generation',
    path: 'https://www.menu-maestro.nl/',
  },
  {
    name: 'The Problem Solver (English)',
    description: 'AI-powered problem solving',
    path: 'https://www.theproblemsolver.dev/',
  },
  {
    name: 'The Problem Solver (Dutch)',
    description: 'AI-gestuurde probleemoplossing',
    path: 'https://www.theproblemsolver.nl/',
  },
  {
    name: 'ABL - The Problem Solver admin',
    description: 'ABL - The Problem Solver',
    path: 'https://theproblemsolver-admin.vercel.app/',
  },
  {
    name: 'ABL - The Problem Solver admin list',
    description: 'ABL - The Problem Solver',
    path: 'https://theproblemsolver-admin.vercel.app/list',
  },
];

export const Links = () => {
  return (
    <div className="xtext-center">
      <h1>Links</h1>
      <div className="container">
        {pages.map((page) => (
          <div key={page.path} className="row">
            <div>
              <h3>
                <a href={page.path}>{page.name}</a>
              </h3>
              <p>{page.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Links.defaultProps = {
  amount: 1,
};

Links.displayName = 'Links';
