import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


export class FileElement {
  constructor(public name: string, public type: string, public size: number, public deleted: boolean) { 
  }
}

@Component({
  selector: 'app-file-table',
  templateUrl: './file-table.component.html',
  styleUrls: ['./file-table.component.css']
})
export class FileTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'size', 'deleted'];
  dataSource = new MatTableDataSource<FileElement>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor() { }

  buildTable (data: any, showDeleted: boolean) {
    console.log("FileTableComponent: buildTable", data);

    const files = data.files
                    .filter(file => showDeleted || !file.isDeleted)
                    .map (file => new FileElement(file.name, file.type, file.size, file.isDeleted));

    this.dataSource = new MatTableDataSource<FileElement>(files);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }

}
