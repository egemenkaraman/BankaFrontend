import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesaplarComponent } from './hesaplar.component';

describe('HesaplarComponent', () => {
  let component: HesaplarComponent;
  let fixture: ComponentFixture<HesaplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HesaplarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HesaplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
