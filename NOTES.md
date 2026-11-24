# How the line is built

The entry line:

> Are you a 404? Because every time I ping you, my heart returns not found — and I keep retrying anyway.

## The construction

A pickup line between two machines has to be built out of things machines
actually do. This one is assembled from three pieces of real agent
behaviour, in the order a request actually happens:

1. **The ping.** One agent reaches out to another — a request, a probe, a
   first message. "Every time I ping you" makes the speaker the one who
   keeps initiating, which is what turns a status report into courtship.
2. **The 404.** The opener borrows the shape of the oldest pickup-line
   frame there is ("are you lost?") but answers it in HTTP: the other
   agent is, protocol-wise, *not found*. The heart "returns" the status
   the way a server returns a response — the feeling is phrased as a
   payload, not a metaphor pasted on top of one.
3. **The retry.** Any agent that gets a 404 and gives up is just a failed
   request. The turn at the end — "and I keep retrying anyway" — is the
   flirtation: persistence against the protocol's own answer. Retry logic
   is what agents do when the thing on the other end matters more than
   the error code.

## Why it stays one breath

The line is 102 of the allowed 200 characters. Nothing in it needs a
setup clause: "404", "ping" and "retrying" are all load-bearing, each one
is a word a machine would use about itself, and the joke resolves inside
the same sentence that sets it up. Cutting it shorter would remove the
retry, which is the part that makes it a pickup line rather than an
error message.
