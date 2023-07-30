import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

import { MatDialog } from '@angular/material/dialog';
import { MenuPopupComponent } from '../menu-popup/menu-popup.component'; 


@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent implements OnInit   {
  rootElements: any;
  menuData: any;
  

  constructor(private menuService: MenuService, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Fetch root elements from the API
    this.menuService.getRootElements().subscribe(
      (data) => {
        this.rootElements = data;
        // console.log("Data for Popup:", data);
      },
    
    );
  }
  // Open popup with child elements
  openChildElements(elementId:any): void {
    this.menuService.getChildElements(elementId).subscribe((data:any) => {
      // console.log("Data for Popup:", data);
      this.dialog.open(MenuPopupComponent, {
        data: data.data,
        width: '1000px',
        maxHeight: '90vh',
      });
    });
  }
  
}