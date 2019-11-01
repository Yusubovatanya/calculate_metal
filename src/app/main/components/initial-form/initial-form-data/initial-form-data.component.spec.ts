import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialFormDataComponent } from './initial-form-data.component';


describe('InitialFormDataComponent', () => {
  let component: InitialFormDataComponent;
  let fixture: ComponentFixture<InitialFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
