# Licensing and current release policy

GAMS-authored code remains Apache-2.0; identified 98.css portions retain MIT
terms in NOTICE. LICENSE and NOTICE must exist as nonempty regular files and
be packaged exactly. NOTICE binds NOTICE-EVIDENCE.json, whose recorded inputs
must match the source closure and retained comparison/MIT evidence.

The current `template.view` release model authorizes publication through a
version commit and matching `v` tag, not external approval digest variables or a
special release branch. It supersedes prior manual checksum/license approval
and release-branch gates. Source/evidence consistency, exact packaging, tests,
and no-overwrite protection remain strict. No CSS, LICENSE, NOTICE, upstream
terms or historical audit evidence is changed by this tooling migration.
See PUBLISHING.md for the current user-operated preflight/push and CI procedure.

The following authorization and licensing records are historical. Their prior
approval/digest instructions are not current prerequisites; audit limitations
and attribution facts are retained, not recertified.

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

## Historical licensing record

The owner authorizes Apache-2.0 for GAMS-authored code. LICENSE is the exact
existing Apache-2.0 text copied from the filesystem Project Unit.
The theme adapts MIT-licensed jdan/98.css; all 22 embedded SVGs match the upstream comparison commit. Full MIT terms travel in NOTICE. Apache-2.0 covers GAMS-authored additions, not upstream ownership. The original upstream import version remains unknown; the pinned comparison is evidence, not an import-version claim.

NOTICE is a bounded engineering inventory, not a perfect ownership assertion.
No npm dependencies are vendored. Host libraries, icons and fonts fulfilled by
the Host are excluded and must be reviewed in their own distribution.
The historical procedure required exact-byte owner digest approval; the current
policy above supersedes that prerequisite. See PUBLISHING.md for current gates.
