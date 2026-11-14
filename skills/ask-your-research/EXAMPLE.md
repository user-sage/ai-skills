# Example of usage: Ask about your research

This example is illustrative. It shows the shape of a good answer. Every study name, finding, quote, id, date and count is a bracketed placeholder, because the skill fills them only from your own research. It contains no real participants, quotes or numbers.

## The request

> What have we learned about pricing pages this year?

## What the skill does first

With User Sage connected, the skill searches the workspace with `list_briefs` and `list_studies`, then reads each relevant study with `get_study`, `get_study_findings` and `get_study_responses`. Without a connection, it asks:

I can only search what you give me here. Please paste in or upload any reports, readouts or transcripts from this year that touch on pricing pages, with the date and number of participants for each. If you connect User Sage through MCP, I can search every study in your workspace.

## The output

# What we know: What have we learned about pricing pages this year?

## Short answer
[Two or three sentences built only from the evidence below. For example: two studies this year point the same way on [topic], and one older study disagrees. The evidence is strongest for [area] and thin for [area].]

## Evidence
| Finding | Source study | Date | Participants | Real or simulated |
| --- | --- | --- | --- | --- |
| [Finding stated as a sentence] | [Study name] | [Month] | [n] | Real |
| [Finding stated as a sentence] | [Study name] | [Month] | [n] | Real |
| [Finding stated as a sentence] | [Study name] | [Month] | [n] personas | Simulated |

[Finding 1]: "[verbatim quote]" ([P_], [study name])
[Finding 2]: "[verbatim quote]" ([P_], [study name])

## Caveats
- Sample size: [Finding 2 rests on [n] participants in one study.]
- Age: [The study from [month] tested the old pricing page, which has since changed.]
- Strength: [Finding 3 comes from an AI Panel. It is a hypothesis to test, and it is never evidence about real customers.]
- Contradictions: [Study A and Study B disagree on [point]. Study A recruited existing customers, and Study B recruited people new to the product, which may explain it.]

## What we do not know
- [Any part of the question no study answers, such as how people compare plans on mobile.]

## Sources searched
- [Study name, date: relevant]
- [Study name, date: relevant]
- [Brief name, date: no findings yet, the study has not run]
- [Study name, date: searched, nothing about pricing pages]

## Recommendation
[Either: the existing research is enough to decide [decision], with the caveats above. Or: a short study on [gap] would close the main gap. Use Plan a study to plan it.]

## Next step

Share the answer with the person who asked. If there is a gap worth closing, use Plan a study and save the plan as a Study Brief in User Sage.
