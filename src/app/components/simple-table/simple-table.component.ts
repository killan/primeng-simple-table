import { Component, Input, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/interfaces/table';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html'
})
export class SimpleTableComponent implements OnInit {
  @Input() data = []
  @Input() cols: ColumnDef[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
