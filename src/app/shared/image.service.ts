import { Injectable } from "@angular/core";

@Injectable()
export class ImageService{
    visibleImages = [];
    
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image=> image.id == id)
    }

}

const IMAGES = [
    {"id": 1, "category": "Christmas 2018", "caption":"Christmas Banquet - 2018", "url": "assets/img/gallery/Christmas2018/christmas1.jpg"},
    {"id": 2, "category": "Christmas 2018", "caption":"Christmas Banquet - 2018", "url": "assets/img/gallery/Christmas2018/christmas2.jpg"},
    {"id": 3, "category": "Christmas 2018", "caption":"Christmas Banquet - 2018", "url": "assets/img/gallery/Christmas2018/christmas3.jpg"},
    {"id": 4, "category": "Christmas 2018", "caption":"Christmas Banquet - 2018", "url": "assets/img/gallery/Christmas2018/christmas4.jpg"},
    {"id": 5, "category": "Christmas 2018", "caption":"Christmas Service - 2018", "url": "assets/img/gallery/Christmas2018/christmas5.jpg"},
    {"id": 6, "category": "Fall Fest 2018", "caption":"Fall Fest - 2018", "url": "assets/img/gallery/FallFest2018/fallFest1.jpg"},
    {"id": 7, "category": "Fall Fest 2018", "caption":"Fall Fest - 2018", "url": "assets/img/gallery/FallFest2018/fallFest2.jpg"},
    {"id": 8, "category": "Fall Fest 2018", "caption":"Fall Fest - 2018", "url": "assets/img/gallery/FallFest2018/fallFest3.jpg"},
    {"id": 9, "category": "Fall Fest 2018", "caption":"Fall Fest - 2018", "url": "assets/img/gallery/FallFest2018/fallFest4.jpg"}
]