import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hexagon } from 'src/app/core/models/hexagon.model';
import { Material } from 'src/app/core/models/material.model';
import { ProfileType } from 'src/app/core/models/profile.model';
import { TableTitles } from 'src/app/core/models/table-titles.model';
import { MetalDataService } from 'src/app/core/services/metal-data.service';

@Component({
  selector: 'app-initial-form-data',
  templateUrl: './initial-form-data.component.html',
  styleUrls: ['./initial-form-data.component.css']
})
export class InitialFormDataComponent implements OnInit {
  dataForm: FormGroup;


  detailNumber: string;
  materialValue: Material = { value: "", density: 0 };
  materialList: Material[];
  detailName: string;
  firstParameter: string = "0";
  secondParameter: string = "0";
  lengthWorkPiece: string = "0";
  length: string = "0";
  hexagonList: Hexagon[];
  selectedHexagon: Hexagon;
  coefficient: string = "1.015";
  qtyWorkPiece: number = 1;
  detailWeight: number;
  userPosition: string = "Инженер-технолог";
  userName: string;
  notation: string;
  result: number;
  headerForm: string = "Утверждаю";
  profileList: ProfileType[];
  tableTitles: TableTitles[];
  profileValue: ProfileType;
  totalResult: number;
  tableFirstTitle: string;
  tableSecondTitle: string;
  headerFormList: string[];
  titleTableList: string[];
  msgError: string;
  isError: boolean = false;
  isResult: boolean = false;
  techCondition: string = "";
  titleTable: string = "Нормы расхода материала";
  densityWrite: string;
  techConditionList: string[];
  checkedTechCondition: boolean = false;
  isShowElementValue: boolean;
  qtyColspan: number;

  constructor(
    private formBuild: FormBuilder,
    private service: MetalDataService
  ) { }

  ngOnInit() {
    this.service.getTableTitles().subscribe((list: TableTitles[]) => {
      this.tableTitles = list;
    });

    this.service.getProfileList().subscribe((list: ProfileType[]) => {
      this.profileList = list;
      this.profileValue = this.profileList[0];
    });

    this.service.getMaterialDataBase().subscribe((list: Material[]) => {
      this.materialList = list;
      this.materialValue = this.materialList[0];
    });

    this.service.getHexagonDataBase().subscribe((list: Hexagon[]) => {
      this.hexagonList = list;
      this.selectedHexagon = this.hexagonList[0];
    });

    this.buildForm();
  }

  buildForm() {
    this.dataForm = this.formBuild.group({
      detailNumber: ['', []],
      detailName: ['', []],
      detailWeight: ['', []],
      materialSelectValue: [{ value: this.materialValue, disabled: false }, []],
      materialValue: [{ value: '', disabled: true }, []],
      materialDensity: [this.materialValue.density, [Validators.required,]],
      typeChangeMaterial: ['selectMaterial', []],
      profileValue: ['', [Validators.required,]],
      firstParameter: ['0', [Validators.required,]],
      secondParameter: ['0', [Validators.required,]],
      lengthWorkPiece: ['0', [Validators.required,]],
      length: ['0', [Validators.required,]],
      coefficient: ["1.015", [Validators.required,]],
      qtyWorkPiece: [1, [Validators.required,]],
      selectedHexagon: [this.selectedHexagon, [Validators.required,]],
      notation: [this.notation, [Validators.required,]],
      headerForm: [this.headerForm, [Validators.required,]],
      titleTable: [this.titleTable, [Validators.required,]],
      userPosition: [this.userPosition, [Validators.required,]],
      userName: ['',],
      checkedTechCondition: [false, []],
      techCondition: ['', []]
    })
  }

  changeTypeMaterial(e) {
    if (e.value === "selectMaterial") {
      this.dataForm.controls['materialValue'].disable();
      this.dataForm.controls['materialSelectValue'].enable();
      this.dataForm.controls['materialDensity'].patchValue('');
      this.materialValue = this.materialList[0];
      this.dataForm.controls['materialDensity'].patchValue(this.materialValue.density);
      this.dataForm.controls['materialValue'].patchValue('');
    }
    if (e.value === "writeMaterial") {
      this.dataForm.controls['materialSelectValue'].disable();
      this.dataForm.controls['materialValue'].enable();
    }
  }

}
