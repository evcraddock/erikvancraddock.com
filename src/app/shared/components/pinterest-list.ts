import { Component, Input, AfterViewInit } from '@angular/core';

declare let window: Function;

@Component({
    selector: 'app-pin-list',
    template: `
    <div style="padding: 10px">
    <a
        data-pin-do="embedBoard"
        data-pin-board-width="700"
        data-pin-scale-height="300"
        data-pin-scale-width="100"
        href="{{ url }}">
    </a>
    </div>
`,
})
export class PinterestListComponent implements AfterViewInit {
    @Input() url = location.href;
    @Input() description: string;

    constructor() {
        const url = 'https://assets.pinterest.com/js/pinit.js';
        if (!document.querySelector(`script[src='${url}']`)) {
            const script = document.createElement('script');
            script.src = url;
            script['data-pin-build'] = 'parsePins';
            document.body.appendChild(script);
        }
    }

    ngAfterViewInit(): void {
        window['parsePins'] && window['parsePins']();
    }
}
