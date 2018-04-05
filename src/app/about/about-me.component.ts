import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  
  title = 'app';
  latestImage = "";

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.latestImage = this.imageService.getLatestImage('recent');
  }
}
