import { Readability } from '@mozilla/readability';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown'

export async function getPureHtmlContent(htmlContent: string) {
  // Create virtual DOM
  const dom = parseHTML(htmlContent);

  // Parse html to get clean HTML
  const reader = new Readability(dom.document)
  const article = reader.parse()
  return article.content
}


export function htmlToMd(htmlContent: string) {
  return new TurndownService().turndown(htmlContent)
}
