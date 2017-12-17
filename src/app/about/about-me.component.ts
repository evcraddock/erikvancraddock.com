import { Component } from '@angular/core';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  title = 'app';

  constructor(private imageService: ImageService) { }

    getMostRecentImage() {
        return this.imageService.getLatestImage('recent');
    }
}
