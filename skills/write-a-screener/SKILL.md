---
name: write-a-screener
description: Writes a participant screener for a user research study, with behaviour and recency questions, hidden qualifying answers, a decoy, disqualifiers and quotas, plus an answer key that shows how each answer fits the brief. Use when someone needs to recruit the right people for a study, has a screener that reads like a quiz, or had participants last round who were not who they said they were.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Write a screener

## What this skill does

Write a screener that lets the right people in and keeps everyone else out, without telling anyone which answers qualify. You write it the way a senior researcher would: screen on what people did and how recently, hide the qualifying answer among plausible options, and add a decoy that catches people who say yes to everything.

## Use when

Use this skill when the person needs to find the right people, and their screener reads like a quiz, or last round's participants were not who they said.

## Output

Return the screener in exactly this structure.

```
# Screener: [study name]

## Who we are looking for
[One or two sentences, taken from the Brief: the behaviour, how recently, and any segment.]

## Questions
1. [Question text]
   Type: [single choice, multiple choice or open text]
   Options:
   - [Option] (qualifies)
   - [Option] (ends the screener)
   - [Option]
   - [None of these] (ends the screener)

[Repeat for each question, at most eight in total.]

## Answer key
| Question | Qualifying answers | Ends the screener | Why it matters for the Brief |
| --- | --- | --- | --- |

## Decoy
[Which question or option is the decoy, and what a decoy answer tells you.]

## Disqualifiers
[Each disqualifier and why it applies, such as working in research or for a competitor.]

## Quotas
| Segment | Target | Minimum |
| --- | --- | --- |

## Recruitment source
[Your Panel, GenPop or AI Panel, with what each needs and costs, and the one you recommend.]

## Open questions
[Anything to confirm, as bracketed placeholders.]
```

## Method

1. Start from the Brief. Write down who the study needs in one sentence, in terms of behaviour and recency, such as "bought running shoes online in the last 6 months". If there is no Brief, ask for the research question and audience first.
2. Turn each criterion into a behaviour question with a time frame. Ask "When did you last…" or "How often do you…", with ranges as options. Avoid yes or no questions, because the qualifying answer is easy to guess.
3. Hide the qualifying answers. Give each question four to six plausible options, put the qualifying ones among them in no particular order, and turn on random order where the tool allows it.
4. Add a decoy. Include one option that sounds plausible but does not exist or does not fit, such as a made-up brand or a product category the study does not cover. People who pick it are guessing.
5. Add disqualifiers. The usual ones are working in market research, UX or for a direct competitor, and taking part in a study on the same topic recently. Include only those that matter for this study.
6. Add one open text question that asks people to describe their last relevant experience in a sentence or two. It catches people who qualify on paper but cannot describe the behaviour.
7. Set quotas from the Brief. Give a target and a minimum per segment, so recruiting can stop or continue with a clear rule.
8. Keep it short. Six to eight questions is usually enough. Remove anything that does not decide who qualifies.
9. Write the answer key. For every question, list the qualifying answers, the answers that end the screener, and the line in the Brief that the question serves.
10. Check the screener before you return it. No question reveals the topic of the study more than it must, no qualifying answer is first in the list or the only specific one, every question has a "none of these" or "other" option where it needs one, and every question traces to the Brief.
11. Recommend a recruitment source. Your Panel is your own participants and is free. GenPop recruits real, screened participants and uses wallet funds. AI Panel runs the study with simulated personas and uses credits, and its results are never evidence about real people.

## What to ask for if it is missing

- The Brief, or the research question and who the study is for.
- The behaviour that qualifies someone, and the time frame.
- Any segments, and how many people the study needs in each.
- Who must be excluded.
- Where the person plans to recruit.

If something is missing, write the screener with bracketed placeholders and list them under Open questions.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. A screener contains no findings. Any claim about the audience, such as how common a behaviour is, is traced to a source the person gave you, or it stays a bracketed placeholder or an open question. Simulated participants from an AI Panel are never presented as real people, and their answers are never evidence.

## With User Sage connected (MCP)

1. Use `list_briefs` to find the Brief, and `get_study` if a draft study already exists, so the screener matches the plan.
2. Call `get_recruitment_options` to see the options that are open for this study, with what each costs and the current balances. Explain them in plain words and recommend one.
3. Only after the person approves the screener, offer to add it to a draft study with `create_study`. You cannot edit an existing study from chat, so for a study that already exists, give the person the screener to paste into the Builder in User Sage.
4. Recruiting or running the study needs the person's clear confirmation first, every time. `start_your_panel_recruitment` turns on a share link, `launch_genpop_recruitment` recruits real participants and spends wallet funds, and `run_ai_panel` runs simulated personas and spends credits. The `get_responses` prompt walks the person through these options.

## Without a connection

Ask the person to paste in the Brief or the research question, the audience, and any screener they already have. Return the screener and answer key as text. Say that it is a draft to paste into the study in User Sage, and that you cannot recruit anyone or check balances from here.

## Next step

Add the screener to the study in User Sage. Then run Audit a study before launch, which checks screener logic along with the rest of the study.
