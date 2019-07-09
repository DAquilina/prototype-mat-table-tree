import { Component, Input, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material";
import { NestedTreeControl } from "@angular/cdk/tree";

import { AppNode } from "../app.component";


@Component({
    selector: "app-tree-container",
    templateUrl: "./tree-container.component.html",
    styleUrls: ["./tree-container.component.scss"]
})
export class TreeContainerComponent implements OnInit {

    @Input() nodeData: Array<AppNode>;


    dataSource: MatTreeNestedDataSource<AppNode> = new MatTreeNestedDataSource<AppNode>();
    treeControl: NestedTreeControl<AppNode> = new NestedTreeControl<AppNode>((node: AppNode) => {

        return node.children;
    });


    constructor() {}

    ngOnInit() {

        this.dataSource.data = this.nodeData;
    }

    hasChildren(_: number, node: AppNode): boolean {

        return Boolean(node.children && node.children.length);
    }
}
