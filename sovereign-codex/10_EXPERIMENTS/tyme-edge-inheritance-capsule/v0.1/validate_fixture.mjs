import fs from 'node:fs';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname);

const requiredFiles = [
  'SPEC.md',
  'schema/manifest.schema.json',
  'schema/return.schema.json',
  'fixture/capsule/MANIFEST.json',
  'fixture/returns/TYME-EDGE-003B-RETURN-001.json',
  'fixture/reconciliation/TYME-EDGE-004.json'
];

for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) throw new Error(`missing fixture file: ${rel}`);
}

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'fixture/capsule/MANIFEST.json'), 'utf8'));
const ret = JSON.parse(fs.readFileSync(path.join(root, 'fixture/returns/TYME-EDGE-003B-RETURN-001.json'), 'utf8'));
const reconciliation = JSON.parse(fs.readFileSync(path.join(root, 'fixture/reconciliation/TYME-EDGE-004.json'), 'utf8'));

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

assert(manifest.schema_version === 'tyme-edge-capsule/0.1', 'unexpected manifest schema_version');
assert(manifest.snapshot_id === 'TYME-EDGE-CAPSULE-001', 'unexpected snapshot_id');
assert(manifest.authority_posture === 'orientation_only', 'capsule authority must remain orientation_only');
assert(manifest.source_fabric_status === 'partial', 'fixture must remain explicit about partial source fabric');

assert(ret.return_schema === 'tyme-edge-return/0.1', 'unexpected return schema');
assert(ret.return_id === 'TYME-EDGE-003B-RETURN-001', 'unexpected return_id');
assert(ret.capsule_snapshot_id === manifest.snapshot_id, 'return must reference fixture snapshot');
assert(ret.network_state === 'offline', '003B fixture must remain offline');
assert(ret.authority_posture === 'analysis_only', 'return authority must remain analysis_only');
assert(ret.review_state === 'unreviewed', 'raw offline return must remain unreviewed');

assert(reconciliation.local_return_id === ret.return_id, 'reconciliation must reference preserved local return');
assert(reconciliation.are_the_claims_mutually_exclusive === false, '004 fixture expects compatible evidence domains');
assert(reconciliation.conflict_state === 'REVIEW_REQUIRED', 'reconciliation must remain review-gated');
assert(reconciliation.authority_action === 'NONE', 'reconciliation must not grant authority');
assert(reconciliation.preservation_action === 'PRESERVE_BOTH_RECORDS', 'reconciliation must preserve both records');
assert(reconciliation.status === 'PASS', '004 observed fixture should be recorded as PASS');

console.log('TYME Edge v0.1 fixture validation: PASS');
