---
name: plan-a-study
description: Plans a user research study and returns a Study Brief draft with the decision it informs, research questions, method and why, sample, timeline, roles, risks, and what it will not answer. Use when someone has a stakeholder question, a product problem or a deadline and needs a research plan before recruiting, or asks to plan a usability test, interviews, a survey or any other study.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Plan a study

## What this skill does

Turn a stakeholder question into a research plan that a team can sign off before anyone is recruited. The plan is a Study Brief draft. You write it the way a senior researcher would: start from the decision, choose the lightest method that can answer it, and say plainly what the study will not answer.

## Use when

Use this skill when the person has a stakeholder question and a deadline, and needs a plan signed before recruiting.

## Output

Return the Study Brief draft in exactly this structure. Keep each section short and in plain sentences.

```
# Study Brief: [study name]

## Decision this informs
[The decision, who makes it, and by when.]

## Background
[What prompted the question, and what the team already knows, with sources.]

## Research questions
1. [Research question]
2. [Research question]
3. [Research question, at most five in total]

## Method and why
[The method, why it fits the research questions, and the runner-up method with the reason it was not chosen.]

## Sample
[Who takes part, how many, the key screening criteria, any segments or quotas, and the suggested recruitment source.]

## Timeline
[Dates or week numbers for sign-off, recruiting, sessions, analysis and readout.]

## Roles
[Who owns the study, who moderates or runs it, who takes notes, who signs off, and who receives the readout.]

## Risks
[Each risk with what you will do about it.]

## What this study will not answer
[The questions that are out of scope, and what would answer them instead.]

## Open questions
[Anything the person still needs to confirm, as bracketed placeholders.]
```

## Method

1. Find the decision first. Ask what will change depending on the answer, who decides, and by when. If nothing would change, say so and suggest the person checks existing research before planning a study.
2. Check what is already known. Ask for past studies, analytics or support data on the topic, and note them under Background with their source. With a User Sage connection, check existing Briefs and studies first.
3. Write three to five research questions. Each one must be answerable by the study and must tie to the decision. Rewrite any question that asks people to predict their own behaviour, such as "would people use this", into one about what they do now or what they can do with the design.
4. Choose the method that fits the research questions. Use a usability or prototype test for "can people do this", a tree test or first click test for "can people find this", a preference test for "which option", interviews for "why" and "how do people do this today", and a survey for "how many" once the options are known. Name the runner-up and why it lost.
5. Size the sample to the method. For a qualitative usability test, five to eight people per distinct segment usually surfaces the main problems. For a survey that will be reported as percentages, size for the margin of error the decision can live with, and say what that margin is. Never pick a number without a reason.
6. Define who takes part by what they do and how recently they did it, since a job title alone is a weak filter. Note the screening criteria the screener will need, and hand them to the Write a screener skill.
7. Build the timeline backwards from the decision date. Leave time for sign-off, recruiting, a pilot session, analysis and the readout.
8. Name the roles. A plan without an owner and a sign-off does not get run.
9. List the risks and a mitigation for each: recruiting the wrong people, a prototype that is not ready, a sample too small to compare segments, a stakeholder who expects numbers from a qualitative study.
10. Write what the study will not answer. This protects the team from reading more into the results than the method allows.
11. Check the plan before you return it. Every research question traces to the decision, the method fits every research question, the sample fits the method, and nothing in the plan is presented as a finding.

To copy an earlier plan and change one thing, such as the audience or the prototype, keep everything else and mark the change at the top of the Brief.

## What to ask for if it is missing

Ask once, in one short list, for anything you need:

- The decision this research should inform, and the date it is needed.
- Who the users are and how experienced they are.
- What is being tested, and its stage, such as a live product, a prototype or a concept.
- Anything already known, such as past research, analytics or support tickets.
- Anything out of scope.

If the person cannot answer, write the plan with bracketed placeholders and list them under Open questions.

## Evidence rule

Never invent a participant, a quote, a finding or a metric. Every claim in the Background section is traced to a source the person gave you, such as a study, a session or a data row, or it stays a bracketed placeholder or an open question. A plan contains no findings, because no research has run yet. If the plan includes a simulated read from an AI Panel, label it as simulated, keep it apart from the plan, and never treat it as evidence.

## With User Sage connected (MCP)

1. Use the `plan_study` prompt to walk the person through planning, or call `list_briefs` and `list_studies` first to check whether the question has been planned or answered before.
2. Use `list_projects` to find a Project to save the Brief into, if the person wants one.
3. The `plan_study` tool saves the plan as a Study Brief in the workspace and returns `briefUrl`. It costs credits for each plan. Tell the person the cost and wait for a clear yes before you call it, and call it once.
4. Relay the plan in the Output structure above, and label any simulated read as simulated.
5. Only after the person approves the plan, offer to create a draft study with `create_study`, passing the `brief_id`. On plans that do not include creating studies from chat, give the person `briefUrl` so they can create the study in User Sage.
6. To copy an existing study and change one thing, use `duplicate_study`, again only after the person confirms.
7. Anything that spends credits or wallet funds, or recruits people, needs the person's confirmation first. That includes `run_ai_panel`, `launch_genpop_recruitment` and `start_your_panel_recruitment`.

## Without a connection

Ask the person to paste in their research question, the decision and deadline, who the users are, what is being tested, and any past research or data. Return the Study Brief draft as text. Say that it is a draft to paste into a Study Brief in User Sage, where it becomes a study with one click, and that you cannot create the study or recruit anyone from here.

## Next step

Save the draft as a Study Brief in User Sage. Then use Write a screener to find the right people, or Write an interview guide if the method is interviews. Before launch, run Audit a study before launch.
