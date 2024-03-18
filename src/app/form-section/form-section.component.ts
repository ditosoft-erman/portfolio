import { Component } from '@angular/core';

@Component({
  selector: 'form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent {

  icons = [
    {
      image: "../../assets/image/svg/facebook.svg"
    },

      {
        image : "../../assets/image/svg/instagram.svg"
      },

      {
        image : "../../assets/image/svg/twitterx.svg"
      }
    
  ]
}
