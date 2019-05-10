import { Component, OnInit } from "@angular/core";
import { Item } from "../item";
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent implements OnInit {
  list: Item[] = [
    { name: "take out trash" },
    { name: "do the dishes" },
    { name: "sweep the floor" }
  ];

  editable: boolean = false;

  selectedItem: Item;
  constructor() {}

  ngOnInit() {}

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  addItem(name: string): void {
    this.list.push({ name: name });
  }

  deleteItem(item: Item): void {
    const index: number = this.list.indexOf(item);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  changeEditable(): void {
    this.editable = true;
  }

  saveItem(item: Item, name: string): void {
    var index: number = this.list.indexOf(item);
    if (index !== -1) {
      this.list[index].name = name;
    }
    this.editable = false;
  }
}
