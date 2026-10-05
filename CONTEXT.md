# Context: theme.the98

## Responsibility

This repository owns exactly one theme Project Unit entry and any recursively
required repository-local assets. It does not own the GAMS Host, runtime, shared
`/core`, `/util`, or `/widgets` APIs, or sibling Project Units.

## Boundary

- Project deployment path: `themes/the98.css`.
- Absolute Host imports remain absolute and are supplied by GAMS.
- Dependencies on separately configured views/services stay separate.

## Maturity

Initial station-showcase extraction slice. Host/config contracts are prerelease and
may change before public ecosystem release.
