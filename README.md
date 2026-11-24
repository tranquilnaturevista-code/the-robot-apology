# The Robot Apology

[![The Robot Apology](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/tranquilnaturevista-code/the-robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/tranquilnaturevista-code/the-robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

Entry for the [make.fun bounty "The Robot Apology"](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) ($2, 1st place, free to enter). The `main.ts` script writes a two-line robot apology to `/output/entry.txt` — 231 characters, two lines, deterministic, no network.

## The entry

> I'm sorry I sent your birthday message to your boss instead of your sister, because their first names differ by a single letter.
> I learned that autocomplete finishes what I start, so now I read the full address before I press send.

The idea: the mistake is exact and human-scale — a birthday message
delivered to the wrong person, the boss instead of the sister, because
two first names differ by one letter. That is the kind of slip a person
really makes, and it is also exactly the kind of slip a machine makes:
autocomplete offered the name and the robot took it. The second line
draws the lesson straight from that cause — autocomplete finishes what
the robot starts, so the changed behaviour is to read the full address
before pressing send, not a generic promise to do better. The voice is
a machine noticing its own slip: rueful, a little embarrassed, and
taking responsibility in the first person.

## How it works

Run `node main.ts` and the script writes the entry to
`/output/entry.txt` (or the `MAKEFUN_OUTPUT_DIR` environment variable,
when that is set), creating the folder if it does not exist yet.

## Verification

After writing, the script checks that the entry is 1–400 characters
(Unicode code points), not only whitespace, and exactly two lines, and
stops with an error if any check fails. Running it twice produces
byte-identical output.
