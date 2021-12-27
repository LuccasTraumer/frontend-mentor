import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentComponent } from './depoiment.component';

describe('DepoimentComponent', () => {
  let component: DepoimentComponent;
  let fixture: ComponentFixture<DepoimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
