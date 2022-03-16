import { Component, Input, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/interfaces/table';
import { CellRenderer } from 'src/app/services/cell-renderer';

@Component({
  selector: 'simple-table',
  templateUrl: './simple-table.component.html'
})
export class SimpleTableComponent implements OnInit {
  @Input() data: any[] = []

  _cols: ColumnDef[] = []
  @Input() set cols(columns: any[]) {
    this._cols = columns
    this._cols.forEach((c) => {
      if (!c.renderer) {
        c.renderer = CellRenderer.none
      }
    })
  }
  get cols(): ColumnDef[] {
    return this._cols
  }

  constructor() { }

  ngOnInit(): void {
  }

}
