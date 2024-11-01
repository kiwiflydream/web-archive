import TurndownService from 'turndown';
import { extract } from '@extractus/article-extractor';

export async function getPureHtmlContent(htmlContent: string) {
  const result = await extract(htmlContent)
  return result.content
}


export function htmlToMd(htmlContent: string) {
  return new TurndownService().turndown(htmlContent)
}
