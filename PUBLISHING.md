# Owner publishing procedure

Distribution is a GitHub Release ZIP, not npm registry or OCI. Next locally
prepared version: **0.2.4 / v0.2.4**. Preparation does not tag, push or publish.

## 0.2.4 bounded evidence refresh

The owner approved bounded version/evidence maintenance and local release
preparation after reviewing mixed button/select groups. The source delta from
immutable v0.2.3 is exactly:

- Group-scoped `height: auto` and `min-height: 23px` for direct-child single-line
  selects. Standalone fields keep their sizing; there is no `top` offset.
- `select` background size becomes `auto calc(100% - 4px)`.

NOTICE-EVIDENCE.json updates only the stylesheet input digest and appends a
0.2.4 maintenance record. Historical audit findings and the 0.2.3 record remain
unchanged. NOTICE changes only its evidence-binding suffix. LICENSE, full NOTICE
body, MIT terms, embedded SVG payloads, THEME-COMPARISON.json, SOURCE.json and
production verification retain their exact bytes. Package version is 0.2.4;
README documents the Host 2.0.8 mixed-group requirement separately from the
historical 2.0.3 target in generated unit.json. No packaging contract is changed.

Candidate digests (bounded maintenance, not a new legal audit):

```text
LICENSE cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30
NOTICE  ebc048837b797e86331f7f5c1b347240926b8ebbf47130ee22b441b20bef9d8b
NOTICE-EVIDENCE.json 7cd933e1dc124edd142aef0f5fcac9e8a5ed599aae65cb86b180c401434042a3
```

`npm test` passes: source checks, browser-fixture syntax and 15 Python tests,
including real-checkout stage/check. Browser checks against development Host CSS
pass: 111 group checks and 10 select-arrow states. Local stage/check and repeated
staging produce identical candidate ZIP bytes. Output: `dist/release-0.2.4/`.
Locally computed digest variables exercise strict consistency checks; they do
not establish remote Actions approval or publication authorization.

No tag, push, publication, remote variable update, hosted CI, external-Project
package consumption or clean-Mac result is claimed. Obtain applicable exact-byte
approval, update Actions variables and complete remote/Host-consumption gates
before publication. Prior release-specific approvals do not approve 0.2.4.
Never move an existing tag or release.

Local packaging after exporting the candidate LICENSE/NOTICE digests above
(use an output directory that does not already exist):

```sh
python3 scripts/release.py stage --tag v0.2.4 --out dist/release-0.2.4
python3 scripts/release.py check --tag v0.2.4 --out dist/release-0.2.4
```

The following sections retain historical preparation and authorization records;
their digests and examples are not current-release approval.

## 0.2.3 bounded evidence refresh

The owner approved the proposed bounded evidence refresh, preservation of audit
history and preparation of a new v0.2.3 instead of moving v0.2.2. The source is
unchanged from v0.2.2. NOTICE-EVIDENCE.json updates only the CSS input digest and
appends a release_maintenance record with exact before/after hashes and scope.
Historical audit findings and SOURCE.json remain historical, not recertified.
NOTICE changes only its evidence-binding suffix. LICENSE, full NOTICE body,
third-party MIT terms, embedded SVG payloads and THEME-COMPARISON.json are unchanged.
The old evidence and NOTICE bytes remain available at commit
`7b56a6b0dcb47420c8200b5d237074992a02dbb5` (v0.2.2).

Validation: `npm test` passes on Node 24.21.0 and Python 3.14.7 with 15 tests,
including real-checkout staging/checking. That new regression reproduced the
reported error before the refresh and passes afterwards. Local CLI stage/check
and a second-stage byte comparison validate deterministic v0.2.3 packaging.
`git diff --check` passes. Production verification and workflows are unchanged.
Browser rendering, GUI/Host consumption, hosted CI and remote publication checks
remain unverified; local preparation is not publication approval.

Exact local legal digests for the authorized refresh:

```text
LICENSE cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30
NOTICE  71b58e8a2a77fc51bf235fff9bf1814b20d3f2af7c4d974ac309e7e788fb4b25
```

Remote Actions variables have NOT been changed. Before pushing for publication,
set `LICENSE_SHA256` and `NOTICE_SHA256` to these values under the owner's remote
publication process; a stale NOTICE_SHA256 will correctly fail verification.
Complete the outstanding GUI/Host and remote technical gates. Do not push v0.2.2
as a retry or overwrite existing tags/releases.

Local packaging (export the APPROVED_LICENSE_SHA256 and APPROVED_NOTICE_SHA256
values above; output must not exist):

```sh
python3 scripts/release.py stage --tag v0.2.3
python3 scripts/release.py check --tag v0.2.3
```

## Historical 0.2.2 local preparation — packaging blocked

The owner requested committing current changes and preparing the next Project
Unit release. This patch retains table select arrows and adds selectable-cell
selection/focus styling, with a browser regression fixture and syntax check.
Local annotated tagging records preparation only, not publication readiness.
Existing tags and released artifacts are not changed.

Validation: `npm test` passes on Node 24.21.0 and Python 3.14.7 (source checks,
browser-fixture syntax check and 14 Python tests); `git diff --check` passes.
Browser rendering, GUI/Host consumption and hosted CI have not been verified
for this version. The Host source target remains 2.0.3.

**Blocker:** `scripts/release.py stage --tag v0.2.2` rejects
`src/themes/the98.css` because its bytes no longer match `NOTICE-EVIDENCE.json`.
No ZIP or SHA256SUMS is prepared. The strict evidence and exact-byte gates are
unchanged. LICENSE, NOTICE, NOTICE-EVIDENCE.json, THEME-COMPARISON.json and
historical SOURCE.json are preserved, not silently refreshed or recertified.
The earlier 0.2.1 authorization covers unchanged prepared bytes, not this delta.

