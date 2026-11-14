# Example of usage: Analyse findings

This example is illustrative. It shows the shape of a good analysis. Every theme, quote, id and count is a bracketed placeholder, because the skill fills them only from your own data. It contains no real participants, quotes or numbers.

## The request

> Analyse the checkout study. Show me the evidence for each theme.

## What the skill does first

With User Sage connected, the skill finds the checkout study with `list_studies`, reads it with `get_study_findings` and `get_study`, and pages through `get_study_responses` for quotes. Without a connection, it asks:

Please paste in the session notes or transcripts, with a participant id for each person, and the research questions from the Brief. Tell me if any results came from an AI Panel, so I can keep them separate.

## The output

# Analysis: Checkout payment step usability test

## What this is based on
[N] real participants in [moderated or unmoderated] sessions, run [dates]. [Number of first-time and returning buyers.] [If the study also ran through an AI Panel, those results are in the Simulated results section and are not counted here.]

## Codebook
| Code | Definition | Participants | Example quote (participant id) |
| --- | --- | --- | --- |
| [Unexpected cost] | [The participant reacts to a cost they did not expect to see] | [P_, P_, P_] | "[verbatim quote]" ([P_]) |
| [Trust at payment] | [The participant hesitates or comments on whether the payment page is safe] | [P_, P_] | "[verbatim quote]" ([P_]) |
| [Form error] | [The participant enters something the form rejects] | [P_, P_, P_] | "[verbatim quote]" ([P_]) |

## Themes

### Theme 1: [A plain sentence stating the finding, for example "People did not expect delivery costs to appear at the payment step".]
Count: [n] of [N] participants.
Evidence:
- "[verbatim quote]" ([P_], [session _])
- "[verbatim quote]" ([P_], [session _])
- [Observed behaviour, such as went back to the basket to check the total] ([P_], [session _, timestamp])
Counter-examples: [P_ said they expected the cost: "[verbatim quote]"], or None found.
Confidence: [Medium. Consistent across first-time buyers, with one counter-example from a returning buyer.]

### Theme 2: [A plain sentence stating the finding.]
Count: [n] of [N] participants.
Evidence:
- "[verbatim quote]" ([P_], [session _])
- "[verbatim quote]" ([P_], [session _])
Counter-examples: [None found.]
Confidence: [Low. Only first-time buyers, and most of the evidence is hesitation with few comments.]

[Further themes, ordered by how many participants they come from.]

## Single-voice observations
- [One participant's observation that may matter]: "[verbatim quote]" ([P_]). Worth checking in the next round.

## Simulated results (AI Panel)
[Only if the study ran through an AI Panel. For example: the simulated personas also hesitated at the delivery cost line. This is a hypothesis to test with real people, and it is never evidence.]

## Gaps and open questions
- [Research question 4, whether first-time and returning buyers struggle in different places, is answered only partly, because there were [n] returning buyers.]
- [The sessions used test card details, so trust at payment may look different with real money.]

## Next step

Check the themes against the recordings with the team, then use Share findings as a readout to turn them into a readout for the product team.
