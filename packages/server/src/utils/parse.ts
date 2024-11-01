import { Readability } from '@mozilla/readability';
import { JSDOM, VirtualConsole } from 'jsdom';
import TurndownService from 'turndown'

export async function getPureHtmlContent(htmlContent: string) {
  // Create virtual DOM
  const dom = new JSDOM(htmlContent, {
    // Disable resource loading
    resources: "usable",
    // Silence console warnings
    virtualConsole: new VirtualConsole().sendTo({
      error: () => { },
      warn: () => { },
    }),
  });

  // Parse html to get clean HTML
  const reader = new Readability(dom.window.document)
  const article = reader.parse()
  return article.content
}


export function htmlToMd(htmlContent: string) {
  return new TurndownService().turndown(htmlContent)
}
