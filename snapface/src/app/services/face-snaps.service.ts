import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
	providedIn: 'root'
})
export class FaceSnapsService {
	faceSnaps: FaceSnap[] = [
		{
			id: 1,
			title: 'Ronghori',
			description: 'Mon meilleur ami',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
			createdDate: new Date(),
			snaps: 0,
			location: 'Paris'
		},
		{
			id: 2,
			title: 'Sousou the big',
			description: 'Moi',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
			createdDate: new Date(),
			snaps: 0
		},
		{
			id: 3,
			title: 'Iceland',
			description: 'Next destination',
			imageUrl: 'https://cdn.pixabay.com/photo/2017/07/15/19/49/iceland-2507534_1280.jpg',
			createdDate: new Date(),
			snaps: 10,
			location: 'Leykjavik'
		},
		{
			id: 4,
			title: 'Ronghori',
			description: 'Mon meilleur ami',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
			createdDate: new Date(),
			snaps: 0,
			location: 'Paris'
		},
		{
			id: 5,
			title: 'Sousou',
			description: 'Moi',
			imageUrl: 'https://cdn.pixabay.com/photo/2019/02/07/23/12/teddy-bear-3982406_1280.jpg',
			createdDate: new Date(),
			snaps: 50
		},
		{
			id: 6,
			title: 'Iceland',
			description: 'Next destination',
			imageUrl: 'https://cdn.pixabay.com/photo/2017/07/15/19/49/iceland-2507534_1280.jpg',
			createdDate: new Date(),
			snaps: 1000,
			location: 'Leykjavik'
		}
	];

	getAllFaceSnaps(): FaceSnap[] {
		return this.faceSnaps;
	}

	getFaceSnapById(faceSnapId: number): FaceSnap {
		const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
		if (!faceSnap) {
			throw new Error('FaceSnap not found!');
		} else {
			return faceSnap;
		}
	}
	
	snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
		const faceSnap = this.getFaceSnapById(faceSnapId);
		snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
	}
}