Before packaging/publication:

1. Obtain explicit authorization for a bounded source/evidence checksum refresh,
   preserving historical audit evidence and documenting exactly these CSS changes.
2. Refresh the evidence and NOTICE binding; obtain the applicable exact-byte
   digest authorization. Do not weaken release verification or change third-party
   license terms. Remote Actions variables have not been changed.
3. Run `npm test`, then stage and independently check `v0.2.2` with approved
   LICENSE/NOTICE digests and a fresh output directory. Complete GUI/Host and
   remote technical publication checks described below before publishing.
4. Never overwrite an existing tag or release. If the local preparation tag has
   already been created, use a new version/tag for subsequent evidence changes.

The following sections retain the historical 0.2.1 authorization and procedure;
their v0.2.1 examples do not claim that 0.2.2 can currently be packaged.

## Historical 0.2.1 release authorization

The owner's current instruction is: "no need for review of checksums / licenses - those area already prepared - drop pending reviews, commit changes, prepare tags - create script (using gh) to push to repos and create releases."

This supersedes earlier pending human checksum/license and hosted-review approvals
for the prepared 0.2.1 release. Documentation commits and annotated **local**
`v0.2.1` tags at the tested HEAD are authorized. No repeated human review is
pending for these unchanged prepared bytes. Prior "before any tag" restrictions,
including publisher migration, do not restrict local tagging.

This is not evidence of hosted Linux CI, GUI/Host consumption, registry visibility,
immutable policy, draft-first rehearsal or anonymous public-byte verification.
Those coverage gaps remain accurately unverified; publication technical checks
still apply. Version, source closure, evidence, exact license/notice digest and
candidate-byte gates remain strict. No source or legal evidence is refreshed.
No remote push/publication, repository variable or remote configuration change
is performed by this local preparation. Never move or overwrite an existing tag.

## Current local validation

`npm test` passed with Node 24.19.0 and Python 3: source verification and
14 Python tests.
These are local checks, not GUI/Host integration or hosted CI results.

1. Source closure, LICENSE, NOTICE and NOTICE-EVIDENCE.json are prepared;
   the owner dropped pending human checksum/license reviews for unchanged bytes.
   Apache-2.0 is the owner's standing choice for GAMS-authored code. Identified
   98.css CSS/artwork portions retain their complete MIT terms in theme NOTICE.
   Its comparison snapshot is not a claim of the original imported version.
2. Run `npm test` with Node 24 and Python 3. Review source bytes and deployment paths.
3. Set repository Actions variables `LICENSE_SHA256` and `NOTICE_SHA256` from
   `shasum -a 256 LICENSE NOTICE`. These bind publication to the collected exact
   texts; they are not a repeated license-choice decision. Source/evidence/text
   changes require recollection and updated digests before distribution.
4. Push the reviewed `release` branch. With both variables, branch CI builds,
   verifies and uploads a candidate. Without them, only tests run; no candidate
   is distributed. A wrong nonempty digest or changed evidence fails loudly.
5. Create the authorized local `v0.2.1` at the tested release HEAD.
   Remote publication still requires the technical verification and Host-consumption
   gates; these have not been established by local tests. Never move a pushed tag.
   Tag CI independently tests, checks branch/tag/version, stages and checks a
   fresh ZIP. The publish job rechecks identity, bytes and SHA256SUMS. GitHub API
   errors fail closed. Only version tags create **public** releases.
6. Any existing GitHub Release, including draft, blocks creation. No overwrite
   path. Recover with a new version rather than replacing published assets.

Local rehearsal after exporting APPROVED_LICENSE_SHA256 and
APPROVED_NOTICE_SHA256:

```sh
python3 scripts/release.py stage --tag v0.2.1
python3 scripts/release.py check --tag v0.2.1
```

Staging output must not already exist. ZIP contains deployment paths without
`src/`, LICENSE, NOTICE, README.md and unit.json. SHA256SUMS is a sidecar. Install
source files at their mapped Project-relative paths; retain metadata and notices
under `notices/project-units/<repository>/`, never over the Project's own files.
Install dependencies separately. The example's pinned installer automates this.
The target Host source contract is 2.0.3; package-level GUI validation is a release
gate, not an assertion that every later Host is compatible.

## Coordinated local preparation (local tags authorized)

Own version v0.2.1 is prospective, not a published download or dependency pin.
The retained, verified source Host target is 2.0.3; no 2.1.0 GUI claim is made.
SOURCE.json preserves the historical extraction snapshot and appends a separate
metadata and bounded test-fixture maintenance delta. NOTICE-EVIDENCE.json audits
the src closure and its recorded extra inputs, NOT the complete prepared tree.
Evidence, NOTICE, LICENSE and upstream terms retain their original bytes.

Current release/PR workflows and the standalone publisher remain unchanged:
digest-gated branch candidates, fresh tag stage/check and authenticated absence
checks precede direct public creation. There is no common publisher migration,
private-draft byte rehearsal, immutable-policy gate or stable anonymous public
byte recheck. Recorded immutable policy was disabled; no fresh remote check was
performed. These publication coverage gaps and GUI/Host consumption gates
are not local-tag blockers. Pending human hosted review is superseded by the
owner's instruction; unavailable technical coverage is not claimed as passed.
Existing releases/tags must never be overwritten.
The standalone protocol tests retain synthetic v0.1.0 fixtures. Their setup now
temporarily binds release.__file__ to the synthetic root, with unittest cleanup,
so branch() reads that fixture's package instead of this checkout's version.
Stock npm test validates the prepared checkout directly. Tag/version mismatch
and other production gates remain strict; no production code is changed.
