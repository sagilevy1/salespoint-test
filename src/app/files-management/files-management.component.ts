import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FileTableComponent } from '../file-table/file-table.component';
import { TreeNode } from 'angular-tree-component';

@Component({
  selector: 'files-management',
  templateUrl: './files-management.component.html',
  styleUrls: ['./files-management.component.css']
})
export class FilesManagementComponent implements OnInit {

  @ViewChild('filesTable') filesTable: FileTableComponent;
  cbShowDeleted: boolean = false;

  node: TreeNode = null;

  constructor() { }

  ngOnInit() {
  }

  showDeletedToggle(ev) {
    this.cbShowDeleted = ev.checked;

    if (this.node && this.node.data) {
      this.filesTable.buildTable(this.node.data, this.cbShowDeleted);  
    }
  }

  onNodeSelected(node: TreeNode) {
    this.node = node;
    if (node.data) {
      this.filesTable.buildTable(node.data, this.cbShowDeleted);
    }
    else {
      console.warn("onNodeSelected - could not find node!");
    }
  }
}
