import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigavtionBarComponent } from './navigavtion-bar.component';

describe('NavigavtionBarComponent', () => {
  let component: NavigavtionBarComponent;
  let fixture: ComponentFixture<NavigavtionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigavtionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigavtionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
