export const scenarios = [
  {
    id: 1,
    message: "Your partner says: 'I feel like you're not emotionally present.'\nHow do you typically respond?",
    options: [
      {
        text: "I'm literally here, aren't I?",
        correct: false,
        feedback: "This response likely comes from defensiveness or feeling unfairly judged. You may feel like your effort is being dismissed. But instead of clarifying technically, try focusing on emotional presence. Your partner isn’t pointing out your location — they’re expressing a need for connection.",
        recommended: "I'm sorry you feel that way. Can we talk about what's been coming up for you?"
      },
      {
        text: "I'm sorry you're feeling that way. Can we talk about it more?",
        correct: true,
        feedback: "Great response — it shows empathy, openness, and a willingness to understand rather than defend. It helps your partner feel heard and safe."
      },
      {
        text: "Here we go again...",
        correct: false,
        feedback: "This likely reflects emotional exhaustion or a tendency to shut down when faced with relational tension. You might be feeling overwhelmed and unsure how to respond productively. But sarcasm erodes trust. Instead, take a breath and try to stay engaged — even gently saying you're not sure what to say yet is better.",
        recommended: "I'm sorry you feel that way. Can we talk about what's been coming up for you?"
      },
      {
        text: "What exactly do you want from me?",
        correct: false,
        feedback: "This response usually stems from feeling pressured or incapable. It’s a protective reaction to a perceived emotional demand. But this tone can feel cold or impatient. Try staying with your partner’s emotional state instead of jumping to problem-solving or frustration.",
        recommended: "I'm sorry you feel that way. Can we talk about what's been coming up for you?"
      }
    ]
  },
  {
    id: 2,
    message: "Your partner says: 'I just feel so drained lately.'\nHow do you typically respond?",
    options: [
      {
        text: "Want me to leave you alone?",
        correct: false,
        feedback: "This may come from discomfort with emotions or a fear of saying the wrong thing. You might be trying to give space, but it can feel like emotional withdrawal. Try asking what kind of support they need instead of assuming.",
        recommended: "Do you want to talk about it, or would you rather just relax together for a bit?"
      },
      {
        text: "Do you want to talk about it, or would you rather just relax together for a bit?",
        correct: true,
        feedback: "Perfect. You’re showing care, offering presence, and giving them agency. It’s supportive without pressure, which builds emotional safety."
      },
      {
        text: "You're always tired. Maybe you should start working out again?",
        correct: false,
        feedback: "This likely comes from a desire to fix things quickly — or discomfort with emotional heaviness. But it risks sounding critical. What your partner likely needs is not advice, but compassion and co-regulation.",
        recommended: "Do you want to talk about it, or would you rather just relax together for a bit?"
      },
      {
        text: "Well, you're not the only one who's had a rough day.",
        correct: false,
        feedback: "This response reflects comparison — a subconscious bid to have your own pain seen. But it tends to invalidate your partner’s experience. Try staying in their world first. You can share your day too, just not in a way that shuts them down.",
        recommended: "Do you want to talk about it, or would you rather just relax together for a bit?"
      }
    ]
  },
  {
    id: 3,
    message: "Your partner says: 'Sometimes I wonder if you’re actually happy with me.'\nHow do you typically respond?",
    options: [
      {
        text: "That’s your issue, not mine.",
        correct: false,
        feedback: "This often comes from feeling blindsided or triggered by self-doubt. You might feel accused. But deflecting responsibility makes your partner feel even more insecure. Try inviting understanding rather than protecting your ego.",
        recommended: "I'm really sorry you're feeling that way. What’s been coming up for you lately that’s making you wonder that?"
      },
      {
        text: "I hate that you're feeling that way. I am happy — what’s making you feel unsure?",
        correct: true,
        feedback: "This response is emotionally available and curious. You're showing care while offering reassurance and leaving space for a deeper conversation."
      },
      {
        text: "Here we go again. You overthink everything.",
        correct: false,
        feedback: "This comes from impatience or fear of emotional entanglement. You might feel unequipped to handle emotional depth. But labeling your partner as ‘overthinking’ minimizes their experience and builds resentment.",
        recommended: "I'm really sorry you're feeling that way. What’s been coming up for you lately that’s making you wonder that?"
      },
      {
        text: "Maybe you're not happy with me either.",
        correct: false,
        feedback: "This likely stems from defensiveness and anxiety — a need to shift the vulnerability off of you. But it redirects the moment away from connection and into a blame game. Instead, stay anchored in empathy.",
        recommended: "I'm really sorry you're feeling that way. What’s been coming up for you lately that’s making you wonder that?"
      }
    ]
  },
  {
    id: 4,
    message: "Your partner says: 'You're not really listening to me.'\nHow do you typically respond?",
    options: [
      {
        text: "I literally repeated what you just said.",
        correct: false,
        feedback: "You may be trying to prove you're doing the right thing, but this response misses the emotional signal. Your partner isn’t asking for proof — they’re seeking felt understanding. Repeating words isn’t the same as being attuned.",
        recommended: "You’re right. I was distracted — I want to try again and be fully here now."
      },
      {
        text: "You’re right. I was distracted — I want to try again and be fully here now.",
        correct: true,
        feedback: "Strong answer. It shows self-awareness, accountability, and a desire to repair — all signs of emotional maturity."
      },
      {
        text: "Can you stop saying that? I always listen.",
        correct: false,
        feedback: "This reflects frustration and a need to feel seen as competent — but it invalidates your partner’s experience. Instead, try pausing your defensiveness and moving toward curiosity.",
        recommended: "You’re right. I was distracted — I want to try again and be fully here now."
      },
      {
        text: "What do you want from me exactly?",
        correct: false,
        feedback: "This often comes from emotional fatigue or pressure. You might feel like you’re not enough. But this phrasing feels hostile. Try shifting from performance to presence.",
        recommended: "You’re right. I was distracted — I want to try again and be fully here now."
      }
    ]
  },
  {
    id: 5,
    message: "Your partner says: 'You don’t really get what I’m going through.'\nHow do you typically respond?",
    options: [
      {
        text: "That’s not fair. I’m trying my best.",
        correct: false,
        feedback: "This likely stems from a need to be recognized for your effort — totally valid. But leading with defense can make your partner feel unheard. Try acknowledging their pain first, then share your intention.",
        recommended: "I’m sorry it feels that way. Help me understand better — I really want to."
      },
      {
        text: "I’m sorry it feels that way. Help me understand better — I really want to.",
        correct: true,
        feedback: "Beautiful. You’re taking responsibility for the emotional disconnect without getting reactive. That kind of presence builds safety and trust."
      },
      {
        text: "You’re exaggerating. I get it more than you think.",
        correct: false,
        feedback: "This response often comes from a need to protect your ego or effort. But it can feel dismissive. Instead of reassuring, lead with curiosity and compassion.",
        recommended: "I’m sorry it feels that way. Help me understand better — I really want to."
      },
      {
        text: "You always say that. Maybe you're just hard to understand.",
        correct: false,
        feedback: "This response may come from frustration or burnout. But it puts blame on your partner rather than co-owning the gap. It's more powerful to move toward understanding, not away from it.",
        recommended: "I’m sorry it feels that way. Help me understand better — I really want to."
      }
    ]
  }
];
