import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, NgForm, FormArray, FormControl } from '@angular/forms';
import { Hexagon } from 'src/app/core/models/hexagon.model';
import { Material } from 'src/app/core/models/material.model';
import { ProfileType } from 'src/app/core/models/profile.model';
import { MetalDataService } from 'src/app/core/services/metal-data.service';
import { CreateResultService } from 'src/app/main/create-result.service';

@Component({
  selector: 'app-initial-form-data',
  templateUrl: './initial-form-data.component.html',
  styleUrls: ['./initial-form-data.component.css']
})
export class InitialFormDataComponent implements OnInit {
  dataForm: FormGroup;
  density: number;
  profileList: ProfileType[];
  profileValue: ProfileType;
  materialValue: Material = { value: "", density: 0 };
  materialList: Material[];
  hexagonList: Hexagon[];
  selectedHexagon: Hexagon;
  userPosition: string = "Инженер-технолог";
  userName: string;
  notation: string;
  headerForm: string = "Утверждаю";
  titleTable: string = "Нормы расхода материала";
  validatorsValues: string[] = ['weightRect', 'heightRect', 'innerDiameter', 'outerDiameter', 'lengthWorkPiece', 'length'];

  constructor(
    private formBuild: FormBuilder,
    private service: MetalDataService,
    private createResultService: CreateResultService,
  ) { }

  ngOnInit() {
    this.service.getProfileList().subscribe((list: ProfileType[]) => {
      this.profileList = list;
      this.profileValue = this.profileList[0];
    });

    this.service.getMaterialDataBase().subscribe((list: Material[]) => {
      this.materialList = list;
      this.materialValue = this.materialList[0];
      this.density = this.materialValue.density;
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
      materialDensity: [this.density, [Validators.required, this.checkValidValue]],
      typeChangeMaterial: ['selectMaterial', []],
      profileValue: [this.profileValue, [Validators.required,]],
      weightRect: ['0', []],
      heightRect: ['0', []],
      innerDiameter: ['0', []],
      outerDiameter: ['0', []],
      lengthWorkPiece: ['0', [Validators.required, this.checkValidValue]],
      length: ['0', [Validators.required]],
      coefficient: ["1.015", [Validators.required, this.checkValidValue]],
      qtyWorkPiece: [1, [Validators.required, this.checkValidValue]],
      selectedHexagon: [this.selectedHexagon, [Validators.required,]],
      weightHexagon: [this.selectedHexagon.value, [Validators.required,]],
      notation: [this.notation, []],
      headerForm: [this.headerForm, []],
      titleTable: [this.titleTable, []],
      userPosition: [this.userPosition, []],
      userName: ['',],
      checkedTechCondition: [{ checked: true, text: "" }, [Validators.required,]],
      techCondition: ['', []]
    })
    this.dataForm.get('outerDiameter').setValidators([Validators.required, this.checkValidValue]);
  }

  checkValidValue(form: AbstractControl) {
    if (!!form.value) {
      return +form.value > 0 ? null : { checkValidValue: true };
    }
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

  changeSelectMaterial() {
    this.density = this.dataForm.controls.materialSelectValue.value.density;
  }

  changeMaterialDensity(e) {
    this.density = e;
  }

  create() {
    const formResult = { ... this.dataForm };
    this.createResultService.createDataResult(formResult);
  }

  changeTypeProfile(event) {
    this.resetValuesForm();
    const type = event;
    this.validatorsValues.forEach((element) => {
      this.dataForm.get(element).clearValidators();
    })

    switch (type) {
      case 'circle':
        this.dataForm.get('outerDiameter').setValidators([Validators.required, this.checkValidValue]);
        break;
      case 'pipe':
        this.dataForm.get('innerDiameter').setValidators([Validators.required]);
        this.dataForm.get('outerDiameter').setValidators([Validators.required, this.checkValidValue]);
        break;
      case 'rect':
        this.dataForm.get('weightRect').setValidators([Validators.required, this.checkValidValue]);
        this.dataForm.get('heightRect').setValidators([Validators.required, this.checkValidValue]);
        break;
      default:
        break;
    }
  }

  resetValuesForm() {
    this.validatorsValues.forEach((element) => {
      this.dataForm.controls[element].reset('0');
    })
    this.dataForm.controls['qtyWorkPiece'].reset(1);
    this.dataForm.controls['coefficient'].reset('1.015');
  }

  changeCheckCondition(event) {
    const condition = event.source._elementRef.nativeElement.innerText;
    const checkCondition = {
      checked: event.checked,
      text: condition,
    }
    this.dataForm.patchValue({ ['checkedTechCondition']: checkCondition });
  }

  clearValue(event) {
    this.dataForm.patchValue({ [event.target.attributes.formcontrolname.value]: '' });
  }

}
