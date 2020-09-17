import { BaseComponent } from './../lib/base-component';
import { Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ApiService } from '../lib/api.service';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent extends BaseComponent implements OnInit, AfterViewInit {
  item:any;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private _api: ApiService) 
  { super(); }

  ngOnInit(): void {
    this.item = {};
    this.route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/api/item/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
      }); 
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
