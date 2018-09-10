import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social=[
  {
    footer:"../assets/images/reddit-idle.svg",
    href:"https://www.reddit.com/user/healthereum/",
    name:"Reddiit"
  },
  {
    footer:"../assets/images/reddit-idle.svg",
    href:"https://www.facebook.com/Healthereum/",
    name:"Facebook"
  },
  {
    footer:"../assets/images/reddit-idle.svg",
    href:"https://twitter.com/healthereumreal",
    name:"Twitter"
  },
  {
    footer:"../assets/images/reddit-idle.svg",
    href:"https://t.me/Healthereum",
    name:"Telegram"
  }
    ]
  constructor() { }

  ngOnInit() {
  }

}
