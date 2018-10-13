import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`
  .avatar-image {
    background-image: url('http://erikvancraddock.com/css/images/avatar.jpg');
    background-size: cover;
  }

  .fa, a {
      font-size: 24px;
      padding: 5px;
      color: gray;
  }

  .aboutme {
      padding: 5px;
  }
  `],
})
export class AboutMeComponent {
  @Input() profile: Profile;
}
