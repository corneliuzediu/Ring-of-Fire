import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss']
})
export class ShareLinkComponent {
  public href: string = '';

  constructor(private router: Router,
    public dialogRef: MatDialogRef<ShareLinkComponent>) { }

  ngOnInit() {
    this.href = window.location.href;
    console.log(this.href);

  }

}
