import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwubricComponent } from './twubric.component';

describe('TwubricComponent', () => {
  let component: TwubricComponent;
  let fixture: ComponentFixture<TwubricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwubricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwubricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
