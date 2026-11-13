import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  DatasetOptions,
  HelgolandCoreModule,
  SettingsService,
} from '@helgoland/core';

import { TranslateTestingModule } from '../../../../../../../testing/translate.testing.module';
import { LabelMapperComponent } from '../../../label-mapper/label-mapper.component';
import { LabelMapperService } from '../../../label-mapper/label-mapper.service';
import {
  ReferenceValueColorCache,
  TimeseriesEntryComponent,
} from './timeseries-entry.component';

describe('TimeseriesEntryComponent', () => {
  let component: TimeseriesEntryComponent;
  let fixture: ComponentFixture<TimeseriesEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HelgolandCoreModule,
        TranslateTestingModule,
        TimeseriesEntryComponent,
        LabelMapperComponent,
      ],
      providers: [
        ReferenceValueColorCache,
        LabelMapperService,
        SettingsService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesEntryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('datasetId', 'temp__temp');
    fixture.componentRef.setInput(
      'datasetOptions',
      new DatasetOptions('temp__temp', '#123456'),
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
