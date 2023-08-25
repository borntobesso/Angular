import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
	providedIn: 'root'
})
export class FaceSnapsService {
	faceSnaps: FaceSnap[] = [
		{
		  title: 'Ronghori',
		  description: 'Mon meilleur ami',
		  imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
		  createdDate: new Date(),
		  snaps: 0,
		  location: 'Paris'
		},
		{
		  title: 'Sousou the big',
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
		  snaps: 50
		},
		{
		  title: 'Iceland',
		  description: 'Next destination',
		  imageUrl: 'https://cdn.pixabay.com/photo/2017/07/15/19/49/iceland-2507534_1280.jpg',
		  createdDate: new Date(),
		  snaps: 1000,
		  location: 'Leykjavik'
		}
	  ];
}