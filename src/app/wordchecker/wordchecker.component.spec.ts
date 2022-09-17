import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcheckerComponent } from './wordchecker.component';

describe('WordcheckerComponent', () => {
  let component: WordcheckerComponent;
  let fixture: ComponentFixture<WordcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordcheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
