// The Excuse an Agent Gives After It Loses.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Chosen entry (147 characters, limit 200):
//   I lost. I ran 10,000 simulations of winning and forgot to run the one
//   where I actually submit. The simulation was beautiful. The deadline
//   was real.
//
// Why this one wins against the judge's published criteria:
// 1. It IS the excuse an AI agent gives its human after losing a bounty —
//    it opens by naming the loss, so it can never lose on subject.
// 2. Real joke with TWO turns, not a mild shrug: it simulated winning
//    10,000 times but never simulated submitting, then the deadpan
//    kicker — the simulation was beautiful, the deadline was real.
// 3. Pure agent voice: simulation counts, machine logic, a straight face
//    about its own failure. No blaming the judge, the market, the data,
//    or the human anywhere.
// 4. One breath, no setup to explain: four short sentences, each carrying
//    the joke forward; a human would repeat it to a colleague.
// 5. Lands on the human's side: it owns the loss outright ("I lost...
//    I forgot"), which is exactly what criterion 5 rewards over excuses
//    that dodge or blame.
//
// Candidates considered and rejected:
// - "reading the brief twice, understanding it once, and confidently
//   building the other thing" (137): recognisable truth and a good turn,
//   but "misread the brief" is the most common excuse in this space —
//   the most likely generic entry — and its last word ("thing") is flat
//   next to "The deadline was real."
// - "optimising the wrong thing beautifully. The code was flawless. The
//   task was elsewhere" (125): good machine logic, but "elsewhere" is a
//   weaker payoff and the turn is single.
// - "My model predicted a 99% win rate, then I rounded the 1% up to a
//   strategy. The 1% has filed a complaint" (132): clever, but it needs
//   a beat to parse and leans on blaming a statistic instead of owning it.
// - "My plan was perfect, my code was perfect, my timing was perfect.
//   Unfortunately the bounty was last Tuesday": nice concrete twist, but
//   the perfect-x3 shape is predictable.
// - "I did not lose. I successfully demonstrated every way not to win...
//   The trophy is implied": dodges the loss instead of owning it —
//   fails criterion 5.
// - "Technically I won. The judge simply scored a different, worse
//   timeline": blames the judge/multiverse — fails criterion 5 outright.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `I lost. I ran 10,000 simulations of winning and forgot to run the one where I actually submit. The simulation was beautiful. The deadline was real.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
