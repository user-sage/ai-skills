# User Sage AI Skills

A skill is a file that teaches your AI assistant to do one part of user research the way a senior researcher would, such as planning a usability test or making sense of interview notes. This pack holds seven of them, written by researchers at User Sage, and it works with Claude, ChatGPT, Cursor, Copilot and Gemini. Every skill is free, needs no account, and ends in something you can use in User Sage, usually a Study Brief and then a study with real people.

Seven core skills that cover the whole research journey, from planning a study to sharing what you learned.

## The skills

The skills are listed in the order a study runs.

| Skill | Use when | Output |
| --- | --- | --- |
| [Plan a study](skills/plan-a-study/SKILL.md) | You have a stakeholder question and a deadline, and you need a plan signed before recruiting. | A Study Brief draft, with the decision informed, research questions, method and why, sample, timeline, roles, risks, and what it will not answer. |
| [Write a screener](skills/write-a-screener/SKILL.md) | You need to find the right people, and your screener reads like a quiz, or last round's participants were not who they said. | Behaviour and recency questions, hidden qualifying answers, a decoy, disqualifiers and quotas, with an answer key for fit to the brief. |
| [Write an interview guide](skills/write-an-interview-guide/SKILL.md) | Interviews are booked and the question list starts with "would you use", or with a leading question. | Research questions mapped to interview questions, story openers, probes, a time budget and a leading-question check. |
| [Audit a study before launch](skills/audit-a-study/SKILL.md) | A study is about to go out, and nobody has checked it for bias, gaps or unclear questions. | Every leading, biased or unclear question flagged with a ready fix, plus a check on screener logic, method, length, structure and goal fit. |
| [Analyse findings](skills/analyse-findings/SKILL.md) | The sessions are done and the team wants themes, with every quote kept and every claim traced. | A codebook, codes with quotes and participant ids, themes with counts, counter-examples and single-voice observations, with human and simulated results reported separately. |
| [Ask about your research](skills/ask-your-research/SKILL.md) | Someone asks whether you already know anything about a topic, and you need an answer grounded in everything you have researched. | An answer with the evidence behind it, plus the caveats a raw search would miss: small samples, outdated studies, weak evidence and contradictions. |
| [Share findings as a readout](skills/share-findings-readout/SKILL.md) | Findings get a nice meeting and then nothing changes, and you need a readout ordered by the decisions it should inform. | A readout with three to five insights, each with a quote and a count, what was not learned, recommendations with an owner, and the decision asked. |

Each skill folder also has an `EXAMPLE.md` that shows a request and what good output looks like.

## Three ways in

Pick the way that fits how you work. The method is the same in all three.

### 1. Connect via MCP

This is the easiest way, and it runs every skill against your own Briefs, studies and results with nothing to download.

1. In Claude, open the Connectors Directory and find User Sage at https://claude.ai/directory/user-sage.
2. Click Add, sign in to User Sage, and pick a workspace.
3. Ask Claude for what you need, for example "Plan a usability test for our new checkout. We keep losing people at payment."

Other AI tools that support MCP can connect to `https://mcp.usersage.com/mcp`. The setup guides at https://usersage.com/mcp cover each tool.

### 2. Download

1. Go to the library page at https://usersage.com/tools/ai-skills and download the file with all seven skills.
2. Upload it to your AI tool. In most tools you add it to a project or custom instructions, or paste it into the chat.
3. Ask your AI for the step you need. The card for each skill gives you a first line to say.

A downloaded skill works on what you paste in, such as a research question, notes, transcripts or a survey export. It drafts the work for you to paste into User Sage.

### 3. Claude Code

If you use Claude Code, add this repo as a plugin marketplace, then install the whole set or a single skill. Run these in your terminal:

```
claude plugin marketplace add user-sage/ai-skills
claude plugin install user-sage-skills@user-sage
```

To install one skill, use its name instead of the bundle, for example:

```
claude plugin install plan-a-study@user-sage
```

The skill names are plan-a-study, write-a-screener, write-an-interview-guide, audit-a-study, analyse-findings, ask-your-research and share-findings-readout.

The skills then load in every session, and Claude picks the right one from what you ask.

## What it costs

The skills are free. MCP connects on any User Sage plan. Connected through MCP, a step that already costs credits or wallet funds in the app, such as saving a full study plan, running an AI Panel or recruiting through GenPop, costs the same, and your AI asks you before anything is spent.

## How every skill treats evidence

No skill invents a participant, a quote, a finding or a metric. Every claim is traced to a quote, a session or a data row, or it stays a bracketed placeholder or an open question for you to fill. Simulated results from an AI Panel are always reported separately from real participants, and they are never presented as evidence.

AI gives you the hypothesis. Findings take real people.

## What is in this repo

```
.claude-plugin/
  marketplace.json      The marketplace file for Claude Code: the bundle, then one plugin per skill
  plugin.json           The manifest for the bundle
plugins/
  <skill name>/         One plugin per skill, holding a copy of its folder under skills/
scripts/
  sync-plugin-copies.mjs  Refreshes those copies. Edit skills/ only, then run it
skills/
  plan-a-study/         SKILL.md and EXAMPLE.md
  write-a-screener/
  write-an-interview-guide/
  audit-a-study/
  analyse-findings/
  ask-your-research/
  share-findings-readout/
CHANGELOG.md
LICENSE
```

Each skill has its own version in its SKILL.md, and the changelog records every release.

## Licence

MIT, copyright 2026 Chaotic Domain, LLC. You can use, copy, adapt and build on these skills, as long as you keep the copyright notice. See [LICENSE](LICENSE).
