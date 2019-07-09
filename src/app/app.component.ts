import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material";


export interface AppNode {
    name: string;
    children?: Array<AppNode>;
    expanded?: boolean;
}


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {

    set: Array<AppNode> = [
        {
            name: "node 1",
            children: [
                {
                    name: "node 1-1",
                }
            ]
        },
        {
            name: "node 2"
        },
        {
            name: "node 3",
            children: [
                {
                    name: "node 3-1"
                },
                {
                    name: "node 3-2",
                    children: [
                        {
                            name: "node 3-2-1"
                        },
                        {
                            name: "node 3-2-2"
                        }
                    ]
                }
            ]
        },
        {
            name: "node 4",
            children: []
        }
    ];

    dataSource = new MatTableDataSource<AppNode>(this.set);

    displayedColumns: Array<string> = [
        "name"
    ];

    expand(target: AppNode): void {

        console.log(target);

        target.expanded = !target.expanded;
    }

    nothing(): void {}
}
