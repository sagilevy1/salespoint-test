
import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import { TreeComponent, TreeNode, TreeModel } from 'angular-tree-component';
import { FolderLoaderService } from '../folder-loader.service';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent  implements OnInit {
  @ViewChild('tree') treeComponent: TreeComponent;
  @Output() nodeSelected: EventEmitter<TreeNode> = new EventEmitter();
  
  nodes = []
  
  options = {
    getChildren: (node:TreeNode) => {
      return new Promise((resolve, reject)  => {
       
        this.folderLoaderService.loadChildren(node.id).toPromise()
          .then(
            res => { // Success 
              
              console.log(res.json());

              resolve (res.json());
            }
          )
          .catch( 
            reason => reject(reason)
          );
        }
      );

    }
  };

  constructor(private folderLoaderService: FolderLoaderService) { 
    folderLoaderService.loadFirstLevelItems().toPromise()
          .then(
            res => { // Success 
              
              console.log(res.json());
              
              this.nodes = res.json();
            }
          )
          .catch( 
            reason => console.error(reason)
          );
  }

  ngOnInit() {
  }

  activateHandler(ev: any) {
    if (ev.node) {
      this.nodeSelected.emit(ev.node);
    }
    else {
      console.warn("activateHandler: should not reach here");
    }
  }
  
}
