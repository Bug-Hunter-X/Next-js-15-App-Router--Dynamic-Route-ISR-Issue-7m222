# Next.js 15 App Router: Dynamic Route ISR Issue

This repository demonstrates an unexpected behavior when using dynamic routes and Incremental Static Regeneration (ISR) in Next.js 15's App Router.

## Bug Description

When using dynamic routes with ISR, the regeneration process might not work as expected, leading to stale data being served to the client.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the unexpected behavior.

## Solution

The solution involves using the `revalidate` option in the `fetch` function to ensure that data is refreshed at the specified interval.

