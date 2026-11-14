---
name: write-an-interview-guide
description: Writes a user interview guide that maps each research question to interview questions, with story openers, probes, a time budget for each section and a leading-question check. Use when interviews are booked and someone needs a discussion guide, or when a question list starts with "would you use" or contains leading questions that need rewriting.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Write an interview guide

## What this skill does

Write the guide a person runs a live interview from. You write it the way a senior researcher would: every question traces to a research question, the questions ask about real past experiences, probes are ready for when an answer is thin, and the time budget fits the session.

## Use when

Use this skill when interviews are booked and the question list starts with "would you use", or with a leading question.

## Output

Return the guide in exactly this structure.

```
# Interview guide: [study name]

Length: [minutes]. Participants: [who, from the Brief].

## Research questions
1. [Research question]
2. [Research question]

## Coverage
| Research question | Interview questions that answer it |
| --- | --- |

## Guide

### Introduction ([minutes])
[What to say: thanks, purpose in neutral words, consent and recording, there are no right answers.]

### Warm-up ([minutes])
[One or two easy questions about the person's context.]

### [Section name, tied to research question 1] ([minutes])
1. [Story opener: "Tell me about the last time you…"]
   - Probe: [What happened next?]
   - Probe: [How did you decide?]
2. [Question]
   - Probe: [...]

[Repeat for each section.]

### Wrap-up ([minutes])
[Anything we did not ask that we should have? Thanks and next steps.]

## Time budget
| Section | Minutes | Running total |
| --- | --- | --- |

## Leading-question check
| Original wording | Problem | Rewritten |
| --- | --- | --- |

## Notes for the interviewer
[What to avoid, what to listen for, and which questions to drop if time runs short.]
```

## Method

1. Start from the research questions in the Brief. If there are none, ask for them, or help the person write two to four before you write any interview questions.
2. Plan the time. Take five minutes for the introduction, five for warm-up and five for wrap-up, and split the rest across sections in proportion to how much each research question matters. Plan for about one main question every five minutes, because stories and probes take time.
3. Open each section with a story about a real, recent event: "Tell me about the last time you…". Past behaviour is more reliable than opinions or predictions.
4. Write probes under each main question: what happened next, how they decided, what they tried first, what was hard, what they did instead, and how they felt at that moment. Probes keep the person talking without suggesting an answer.
5. Run the leading-question check on every question. Rewrite anything that asks people to predict behaviour ("would you use"), states a view ("don't you think"), names only one side ("how easy was it"), uses a loaded word, asks two things at once, or uses team jargon. Put every rewrite in the check table.
6. Order the sections from broad to specific. Ask about the person's own experience before showing any design or concept, so the design does not shape their story.
7. Check coverage. Every research question has at least one main question, and every main question traces to a research question. Flag or cut any question that does not.
8. Mark which questions to drop if the session runs short, so the interviewer protects the most important research question.
9. Check the guide before you return it. The time budget adds up to the session length, no question is leading, and the introduction does not reveal the hypothesis.

## What to ask for if it is missing

- The research questions, or the Brief.
- The session length and whether it is remote or in person.
- Who the participants are.
- Whether there is a design, prototype or concept to show, and at what point.
- Any questions the team already wants asked, so you can check and rewrite them.

If something is missing, write the guide with bracketed placeholders and list what you still need.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. A guide contains no findings, and example answers are never written as if a real person said them. Any claim about the audience in the guide is traced to a source the person gave you, or it stays a bracketed placeholder or an open question. If simulated people from an AI Panel are used to pilot the guide, report what they said separately and never treat it as evidence.

## With User Sage connected (MCP)

1. Use `list_briefs` to find the Brief and its research questions, and `get_study` if a related study exists.
2. Write the guide in the Output structure above.
3. If the person wants a follow-up survey or test built from the same research questions, offer to create a draft study with `create_study` once they approve the content. Creating a study is the person's decision, so ask first.
4. Anything that spends credits or wallet funds, or recruits people, such as `run_ai_panel`, `launch_genpop_recruitment` or `start_your_panel_recruitment`, needs the person's clear confirmation first.

## Without a connection

Ask the person to paste in the Brief or research questions, the session length, who the participants are, and any draft questions. Return the guide as text. Say that it is a draft to save with the Study Brief in User Sage, and that you cannot schedule sessions or recruit anyone from here.

## Next step

Save the guide with the Study Brief in User Sage, and run a pilot interview with a colleague to check the timing. If the guide needs participants, use Write a screener. After the sessions, use Analyze findings.
