import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../constants'

export function getRandomPrompts(prompts) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomPrompt = surpriseMePrompts[randomIndex]

  if (randomPrompt === prompts) {
    return getRandomPrompts(prompts)
  }

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}