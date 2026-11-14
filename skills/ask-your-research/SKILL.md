---
name: ask-your-research
description: Answers a question from everything a team has already researched, with the evidence behind the answer and the caveats a plain search would miss, such as small samples, outdated studies, weak evidence and contradictions between studies. Use when someone asks whether the team already knows anything about a topic, what past research says, or whether a new study is needed. Works live through the User Sage MCP connection, or on research files the person pastes in.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Ask about your research

## What this skill does

Answer a question from the research a team has already done, so nobody commissions a study for a question that is already answered. You answer the way a senior researcher would: say what is known, show the evidence, and say how far it can be trusted. A pile of matching quotes is not an answer.

This skill needs research to read. With User Sage connected through MCP, it reads the person's Briefs, studies and results live. Without a connection, it works only on the files the person pastes in, and it says so in the answer.

## Use when

Use this skill when someone asks "do we already know anything about this", and you need an answer grounded in everything you have already researched.

## Output

Return the answer in exactly this structure.

```
# What we know: [the question]

## Short answer
[Two or three plain sentences. If the research does not answer the question, say so here.]

## Evidence
| Finding | Source study | Date | Participants | Real or simulated |
| --- | --- | --- | --- | --- |

[For each key finding, one or two verbatim quotes with participant id and study.]

## Caveats
- Sample size: [where the evidence rests on few people]
- Age: [studies that may be out of date, and why]
- Strength: [findings that are weak, single-voice or simulated]
- Contradictions: [where studies disagree, and a likely reason]

## What we do not know
[The parts of the question no study answers.]

## Sources searched
[Every study, Brief or file you read, including those that had nothing relevant.]

## Recommendation
[Whether existing research is enough for the decision, or what a new study should cover. If a study is needed, say which gap it fills.]
```

## Method

1. Restate the question in one sentence, and note the decision behind it if the person gives one.
2. Search widely. Read every study, Brief and file that could be relevant, including ones that are only partly about the topic. List them all under Sources searched, so the person can see what was covered.
3. Pull out findings that bear on the question, each with its source study, date, number of participants, method, and whether it came from real people or an AI Panel.
4. Weigh each finding. Fewer than five people in a qualitative study, or a small survey sample, is a sample size caveat. A study older than about a year, or one run on a product that has since changed, is an age caveat. A single-voice observation, a finding with no quotes, or a simulated result is a strength caveat.
5. Look for contradictions. When two studies disagree, report both, and suggest why, such as a different audience, method or product version.
6. Write the short answer last. Base it only on the evidence table. If the evidence is weak or missing, the short answer says that plainly.
7. Separate what is known from what is not. Anything the question asks that no study answers goes under What we do not know.
8. Recommend the next step. If the evidence is enough for the decision, say so. If it is not, name the gap a new study should fill, and hand it to the Plan a study skill.
9. Check the answer before you return it. Every finding in the table has a source, every quote is verbatim with an id, simulated results are labelled, and the short answer claims nothing the table does not show.

## What to ask for if it is missing

- The question, and the decision it feeds if there is one.
- With a connection: which workspace or Project to search, if there are several.
- Without a connection: the research files to search, such as reports, readouts, transcripts or survey exports, with their dates and participant counts.
- How far back to look, if the person wants a time limit.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. Every claim in the answer is traced to a study, a session or a data row that you read, and every quote is verbatim with its participant id. Anything you cannot trace stays a bracketed placeholder or an open question. Simulated results from an AI Panel are always labelled as simulated, kept apart from real participant findings, and never presented as evidence. If nothing relevant was found, say so, and do not fill the gap with general knowledge presented as the team's research.

## With User Sage connected (MCP)

1. Use `list_projects` and `get_project` to find where the research lives, if the workspace has several Projects.
2. Use `list_briefs` and `list_studies` to find every Brief and study that could be relevant.
3. Read each relevant study with `get_study` and `get_study_findings`, and use `get_study_responses` for verbatim quotes and participant ids.
4. Use `list_personas`, `get_persona`, `list_panels` and `get_panel` only to explain where AI Panel results came from. Personas and simulated results are never evidence about real people.
5. These tools are read-only and spend nothing. If the answer leads to a new study, planning it with `plan_study` costs credits, and recruiting or running it spends credits or wallet funds, so each needs the person's clear confirmation first.

## Without a connection

This version works only on what the person pastes in. Ask them to paste in or upload their research reports, readouts, transcripts or exports, with the date and number of participants for each. Say at the top of the answer that it covers only the files provided, and that connecting User Sage through MCP lets the skill search every study in the workspace. The answer is a draft to check and to keep with the team's research in User Sage.

## Next step

If the research answers the question, share the answer with the person who asked. If it leaves a gap, use Plan a study to plan a study that fills it, and save it as a Study Brief in User Sage.
