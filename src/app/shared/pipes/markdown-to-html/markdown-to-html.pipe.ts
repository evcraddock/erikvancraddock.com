import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public static setOptions(options: any): void {
        marked.setOptions(options);
    }

    public transform(markdown: string, options?: any): string {
        if (markdown == null) {
            return '';
        }

        return marked(markdown, options).trim();
    }
}
