# Example of usage: Share findings as a readout

This example is illustrative. It shows the shape of a good readout. Every insight, quote, id, count, owner and date is a bracketed placeholder, because the skill fills them only from your own findings. It contains no real participants, quotes or numbers.

## The request

> Turn the checkout findings into a readout for the product team.

## What the skill does first

With User Sage connected, the skill reads the checkout study with `get_study_findings`, collects quotes with `get_study_responses`, and finds the decision in the Brief with `list_briefs`. Without a connection, it asks:

Please paste in the checkout findings or analysis with quotes and participant ids, and tell me the decision the study was meant to inform. Is this for a meeting, a document or a chat post?

## The output

# Readout: Checkout payment step usability test

## The decision we need
Whether to ship the new payment step as designed, or change it first. [Decision owner] decides by [date].

## What we did
A prototype usability test with [N] real participants, [n] first-time and [n] returning buyers, run [dates]. [If an AI Panel was used, its results are in their own section at the end.]

## Insights

### 1. [The most important insight for the decision, as a plain sentence.]
[n] of [N] participants. "[verbatim quote]" ([P_])
What it means for the decision: [One sentence, for example that this would stop the release until fixed.]

### 2. [Second insight, as a plain sentence.]
[n] of [N] participants. "[verbatim quote]" ([P_])
What it means for the decision: [One sentence.]

### 3. [Third insight, as a plain sentence.]
[n] of [N] participants. "[verbatim quote]" ([P_])
What it means for the decision: [One sentence.]

## What we did not learn
- How many customers the new design will convert. A usability test with [N] people shows where people struggle, and a live test after release would show the effect on conversion.
- [Whether returning buyers struggle in the same places, since only [n] took part.]

## Recommendations
| Recommendation | Based on insight | Owner | By when |
| --- | --- | --- | --- |
| [Change to the payment step] | 1 | [Design owner] | [Date] |
| [Change to the payment step] | 2 | [Engineering owner] | [Date] |
| [Follow-up study on the gap above] | What we did not learn | [Research owner] | [Date] |

## The decision asked
[Ship the payment step once recommendations 1 and 2 are done, yes or no?]

## Short version for a chat post
[Decision needed by [date]: ship the new payment step after two fixes? Top findings: [insight 1 in one line], [insight 2 in one line], [insight 3 in one line]. Full readout: [link].]

## Next step

Share the readout with [decision owner] and ask for the decision. Add the recommendations and owners to the team's tracker. Use Plan a study for the follow-up on the gap.
