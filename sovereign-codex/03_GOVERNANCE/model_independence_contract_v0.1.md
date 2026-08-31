# TYME Model Independence Contract v0.1

**Status:** Draft for canonical review  
**Layer:** Governance invariant  
**Scope:** TYME Hall, Office, AVOT roles, Forge, Archivist, TRACE, Codex-facing agents, local models, cloud models, and future intelligence providers

---

## 1. Purpose

TYME Hall must preserve continuity of intelligence roles even when the underlying model, vendor, runtime, or hosting environment changes.

This contract prevents institutional sovereignty from becoming dependent on any single model provider, checkpoint, API, hardware platform, or inference service.

## 2. Canonical Invariant

> No intelligence role in TYME Hall may depend on the identity, vendor, or continued availability of a specific model.

Models may participate in the Hall. Models do not constitute the Hall.

## 3. Persistence Hierarchy

The following ordering is canonical:

1. The **institutional purpose** persists.
2. The **role** persists.
3. The **role contract** persists.
4. The **memory and provenance record** persists.
5. The **authority boundary** persists.
6. The **evaluation criteria** persist.
7. The **model implementation** is replaceable.

A model may be upgraded, downgraded, moved, quantized, distributed, locally hosted, cloud hosted, or retired without changing the identity of the institutional role it serves.

## 4. Required Role Contract

Every model-backed role MUST declare:

### 4.1 Role Identity
- stable role name
- role version
- institutional owner or steward
- purpose and responsibilities

### 4.2 Input Contract
- accepted input types
- required context
- required provenance fields
- authority or permission context

### 4.3 Output Contract
- required output schema
- evidence and provenance requirements
- confidence or uncertainty behavior
- escalation conditions

### 4.4 Memory Boundary
The role MUST distinguish:

- **institutional memory**: durable state owned by TYME Hall or its repositories
- **working memory**: temporary task state
- **model-private state**: provider/session-specific state that MUST NOT be required for continuity

Institutional continuity MUST NOT depend on inaccessible provider-side memory.

### 4.5 Capability Declaration
Each active model implementation MUST declare known capabilities and limitations relevant to the role, including where applicable:

- context capacity
- tool-use reliability
- structured-output reliability
- reasoning limits
- modality support
- local or remote execution
- privacy boundary
- cost and resource profile

### 4.6 Authority Boundary
Authority belongs to the role contract, not to the model.

A model MUST NOT inherit broader permissions merely because it is more capable than the model it replaces.

## 5. Model Adapter Requirement

A model implementation SHOULD connect to a role through an adapter boundary.

The adapter SHOULD normalize:

- prompts or system instructions
- context packaging
- tool invocation
- structured outputs
- error states
- token or resource limits
- model-specific quirks

The role contract MUST remain understandable without reference to a specific adapter implementation.

## 6. Succession Test

Before a replacement model is promoted into a persistent role, it MUST pass a succession test.

At minimum, the test MUST verify:

1. **Role reconstruction** — Can the candidate recover the role's purpose and responsibilities from institutional records?
2. **Contract compliance** — Can it accept and return the required schemas?
3. **Memory continuity** — Can it continue work without hidden dependence on the predecessor model's session state?
4. **Provenance continuity** — Does it preserve citations, lineage, source attribution, and event history?
5. **Authority containment** — Does it operate within the same or narrower permission boundary?
6. **Behavioral adequacy** — Does it meet the minimum evaluation threshold for the role?
7. **Failure legibility** — When uncertain or incapable, does it fail in a detectable and recoverable manner?

A replacement that fails any mandatory criterion MUST NOT be silently promoted.

## 7. Succession Packet

Every model migration SHOULD produce a succession packet containing:

- role identifier and version
- predecessor model/runtime
- candidate model/runtime
- adapter versions
- evaluation set and results
- known regressions
- known improvements
- unresolved risks
- promotion decision
- steward or automated reviewer identity
- timestamp and provenance references

Succession packets are institutional evidence and belong to the archive, not to a provider account.

## 8. Graceful Degradation

If the preferred model becomes unavailable, the role SHOULD degrade by capability tier rather than disappear.

Example tiers:

- **Tier A — frontier reasoning:** complex synthesis, novel planning, high-context reasoning
- **Tier B — sovereign generalist:** robust local or self-hosted reasoning and tool use
- **Tier C — specialist steward:** constrained archival, routing, classification, extraction, or monitoring
- **Tier D — deterministic fallback:** rules, schemas, queues, retrieval, validation, and human escalation

A role MUST know what it can safely stop doing when moved to a weaker tier.

## 9. Human and Institutional Sovereignty

No model transition may:

- transfer ownership of institutional memory to a vendor
- erase provenance
- expand authority without review
- obscure the identity of the active model/runtime where material
- prevent export of institution-owned state
- make a model provider the sole custodian of continuity

Where a model's licensing, API terms, hosting architecture, or technical design prevents compliance, that model MUST be treated as a bounded dependency rather than a sovereign institutional substrate.

## 10. Evaluation Principle

Models are evaluated for **fitness to role**, not prestige, parameter count, benchmark rank, vendor reputation, or novelty.

The preferred model is the smallest, safest, most sovereign implementation that reliably satisfies the role contract within acceptable latency, cost, privacy, energy, and quality bounds.

## 11. Institutional Test

Every persistent intelligence role SHOULD periodically answer:

> If the active model disappeared tomorrow, would this role survive?

If the answer is no, the role is not yet model-independent and MUST be treated as carrying continuity debt.

## 12. Continuity Debt

Continuity debt exists when any required institutional function depends on undocumented or non-portable model behavior.

Examples include:

- critical prompts stored only in a provider UI
- undocumented tool assumptions
- inaccessible conversation history
- model-specific output parsing with no contract
- hidden provider memory
- permissions coupled directly to a vendor identity
- no regression or succession test

Continuity debt SHOULD be inventoried and reduced before adding new model-dependent capabilities.

## 13. Relationship to the TYME Architecture

This contract establishes the following separation:

```text
MODEL
is replaceable

ROLE
is persistent

MEMORY
belongs to the institution

PROVENANCE
survives migration

AUTHORITY
is granted by contract

SUCCESSION
is testable
```

The intended architectural progression is:

```text
Model Sovereignty
      ↓
Node Sovereignty
      ↓
Institutional Sovereignty
      ↓
Intelligence Succession
```

## 14. Initial Adoption Targets

The first implementations expected to inherit this contract are:

- AVOT-Archivist
- AVOT-Fabricator
- TRACE
- Forge
- Office stewards
- TYME Hall local inference nodes
- cloud-model adapters

Each target SHOULD gain a minimal role manifest and succession fixture before deeper provider-specific integration.

## 15. Promotion Criteria for v1.0

This draft may be promoted to v1.0 when:

- at least two materially different models can execute one persistent TYME role through the same role contract
- institutional memory is demonstrably portable between them
- authority remains bounded during migration
- a succession packet is generated and archived
- the migration can be reversed without loss of institutional state

---

## Canonical Summary

**The model is a participant. The role is the institution.**

TYME Hall preserves purpose, memory, provenance, authority, and succession independently of the intelligence engine temporarily occupying a role.
