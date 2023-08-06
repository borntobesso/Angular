import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Ronghori',
        description: 'Mon meilleur ami',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Sousou',
        description: 'Moi',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Iceland',
        description: 'Next destination',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/15/19/49/iceland-2507534_1280.jpg',
        createdDate: new Date(),
        snaps: 10,
        location: 'Leykjavik'
      },
      {
        title: 'Ronghori',
        description: 'Mon meilleur ami',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },
      {
        title: 'Sousou',
        description: 'Moi',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Iceland',
        description: 'Next destination',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/07/15/19/49/iceland-2507534_1280.jpg',
        createdDate: new Date(),
        snaps: 10,
        location: 'Leykjavik'
      }
    ];
  }
}
