import { BaseComponent } from './../lib/base-component';
import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ApiService } from '../lib/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit, AfterViewInit {
  list_item:any;
  constructor(private renderer: Renderer2,private _api: ApiService) { 
    super();
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/item/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
    }, err => { });
  }
  ngAfterViewInit() { 
    setTimeout(() => {
      this.loadScripts();
    });
    
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
