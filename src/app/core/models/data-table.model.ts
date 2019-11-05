export class DataTable {
  detailName: string | null;
  detailNumber: string | null;
  detailWeight: string | null;
  material: string | null;
  notation: string | null;
  qtyWorkPiece: number;
  result: number;
  totalResult: number;
  type: {
    value: string,
    viewValue: string,
  }
  values: string[];
}
