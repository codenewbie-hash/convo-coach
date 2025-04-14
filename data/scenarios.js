// This file contains all the scenarios used in the Convo Coach app
// Each scenario includes a message, 4 options, feedback, and which one is correct

export const scenarios = [
  {
    id: 1,
    message: "I just feel like you're not really present lately.",
    options: [
      { text: "I'm literally here, aren't I?", feedback: "Being physically present doesn't mean being emotionally present.", correct: false },
      { text: "I'm sorry you're feeling that way. Can we talk about it more?", feedback: "Great response — shows empathy and curiosity.", correct: true },
      { text: "Here we go again...", feedback: "Dismissive and likely to escalate conflict.", correct: false },
      { text: "What exactly do you want from me?", feedback: "Sounds defensive — not helpful in emotional moments.", correct: false }
    ]
  },

  // 👇 Add new ones here
  {
    id: 2,
    message: "I'm so drained right now... I just need to shut down for a bit.",
    options: [
      { text: "Do you want me to leave you alone or just be here with you?", feedback: "You're giving her choice and presence. This is solid.", correct: true },
      { text: "Why are you always tired?", feedback: "Judgmental and not supportive.", correct: false },
      { text: "Well I'm tired too. Big deal.", feedback: "Dismissive — feels like a competition, not connection.", correct: false },
      { text: "Go sleep then. I'm gonna play Xbox.", feedback: "Not emotionally present or available.", correct: false }
    ]
  },

  {
    id: 3,
    message: "Sometimes I wonder if you're actually happy with me...",
    options: [
      { text: "That's your issue, not mine.", feedback: "Cold and distant. Makes her feel alone.", correct: false },
      { text: "I hate that you're feeling that way. I am happy — what’s making you feel unsure?", feedback: "Empathy + curiosity. Excellent.", correct: true },
      { text: "Here we go again. You overthink everything.", feedback: "Invalidating and dismissive.", correct: false },
      { text: "Maybe you're not happy with me either.", feedback: "Defensive and avoidant.", correct: false }
    ]
  },

  // 👇 Keep adding more below as needed
];

  