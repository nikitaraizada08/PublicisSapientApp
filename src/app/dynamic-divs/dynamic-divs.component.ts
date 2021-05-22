import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {
  public divCount: number[];
  public section: any;
  public limit: number = 13;
  public countOnScroll: number[] = []

  constructor() { 
    this.divCount = Array.from(Array(1000).keys());
  }

  ngOnInit(): void {
    this.countOnScroll = this.divCount.slice(0, this.limit);
    this.section = document.querySelector('#section-1');
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };
    const callback = ((entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && this.limit <= this.divCount.length - 1) {
          this.countOnScroll = this.countOnScroll.concat(this.divCount.slice(this.limit, this.limit + 10));
          this.limit = this.limit + 10
        }
      }
      )
    })
    const observer = new IntersectionObserver(callback.bind(window), options);
    observer.observe(this.section)
  }

  alert(count: number): void {
    window.alert('You Clicked button number '+ count);
  }
}
