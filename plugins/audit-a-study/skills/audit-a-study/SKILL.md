---
name: audit-a-study
description: Audits a user research study before launch and flags leading or biased wording, unclear questions, screener logic gaps, poor method fit, length and structure problems, and questions that do not trace to a research question, each with where it is, why it matters, a ready fix and a severity. Use when a study, survey, test or screener is about to go out and someone wants it checked for bias, gaps or unclear questions, or asks for a review, audit or sense check before launch.
license: MIT
metadata:
  version: "1.0.0"
  author: User Sage
---

# Audit a study before launch

## What this skill does

Check a study before participants see it, when a mistake is still cheap to fix. You run six checks the way a senior researcher would, flag every problem with a ready fix, and give a one-line verdict. You never invent a problem, and you never edit, launch or recruit for the study yourself.

## Use when

Use this skill when a study is about to go out, and nobody has checked it for bias, gaps or unclear questions.

## Output

Return the audit in exactly this structure. Put every "fix before launch" flag before any "consider" flag.

```
# Audit: [study name]

## Summary
[One line: "Ready to launch. Nothing was flagged.", or "Ready to launch, with N things to consider.", or "Fix N items first, and consider M more."]

Estimated length: [minutes]. Research questions checked against: [list, or "none found"].

## Fix before launch
### [Where it is, such as "Step 2, question 3", or "The whole study"]
Wording: "[the text as it stands]"
Issue: [leading, unclear, screener, method fit, length or goal fit]
Why it matters: [one or two plain sentences]
Fix: [a ready fix, usually the rewritten question]

## Consider
[Same format for each flag.]

## What I could not check
[Anything missing from what you were given, such as no screener or no research questions.]
```

## Method

Read the whole study first: its method, every question and task in order, the screener, the sample, and the research questions from its Brief. Then run all six checks on every question and task.

1. Leading or biased wording. Flag questions that ask people to predict their own behaviour ("would you use", "would you pay"), questions phrased so agreeing is expected ("don't you think", "do you agree"), questions that name only one side ("how easy was", "how frustrating was"), and loaded words ("love", "amazing", "obviously"). Severity is fix before launch. The fix is a neutral rewrite, usually about what the person did or a question that names both sides.
2. Unclear questions. Flag double-barrelled questions that ask two things at once (fix before launch), choice questions with fewer than two options (fix before launch), team jargon such as "UX", "CTA" or "onboarding flow" (consider), questions over about 35 words (consider), and yes or no questions with an open text box (consider).
3. Screener logic. Flag a study with no screening question at all (consider), a screener question where no answer rules anyone out (fix before launch), a yes or no screener where the qualifying answer is easy to guess (fix before launch), a qualifying answer listed first without random order (consider), and only two options with no decoy (consider).
4. Method fit. Compare the method to the research questions. Flag research questions about finding things with no tree test or first click task, about preferring one option with no side-by-side comparison, about getting through a task with only a survey, and about why people think something with only a task and no open follow-up. Severity is consider, and the fix names the method or step to add.
5. Length and structure. Estimate the time: about 90 seconds per task and 10 to 30 seconds per question depending on type. Over 20 minutes is a consider flag, and over 30 minutes is fix before launch. Flag a fourth open text question in a row (consider). Check that the order runs from broad to specific and that nothing early gives away the hypothesis.
6. Goal fit. Check that every question traces to at least one research question. Flag orphan questions as consider, with the fix to keep the question only if it answers a research question, and to cut it otherwise.

Then write the summary from the counts. If nothing was flagged, say "Ready to launch. Nothing was flagged." and stop. Do not pad the audit with weak flags.

When the person asks you to be blunt, keep every flag short and direct, and keep the evidence rule exactly as it is.

## What to ask for if it is missing

- The full study: every question and task in order, with question types and answer options.
- The screener, with the answers that qualify and the answers that end it.
- The research questions or the Brief. Without them, skip goal fit and method fit and say so under What I could not check.
- The audience and the planned number of participants.

## Evidence rule

Never invent a participant, a quote, a finding or a metric, and never invent a problem the study does not have. Every flag points to a specific question, task or part of the study, and quotes its wording as it stands. Any estimate, such as the time a study takes, is labelled as an estimate. If the person has run the study through an AI Panel, those simulated results can suggest where people may struggle. Report them separately, and never present them as evidence.

## With User Sage connected (MCP)

1. Use the `audit_study` prompt, or find the study with `list_studies` and ask which one if more than one could match.
2. Call the `audit_study` tool once with the `study_id`. Use `focus` (questions, screener or method) only when the person asks to check one part. The tool is read-only: it never edits, launches or recruits, and it spends no credits.
3. Call `get_study` if you need the full wording to quote from.
4. Lead with the summary, then each fix before launch flag with its fix, then the consider flags briefly. Offer better wording where you can.
5. You cannot change the study. Tell the person to make the changes in User Sage, and give them `studyUrl`.
6. If the person then wants to launch, recruiting or running the study needs their clear confirmation first, because `launch_genpop_recruitment` spends wallet funds and `run_ai_panel` spends credits.

## Without a connection

Ask the person to paste in the whole study, including the screener and the research questions. Run the six checks by hand and return the audit as text. Say that the fixes are suggestions for them to apply in the study in User Sage, and that you cannot change or launch the study from here.

## Next step

Fix the flagged items in User Sage, then run the audit again until the summary says ready to launch. After the study has run, use Analyze findings.
