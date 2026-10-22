# theme.the98

Initial prerelease extraction of the GAMS `theme` Project Unit from
`themes/the98.css`. Development source also supports the shared selectable-cell
grid contract; previously released artifacts are not modified.
## Install mapping

Prepared version: `v0.2.5`; assets are `theme.the98-0.2.5.zip` and
`SHA256SUMS`. The owner-authorized bounded evidence refresh covers canvas-adjacent
table styling and removal of an obsolete commented scrollbar rule. Historical
audit findings and tags are unchanged. See `PUBLISHING.md`.
After matching version-tag publication (see current policy below),
download and verify the checksum. Unpack into a separate staging
folder: copy its deployment files to the same Project-relative paths, and keep its
LICENSE, NOTICE, README.md and unit.json under `notices/project-units/theme.the98/`.
Do not unpack metadata over the Project's own README or license. The entry is
`themes/the98.css` (the archive strips `src/`). Configure that path in Project Config.
The example's checksum-pinned installer performs these steps for all Units.
Install dependencies listed below separately; they are not bundled.
The package metadata retains its historical Host source target of 2.0.3. See the
mixed-group requirements below and `PUBLISHING.md` for validation limitations and
the current commit-and-tag procedure.

## Current prerelease Host contract

This Unit runs inside the GAMS Host. Absolute JavaScript imports under `/core`,
`/util`, and `/widgets` are Host-owned package-library APIs and are deliberately not
vendored here. In particular, `/core/runtime.js` supplies plugin calls. There is no
arbitrary shared SDK repository. The Host must also provide the browser DOM/custom
elements environment and base/theme semantic CSS contract expected by the source.

Repository dependencies in this extraction set:
- None in this extraction set.

These are repository names only. Deployed JavaScript filenames and Project Config ids
remain unchanged. The list records actual static configuration/call boundaries; it
does not claim that every interaction has a standalone dynamic integration test.

## Selectable cells

`table[role="grid"] td[role="gridcell"][aria-selected="true"]` uses the same
classic blue/white selection treatment as selected rows, without selecting the
whole row. Keyboard focus is shown separately with an inset dotted outline.
The Host's `/util/selectable-grid.js` supplies interaction; this theme only owns
appearance. See the workspace View guide's **Selectable cell grids** section.
The owner-authorized 0.2.3 evidence refresh covers exactly these CSS changes and
the select-arrow fix below, preserving historical audit findings and MIT terms.

## Mixed button/select groups (0.2.4)

Direct-child single-line selects in `[role="buttongroup"]` stretch with buttons
at a minimum height of 23px. Standalone selects retain their 21px height.
Select arrows scale to the control height minus 4px; no relative top offset is
applied. The Host must provide the mixed-group base rules introduced in 2.0.8.
The historical package metadata target of 2.0.3 does not assert mixed-group
support on that Host version.

The Host fixture `gams/test/fixtures/buttongroup.html`, with this theme selected,
passed 111 browser checks, including icon buttons and eight control orders.
The existing select-arrow browser regression passed all 10 states. These are
browser CSS checks, not an external-Project desktop or released-package test.

## Verify

Requires Node.js 24 and Python 3 (stdlib only).

```sh
npm test
```

The suite also stages and independently verifies the real checkout against its
source/evidence/NOTICE bindings without external approval variables. Shell
protocol tests use git/gh fakes and never mutate remote repositories.

Verification scans Unit-owned `src/` assets plus its test script/package/workflow
metadata, checks each JavaScript file in that boundary with `node --check`, rejects
unresolved or escaping local imports/assets, permits only the documented Host
absolute import roots, and resolves non-data CSS `url(...)` assets. Git internals,
dependency installs, and build outputs are outside the scan boundary.

### Select arrow regression

Table editors must clear only `background-color`, never the `background`
shorthand: that shorthand removes the select's normal arrow and resets its
position/repeat. Pressed styling then restores only the image, causing tiling.

`test/select-arrows.browser.js` checks the actual CSS cascade for standalone and
table selects in normal, focused, active, focused-active and disabled states.
From the `view.character` browser preview console, run:

```js
import('/__preview__/select-arrows.js').then(({ checkSelectArrows }) => checkSelectArrows())
```

Expected: `passed: 10`. `npm test` also syntax-checks this browser fixture; it does
not claim to execute browser rendering. The fix is in development source, not
already-downloaded/released theme artifacts.

## Release status

GAMS-authored code is Apache-2.0. `package.json` remains private: distribution is a
GitHub Release ZIP, never npm or OCI. A version commit plus matching `v` tag
authorizes publication, following `template.view`; no special release branch or
external approval digest variables are required. This current policy supersedes
prior manual approval/release-branch gates; historical records are retained and
marked historical in `PUBLISHING.md` and `LICENSING.md`.

For users: `scripts/push-release.sh` performs preflight only;
`scripts/push-release.sh --publish` explicitly pushes the clean current branch
and matching tag atomically. It refuses existing remote tags/releases and fails
closed on auth/API errors. CI creates the Release, not the push script. Tests,
source/evidence consistency, exact LICENSE/NOTICE packaging and overwrite
protection remain required. Identified third-party terms are retained in NOTICE,
including 98.css MIT terms. No historical legal evidence is refreshed by this
release-tooling migration. See `LICENSING.md` and `PUBLISHING.md`.
