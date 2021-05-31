import { AfterViewInit, Component, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit, AfterViewInit {
  private divCount: number[];
  @ViewChild('selection') section: any;
  private limit: number = 13;
  public countOnScroll: number[] = []

  constructor(private render: Renderer2) {
    this.divCount = Array.from(Array(1000).keys());
  }

  ngOnInit(): void {
    this.countOnScroll = this.divCount.slice(0, this.limit);
  }
  ngAfterViewInit(): void {
    this.section = this.render.selectRootElement(this.section.nativeElement);
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    };
    const callback = ((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
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
  public alert(count: number): void {
    window.alert('You Clicked button number ' + count);
  }
}
