import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLaserComponent } from './agregar-laser.component';

describe('AgregarLaserComponent', () => {
  let component: AgregarLaserComponent;
  let fixture: ComponentFixture<AgregarLaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarLaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
