import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RotasUrlService {

  constructor() { }

  compartilharFacebook(url: string): void {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)} `);
  }
  compartilharTwitter(url: string): void {
    window.open(`https://twitter.com/intent/tweet?url${encodeURI(url)} `);
  }
  compartilharLinkedin(url: string): void {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURI(url)} `);
  }
}
