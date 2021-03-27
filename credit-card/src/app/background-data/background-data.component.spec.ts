import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundDataComponent } from './background-data.component';

describe('BackgroundDataComponent', () => {
  let component: BackgroundDataComponent;
  let fixture: ComponentFixture<BackgroundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
