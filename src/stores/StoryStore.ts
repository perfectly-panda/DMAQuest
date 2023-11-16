import StoryText from '@/models/StoryText'
import { defineStore, type Store } from 'pinia'
import type { IStoryStore } from '../types/IStore'

export const useStoryStore = defineStore('story', {
  state: (): IStoryStore => ({
    intro: new StoryText(['So I had to get my internet license renewed, and you know how things are at the Digital Movement Authority...' ]),
    waitTime: new StoryText([
        'It feels like forever, but actually I\'d only been waiting for',
        "minutes.",
        "Wait Time:"
      ]),
    chairs: new StoryText([
        "Looks like there are only",
        "chairs left.",
        "Chairs:"
      ]),
    people: new StoryText(["I tried to count how many people are in line, but there's at least ", ' people.', "People:" ]),
    battery: new StoryText(["I'm starting to get worried about my phone battery. It's at ", '%.', "Battery:" ]),
    portal: new StoryText(["All of a sudden, ", " portals opened up in the waiting room!", "Portal:" ]),
    wizard: new StoryText(["", " wizards came through the portal ready for battle.", "Wizards:" ]),
    chipmunk: new StoryText(["Closely followed by ", " chipmunks fighting them?", "Chipmunks:" ]),
    cash: new StoryText(["I have ", " dollars in my bank account.", "Cash:" ]),
    crypto: new StoryText(["I have ", " crypto now.", "Crypto:" ]),
    memory: new StoryText(["I have ", " GB of memory available.", "Memory:" ]),
    gold: new StoryText([]),
    cardboard: new StoryText(["I've collected ", " cardboard boxes to set up a little store for the other people in line.", "Cardboard:" ]),
    snacks: new StoryText(["I've got ", " snacks to eat or sell.", "Snacks:" ]),
    hunger: new StoryText(["I'm starting to get hungry. I wonder if I can find some food around here... (", "% hunger)", "Hunger:" ]),
  }),
  getters: {
  },
})

export type StoryStore = Store<'story', IStoryStore, {}, {}>