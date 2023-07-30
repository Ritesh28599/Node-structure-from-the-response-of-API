import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-menu-popup',
  templateUrl: './menu-popup.component.html',
  styleUrls: ['./menu-popup.component.css']
})
export class MenuPopupComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MenuPopupComponent>
  ) {
    console.log("Data in Popup Component:", data);

  }

  closeDialog(): void {
    this.dialogRef.close();
  }}
