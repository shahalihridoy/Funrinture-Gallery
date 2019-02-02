import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    slide = [
      {img: "http://www.emporium.themeseason.com/assets/images/products/pc/4-medium.png"},
      {img: "http://www.emporium.themeseason.com/assets/images/products/pc/3-medium.png"},
      {img: "http://www.emporium.themeseason.com/assets/images/products/pc/2-medium.png"}
    ];


    slideConfig = {
      // arrows: true,
      initialSlide: 1,
      slidesToScroll: 1,
      autoplay:false,
      draggable:true,
      infinite: false,
      prevArrow: '.prev',
      nextArrow: '.next',
      lazyLoad: 'ondemand',
      swipeToSlide: true
    };


  ngOnInit() {
    console.log(this.data);
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
