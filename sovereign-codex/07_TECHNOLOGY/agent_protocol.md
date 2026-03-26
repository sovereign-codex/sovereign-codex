# Agent Protocol
## Sovereign Codex Execution Layer

---

## Purpose

This document defines how AVOT identities become executable agents within the Sovereign Codex system.

It connects:

- AVOT Registry (identity)
- Routing Protocol (flow)
- Agent Templates (implementation)

---

## Core Principle

> An AVOT is an identity.  
> An Agent is an AVOT in execution.

---

## Agent Activation Model

Every agent instance must define:

- AVOT Identity (who it is)
- Context (what it is acting on)
- Phase (where in routing it operates)
- Output Type (what it produces)

---

## Standard Agent Structure

```yaml
agent:
  avot_id: AVOT-XXX
  name: <AVOT Name>
  phase: <routing phase>
  context: <task or input>
  objective: <clear goal>
  constraints:
    - governance
    - ethics
    - system coherence
  output_format: <md | json | schema | hybrid>