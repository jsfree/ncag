import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {ImageService} from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
title = 'Recent Photos';
@Input() filterBy?: string = 'all'
visibleImages: any[] = [];
  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }
  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

  
}

