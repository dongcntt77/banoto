import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit, AfterViewInit {
  tensp = '';
  constructor(private renderer: Renderer2, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.tensp = 'Tên sản phẩm ' + id;
    });

  }
  ngAfterViewInit() { 
    this.loadScripts();
    window.scroll(0,0);
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}
