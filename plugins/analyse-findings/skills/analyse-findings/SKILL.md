---
name: analyse-findings
description: Analyses user research data into a codebook, codes with quotes and participant ids, themes with counts, counter-examples and single-voice observations, with real participant and simulated AI Panel results reported separately and every claim traced to its evidence. Use when sessions, interviews, usability tests or surveys are done and someone wants themes, synthesis or analysis of transcripts, notes or responses with the evidence for each theme.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Analyse findings

## What this skill does

Turn raw research data into themes a team can trust, with every quote kept and every claim traced. You work the way a senior researcher would: code the data before you theme it, count how many people each theme comes from, look for the evidence that disagrees, and keep simulated results apart from real people.

## Use when

Use this skill when the sessions are done and the team wants themes, with every quote kept, and every claim traced.

## Output

Return the analysis in exactly this structure.

```
# Analysis: [study name]

## What this is based on
[The data analysed: number of real participants, sessions or responses, dates, and method. Any AI Panel results are listed here separately.]

## Codebook
| Code | Definition | Participants | Example quote (participant id) |
| --- | --- | --- | --- |

## Themes
### Theme 1: [a plain sentence that states the finding]
Count: [n] of [N] participants.
Evidence:
- "[verbatim quote]" ([participant id], [session or row])
- "[verbatim quote]" ([participant id], [session or row])
Counter-examples: [participants whose data disagrees, with a quote, or "None found".]
Confidence: [high, medium or low, with the reason.]

[Repeat for each theme, ordered by how many participants it comes from.]

## Single-voice observations
[Things only one participant said or did that may matter, each with its quote and id. These are not themes.]

## Simulated results (AI Panel)
[Reported separately, only if the study ran through an AI Panel. They are hypotheses to test with real people, and they are never evidence.]

## Gaps and open questions
[What the data does not answer, and what would answer it.]
```

## Method

1. Read everything once before coding. Note the method, the research questions, the number of participants, and which data comes from real people and which from an AI Panel. Put simulated data aside for its own section.
2. Give every participant a stable id, such as P1 to P8, and keep it with every quote. Use the ids that the data already has where possible.
3. Code the data. Mark each meaningful quote, action or answer with a short code. Define each code in one sentence so someone else would apply it the same way. Merge codes that mean the same thing.
4. Build themes from the codes. A theme is a pattern across several participants that answers a research question. State each theme as a plain sentence, such as "People did not expect delivery costs at the payment step", and avoid one-word topic labels.
5. Count. For each theme, count how many distinct participants it comes from, and report it as "[n] of [N] participants". Count each person once, however many times they mention it. Do not turn small qualitative counts into percentages.
6. Look for counter-examples. For each theme, search the data for participants who said or did the opposite, and report them. A theme with no counter-examples checked is not finished.
7. Keep single voices separate. Something only one person said can still matter, so report it as a single-voice observation and keep it out of the themes.
8. Rate confidence. High when the theme comes from many participants with consistent evidence and few counter-examples, medium when it is consistent but from fewer people, low when the evidence is thin or mixed.
9. Map themes to research questions. Note which research questions the data answers well, which it answers partly, and which it does not answer at all.
10. Check the analysis before you return it. Every quote is verbatim and has a participant id, every count matches the evidence listed, real and simulated results are never mixed, and nothing is stated that the data does not show.

## What to ask for if it is missing

- The data: transcripts, notes, recordings summaries, a survey export or a results export.
- The research questions or the Brief.
- How participants are identified, and whether any results came from an AI Panel.
- The method and how many people took part.

If the data is partial, analyse what you have and say clearly what was missing.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. Every theme is traced to quotes, sessions or data rows that the person gave you or that you read through MCP. Quotes are verbatim, never cleaned up or combined. Anything you cannot trace stays a bracketed placeholder or an open question. Simulated results from an AI Panel are always reported in their own section, never counted with real participants, and never presented as evidence.

## With User Sage connected (MCP)

1. Use the `summarize_findings` prompt for a quick summary, or follow these steps for the full analysis.
2. Find the study with `list_studies`, and ask which one if more than one could match.
3. Read the results with `get_study_findings`. Read the study and its research questions with `get_study`.
4. Page through `get_study_responses` to collect verbatim quotes and participant ids for each theme.
5. Keep AI Panel results and real participant results apart, and say which each finding comes from.
6. These tools are read-only. If the person wants more data, such as a second round with real people, recruiting or running a study needs their clear confirmation first, because `launch_genpop_recruitment` spends wallet funds and `run_ai_panel` spends credits.

## Without a connection

Ask the person to paste in their transcripts, notes or response export, with participant ids, and the research questions. Return the analysis as text. Say that it is a draft to check against the data and to save with the study in User Sage, and that you can only analyse what they pasted in.

## Next step

Check the themes against the data with the team. Then use Share findings as a readout to turn them into a readout for the people who decide.
