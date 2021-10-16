import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './../loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoading:any;
    constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoading = this.loaderService.getIsLoading();
  }
}
