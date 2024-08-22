import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapekleComponent } from './hesapekle.component';

describe('HesapekleComponent', () => {
  let component: HesapekleComponent;
  let fixture: ComponentFixture<HesapekleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HesapekleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HesapekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
