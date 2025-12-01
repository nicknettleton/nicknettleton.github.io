---
title: "Why Explainability is the #1 Issue in AI Today"
description: "We are sleepwalking into a crisis of accountability. Why the simple trade-off between transparency and accuracy is creating a trust gap that is holding back AI."
pubDate: "10 Oct 2025"
---

Earlier this year I was doing a lot of work in AI, and won the Explainability Prize in the [National Institutes of Health (NIH) PREPARE challenge](https://www.drivendata.org/competitions/group/nih-nia-alzheimers-adrd-competition/), hosted by DrivenData.

Over recent months I've been focusing more on UX design and engineering for a $30m public transport co, where each % improvement we can deliver our users is worth literally hundreds of thousands of dollars. Exciting. More on that later.

My work on that project, focusing on the nuts and bolts of user trust and adoption, has brought my focus back to some of the big questions in AI... the dizzying pace of innovation, the hype, and the noise. How do we make sense of it all?

Let's cut through the noise to answer three questions:

1. Where is AI now?
2. Where is AI going?
3. What are the big issues to solve?

There's too much here for one post, so I'll do a short series. I'll stick to my particular spheres of expertise, and try to speak to a wide audience (so please bear with me expert readers if you know much of this already).

## 1. Where is AI Now?

The current media hype is still very much around Gen AI: a particular form of AI that is good at creating text, images, documents, video, sound and other information. Also coming into view we have Agentic AI for doing tasks, Multimodal AI for reasoning across data formats, and On-Device (as opposed to cloud) AI. These all represent big shifts.

Let's focus on Gen AI first, because it's what people are most familiar with. ChatGPT, Copilot, Gemini, Sora, DeepSeek - these are all Gen AI.

The technology seems pretty magical, but fundamentally it's just maths: a probabilistic prediction model which, having been trained on vast quantities of information, takes some input and predicts what the most likely next word or pixel or whatever is. Note the phrase 'most likely' there - that's key. Not 'correct', but 'most likely'.

It really is just maths. Gen AI does not 'know' anything in the human sense of knowing, and it has no concept of truth. I chuckled when Gemini wrote the following to me today, without a hint of irony:

> It doesn't _know_ what is true; it knows what is _plausible_. It's a "bullshit generator" in the technical sense - it strings together text that _looks_ right, based on patterns it has seen. This is the root of hallucinations.

We'll come back to that later.

Gen AI is built on a type of model called a neural network, the original maths for which was conceived back in the 1950s and 60s.[^1] I think that's amazing.

This is an important point, because it helps us to step back for a moment and see the bigger picture rather get stuck in the 'now'.

## 2. The Bigger Picture

AI is not new. It's been around in business and everyday life for decades - helping to deliver your post, on your phone, behind the scenes in Google Search, to name just a few. While AI is exploding right now, the fundamentals for where we are at, and what the next priorities are, are part of a long term body of research, design, development and experimentation in data science and machine learning. My own work in the field builds on this long history of using maths to find patterns in data, and design to communicate them.

What is new-ish is (1) massive growth in compute power (chiefly from GPUs), which has enabled (2) much bigger and more complex models (such as Google's 2017 Transformer architecture) to be trained much faster on massive datasets. This led to (3) rapid experimentation and progress, and finally (4) ChatGPT's public release in 2022 with the clever UX innovation of fronting it up with a chat interface.

This was the starting gun that set off the current Gen AI-led craze. The underlying technology had been around for several years: **it was a design and UX innovation that brought it to the world**.

Hot on the heels of this came the accelerated development and release of competing models (Gemini, Microsoft Copilot and co); massive increase in public interest and capital investment; mind boggling numbers of new startups and tools built on top of these Gen AI models; and pressure on business to adapt quickly for fear of being disrupted.

Today we might describe the atmosphere as one of great uncertainty, fear of a bubble, questions about what to focus on and return on investment, and concern about risks to business and society. This was certainly what came through loud and clear from a recent UK AI strategic review meeting I attended.

Fundamental to this are the interlinked issues of explainability, transparency, trust and control. If we don't understand how it works, and we're not sure if we can control it, how can we use it safely? And that is absolutely the right question to ask.

**For me, this is *number one* challenge in AI right now.**

If that sounds a bit strong, consider this.

## 3. The Explainability Problem

It's *extremely difficult*, even for the developer, to explain how or why a complex model makes particular prediction. It's not a language problem, it's mathematical problem. That's what we mean by black box. I'll explain why in a separate post, because I want to focus first on why this is important:

- **End user:** Your gold standard model evaluation process sounds great, but if you can't explain to me how it works, then I'm sorry, I'm worried.
- **Business user:** And if we don't know how it works, then how do we know when it's not working?
- **Doctor:** If we don't know how it works, how can medical experts check if they agree with how the diagnosis is made? If we cannot trace the chain of reasoning, we cannot accept the diagnosis.
- **Lawyer:** If we don't understand how it works, how can anyone sign contracts, or work out who's responsible when something goes wrong?
- **Developer:** When it inevitably doesn't work (because nothing works 100% of the time), if I don't understand how it works, then how am I going to debug it?

These are valid concerns.

Especially because, since AI is probabilistic, it *cannot* always be correct - in just the same way as when you flip a coin twice, you're not always going to get one head and one tail. That's life.

To some extent, given the amazing capabilities of Gen AI, we've been prepared to overlook these uncertainties. We can see the input, we can see the output, and we can see if we are happy with it. It feels fine for words and pictures and things, in not-too-sensitive contexts.

But this issue of explainability and transparency is a massive barrier to wider deployment of Gen AI in more sensitive and less scrutable applications, and is still discomforting in more general settings. It's affecting user trust and confidence. It's affecting government ability to regulate. It's making business leaders nervous because they don't know what they are liable for.

As humans, we're just not built for living with things we can't take apart and understand.

Something that looks like magic, feels like magic, and we can't really explain how it works - wasn't that what the whole history of science was about solving? It's not just evidence that something works that we want. It's the nuts and bolts of how. This is how we understand our world, and how we can do certain things to make our lives better.

So, how do we solve this?

I want to start by understanding the scale and reasons for the problem. In my [next post](/blog/2025-10-16-simple-vs-complex-models/), we'll dive deep into the Explainability Problem and what we really mean by Black Box. We'll compare a simple model with 2 parameters, which we can easily explain, to a modern AI with 1.5 trillion. 

This will then help us to understand where current approaches to explainability aren't working, and from this what we can do to solve them.

----

[^1]: I'm thinking here of Frank Rosenblatt's Perceptron, 1958, but you could argue for earlier work. [https://en.wikipedia.org/wiki/History_of_artificial_neural_networks](https://en.wikipedia.org/wiki/History_of_artificial_neural_networks)