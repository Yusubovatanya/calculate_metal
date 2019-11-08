import { Component, OnInit } from '@angular/core';
import { CreateResultService } from 'src/app/main/create-result.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  dataForm: any;
  isResult: boolean = false;
  dataTable: any = {};

  totalResult: number;
  tableFirstTitle: string;
  tableSecondTitle: string;
  headerFormList: string[];
  titleTableList: string[];
  msgError: string = 'Невозмозно выполнить расчет! Значения исходных даннных слишком малы! \
  Пожалуйста, проверьте правильнось введенных данных!';
  isError: boolean = false;
  techCondition: string = '';

  materialDensity: string;
  techConditionList: string[];
  checkedTechCondition: boolean = false;
  isShowElementValue: boolean;
  userPosition: any;
  userName: any;
  result: number;

  constructor(
    private createResultService: CreateResultService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.createResultService.createResultObserver$.subscribe((dataForm: any) => {
      this.dataForm = dataForm;
      this.isResult = true;
      this.prepareDataForm();
    })
  }

  prepareDataForm() {
    this.headerFormList = this.dataForm.value.headerForm ? this.transformTextAreal(this.dataForm.value.headerForm) : '';
    this.titleTableList = this.dataForm.value.titleTable ? this.transformTextAreal(this.dataForm.value.titleTable) : '';
    this.techConditionList = this.dataForm.value.techCondition ? this.transformTextAreal(this.dataForm.value.techCondition) : '';
    this.userPosition = this.dataForm.value.userPosition;
    this.userName = this.dataForm.value.userName;
    this.dataTable = {};
    let initialResult;
    let parameters = [];
    switch (this.dataForm.value.profileValue.value) {
      case 'circle':
        parameters = [
          this.dataForm.value.outerDiameter,
          null,
          this.dataForm.value.lengthWorkPiece,
          this.dataForm.value.length,
        ];

        initialResult = this.createResultService.getCircleResult(
          [...parameters, this.dataForm.value.materialDensity, this.dataForm.value.coefficient]
        );

        break;
      case 'pipe':
        parameters = [
          this.dataForm.value.outerDiameter,
          this.dataForm.value.innerDiameter,
          this.dataForm.value.lengthWorkPiece,
          this.dataForm.value.length,
        ];
        initialResult = this.createResultService.getCircleResult(
          [...parameters, this.dataForm.value.materialDensity, this.dataForm.value.coefficient]
        );
        break;
      case 'rect':
        parameters = [
          this.dataForm.value.weightRect,
          this.dataForm.value.heightRect,
          this.dataForm.value.lengthWorkPiece,
          this.dataForm.value.length,
        ];
        initialResult = this.createResultService.getRectResult(
          [...parameters, this.dataForm.value.materialDensity, this.dataForm.value.coefficient]
        );
        break;
      case 'hexagon':
        parameters = [
          this.dataForm.value.selectedHexagon.value,
          null,
          this.dataForm.value.lengthWorkPiece,
          this.dataForm.value.length,
        ]
        initialResult = this.createResultService.getHexagonResult(
          [...(parameters.filter(el => el)), this.dataForm.value.coefficient]
        )
        break;
    }
    if (this.checkErr(initialResult)) {
      this.isError = false;
      this.dataTable.values = parameters;
      this.result = this.formResult(initialResult);
      this.totalResult = this.formResult(this.result / this.dataForm.value.qtyWorkPiece);
      this.dataTable.result = this.result;
      this.dataTable.totalResult = this.totalResult;
      this.dataTable.type = this.dataForm.value.profileValue;
      this.dataTable.qtyWorkPiece = this.dataForm.value.qtyWorkPiece;
      this.dataTable.notation = this.dataForm.value.notation;
      this.dataTable.detailNumber = this.dataForm.value.detailNumber;
      this.dataTable.detailName = this.dataForm.value.detailName;
      this.dataTable.detailWeight = this.dataForm.value.detailWeight;
      this.dataTable.material = this.dataForm.value.materialSelectValue ? this.dataForm.value.materialSelectValue.value : this.dataForm.value.materialValue;
    }
  }

  transformTextAreal(list) {
    return list.split('\n');
  }

  checkErr(initialResult) {
    if (!initialResult) {
      this.isResult = false;
      this._snackBar.open('Пожалуйста, проверьте правильнось введенных данных!', 'Error', {
        duration: 5000,
      });
      return false;
    } else {
      this.isResult = true;
      this._snackBar.open('Расчет выполнен успешно!', 'Success', {
        duration: 5000,
      });
      return true;
    }
  }

  formResult(result) {
    if (result >= 0.005) {
      return result = +result.toFixed(2)
    }
    if (result >= 0.0005) {
      return result = +result.toFixed(3)
    }
    if (result >= 0.00005) {
      return result = +result.toFixed(4)
    }
    if (result >= 0.000005) {
      return result = +result.toFixed(5)
    }
    else {
      this.isResult = false;
      this._snackBar.open(this.msgError, 'Error', {
        duration: 5000,
      });
    }
  }
}
