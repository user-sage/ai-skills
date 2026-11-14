---
name: share-findings-readout
description: Turns research findings into a readout ordered by the decisions it should inform, with three to five insights each backed by a quote and a count, what was not learned, recommendations with an owner, and the decision asked, shaped for the audience and channel. Use when a study is analysed and someone needs a readout, a research summary, a stakeholder update or slides for a product team, leadership or a channel post.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Share findings as a readout

## What this skill does

Turn findings into a readout that gets a decision made. You write it the way a senior researcher would: lead with the decision, keep to the few insights that matter for it, back each one with a quote and a count, say plainly what the study did not learn, and give every recommendation an owner.

## Use when

Use this skill when findings get a nice meeting and then nothing changes, and you need a readout ordered by the decisions it should inform.

## Output

Return the readout in exactly this structure, then adapt its length to the channel the person names.

```
# Readout: [study name]

## The decision we need
[The decision, who makes it, and by when, in one or two sentences.]

## What we did
[Method, who took part and how many, and when, in one or two sentences. Note any AI Panel results and that they are reported separately.]

## Insights
### 1. [The insight as a plain sentence]
[n] of [N] participants. "[verbatim quote]" ([participant id])
What it means for the decision: [one sentence]

[Three to five insights in total, ordered by how much they matter for the decision.]

## What we did not learn
[Questions the study did not answer, and why.]

## Recommendations
| Recommendation | Based on insight | Owner | By when |
| --- | --- | --- | --- |

## The decision asked
[The specific yes or no, or choice, the readout asks the audience to make.]

## Simulated results (AI Panel)
[Only if used. Report them separately as hypotheses to test with real people, and never as evidence.]
```

## Method

1. Find the audience and the channel first. A product team needs design detail, leadership needs the decision and the risk, and a channel post needs the short version. Ask if it is not clear.
2. Start from the decision in the Brief. Order everything in the readout by how much it matters for that decision.
3. Choose three to five insights. Use the themes from the analysis, and leave out anything that does not bear on the decision. Put the rest in an appendix or a link to the full analysis.
4. Write each insight as a plain sentence that states what was found. A topic label such as "Payment" is not an insight.
5. Back each insight with a count and a quote. Use "[n] of [N] participants" for qualitative studies and keep percentages for surveys with a sample that supports them. Use one verbatim quote with its participant id, chosen because it is typical, and avoid picking the most dramatic one.
6. Say what each insight means for the decision in one sentence.
7. Write what the study did not learn. This stops the audience from reading more into the results than the method allows, and it is where follow-up research comes from.
8. Turn insights into recommendations. Each one names the insight it comes from, an owner and a date. A recommendation with no owner is a wish.
9. End with the decision asked, as a specific choice the audience can make in the meeting or in reply.
10. Shape for the channel. For slides, one insight per slide with the quote and count. For a document, the full structure. For a chat or email post, the decision, the top three insights in one line each, and a link to the full readout.
11. Check the readout before you return it. Every count and quote matches the analysis, every recommendation traces to an insight, simulated results are separate, and nothing is presented as more certain than the evidence.

## What to ask for if it is missing

- The findings or the analysis, ideally from the Analyse findings skill, with quotes and participant ids.
- The decision the study was meant to inform, and who makes it.
- The audience and the channel, such as a meeting, a document, slides or a chat post.
- Who could own each recommendation, if the person knows.

If something is missing, use bracketed placeholders, such as [owner], and list them for the person to fill.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. Every insight is traced to quotes, sessions or data rows from the analysis or the study results, and every quote is verbatim with its participant id. Anything you cannot trace stays a bracketed placeholder or an open question. Simulated results from an AI Panel are always reported in their own section, never counted with real participants, and never presented as evidence.

## With User Sage connected (MCP)

1. Use the `summarize_findings` prompt for a first pass, then shape it into the readout structure above.
2. Find the study with `list_studies`, and read it with `get_study` and `get_study_findings`.
3. Use `get_study_responses` to collect verbatim quotes and participant ids for each insight.
4. Use `list_briefs` to find the decision and research questions the study was planned against.
5. Keep AI Panel results and real participant results apart, and say which each insight comes from. End with `resultsUrl` so the audience can see the full results.
6. These tools are read-only. If the readout leads to a follow-up study, planning it with `plan_study` costs credits, and recruiting or running it spends credits or wallet funds, so each needs the person's clear confirmation first.

## Without a connection

Ask the person to paste in their findings or analysis, with quotes and participant ids, the decision, and the audience and channel. Return the readout as text. Say that it is a draft to check against the study and to share from User Sage, and that you can only use what they pasted in.

## Next step

Share the readout with the decision maker and ask for the decision. Record the recommendations and owners where the team tracks work. If the readout names a gap, use Plan a study to plan the follow-up and save it as a Study Brief in User Sage.
