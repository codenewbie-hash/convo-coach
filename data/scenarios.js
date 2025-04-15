export const scenarios = [
  {
      id: 1,
      message: "I feel like youre not emotionally present.",
      options: [
      {
          text: "I'm literally here, aren't I?",
          correct: false,
          feedback: `This response is rooted in <strong><strong><strong>technical thinking</strong></strong></strong> rather than emotional awareness. It shows a confusion between <strong>physical presence and <strong><strong>emotional presence</strong></strong></strong> — two very different things. While you may feel like you’re showing up, your partner likely needs you to tune into their <strong>feelings, not just be in the room</strong>. A better move would be to pause, get <strong><strong>curious</strong></strong>, and ask what <strong><strong><strong>emotional presence</strong></strong></strong> looks like to them.`
      },
      {
          text: "I'm sorry you're feeling that way. Can we talk about it more?",
          correct: true,
          feedback: `This is a <strong>solid, <strong><strong>emotionally mature</strong></strong> response</strong>. You’re <strong><strong>acknowledging their experience</strong></strong> <strong><strong><strong>without defensiveness</strong></strong></strong> and inviting connection instead of avoiding it. This kind of <strong>openness</strong> <strong><strong><strong>builds safety</strong></strong></strong> and communicates that you care about their <strong><strong>internal world</strong></strong>, not just your actions.`
      },
      {
          text: "Here we go again...",
          correct: false,
          feedback: `<strong>Sarcasm</strong> is a form of <strong><strong><strong>emotional armor</strong></strong></strong> — it often shows up when someone feels <strong>cornered, helpless, or emotionally drained</strong>. But in moments of vulnerability, <strong>sarcasm</strong> sends the message that you’re <strong><strong><strong>not emotionally available</strong></strong></strong>. It’s okay to feel overwhelmed — just say it <strong>plainly and with care</strong> instead of <strong>deflecting</strong>.`
      },
      {
          text: "What exactly do you want from me?",
          correct: false,
          feedback: `This response may come from <strong><strong><strong>frustration or confusion</strong></strong></strong>, but it can sound <strong><strong><strong>cold and defensive</strong></strong></strong>. It shifts the <strong><strong>emotional labor</strong></strong> back onto your partner to justify their need. Instead, try something like: <strong>“I want to be there for you, but I’m not totally sure how. Can you help me understand?”</strong>`
      }
      ]
  },
  {
      id: 2,
      message: "I just feel so drained lately.",
      options: [
      {
          text: "Want me to leave you alone?",
          correct: false,
          feedback: `This response might seem considerate on the surface, but it can feel like <strong>emotional abandonment</strong>. It assumes your partner wants distance instead of asking. If you're unsure, it's better to <strong>offer presence with choice</strong> — not pull away prematurely.`
      },
      {
          text: "Do you want to talk about it, or would you rather just relax together for a bit?",
          correct: true,
          feedback: `Excellent response. You're offering <strong>care while giving your partner control</strong> over what kind of support they want. That balance of presence and flexibility <strong>builds emotional safety</strong>.`
      },
      {
          text: "You're always tired. Maybe you should start working out again?",
          correct: false,
          feedback: `While you might think you’re being helpful, this <strong>comes across as critical</strong>. It shifts the moment from empathy to judgment. Your partner likely needs <strong>compassion more than advice</strong> when they’re feeling low.`
      },
      {
          text: "Well, you're not the only one who's had a rough day.",
          correct: false,
          feedback: `This response reflects a need to have your own stress acknowledged, which is valid. But <strong>bringing it up in this way can feel like you're dismissing their experience</strong>. Try listening fully before expressing your own challenges.`
      }
      ]
  },
  {
      id: 3,
      message: "Sometimes I wonder if youre actually happy with me.",
      options: [
      {
          text: "That’s your issue, not mine.",
          correct: false,
          feedback: `This is a shutdown response. It puts a wall between you and your partner when they’re trying to open up. Even if the question stings, it's an opportunity to connect — not deflect.`
      },
      {
          text: "I hate that you're feeling that way. I am happy — what’s making you feel unsure?",
          correct: true,
          feedback: `A strong response. You’re <strong>showing concern and inviting a deeper conversation</strong>. This kind of openness <strong>helps your partner feel secure and seen</strong>.`
      },
      {
          text: "Here we go again. You overthink everything.",
          correct: false,
          feedback: `This likely comes from <strong>emotional fatigue or defensiveness</strong>. Labeling your partner as someone who overthinks not only invalidates them — it discourages future vulnerability. Stay with their emotional reality, even if it makes you uncomfortable.`
      },
      {
          text: "Maybe you're not happy with me either.",
          correct: false,
          feedback: `This response <strong>flips the vulnerability back onto them</strong> — a classic deflection move. It can make your partner feel even more unsafe or unsteady. Try to focus on their emotions before redirecting.`
      }
      ]
  },
  {
      id: 4,
      message: "Youre not really listening to me.",
      options: [
      {
          text: "I literally repeated what you just said.",
          correct: false,
          feedback: `This response is <strong>about proving a point, not connecting</strong>. It reduces listening to a performance rather than an <strong>emotional exchange</strong>. Your partner is likely asking for your full presence, not a playback.`
      },
      {
          text: "You’re right. I was distracted — I want to try again and be fully here now.",
          correct: true,
          feedback: `Excellent repair move. You <strong>acknowledge the slip and express desire to do better</strong> — that builds trust. Being able to admit distraction and re-engage is a relationship strength.`
      },
      {
          text: "Can you stop saying that? I always listen.",
          correct: false,
          feedback: `This comes from a need to be seen as competent, but it overrides your partner's emotional reality. If they don’t feel heard, insisting that you are listening won’t help. Validation is more powerful than explanation.`
      },
      {
          text: "What do you want from me exactly?",
          correct: false,
          feedback: `This likely comes from emotional fatigue or frustration. It implies your partner is too demanding, which shuts down communication. Instead, <strong>invite them to clarify what they need emotionally</strong> — not just logistically.`
      }
      ]
  },
  {
      id: 5,
      message: "You dont really get what Im going through.",
      options: [
      {
          text: "That’s not fair. I’m trying my best.",
          correct: false,
          feedback: `This reflects a <strong>desire to be seen and appreciated</strong> — which is fair. But when it comes first, it can sound defensive and invalidate their pain. Try <strong>affirming their feeling first</strong>, then talk about your effort.`
      },
      {
          text: "I’m sorry it feels that way. Help me understand better — I really want to.",
          correct: true,
          feedback: `Excellent response. You express willingness to understand and take <strong>emotional responsibility</strong>. This kind of openness can <strong>turn disconnection into closeness</strong>.`
      },
      {
          text: "You’re exaggerating. I get it more than you think.",
          correct: false,
          feedback: `This might feel like you’re offering reassurance, but it <strong>comes off as dismissive</strong>. If your partner says they don’t feel understood, telling them they’re wrong makes things worse. Start with curiosity instead.`
      },
      {
          text: "You always say that. Maybe you're just hard to understand.",
          correct: false,
          feedback: `This reflects <strong>emotional exhaustion</strong> — but also deflects blame. It puts the issue back on your partner and avoids <strong>shared responsibility</strong>. Stay in empathy mode before you evaluate their expectations.`
      }
      ]
  }
];