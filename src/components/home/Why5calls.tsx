import * as React from 'react';
import i18n from '../../services/i18n';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Promotion, CallCount } from '../shared';

interface Props {
  readonly totalCount: number;
  readonly t: TranslationFunction;
}

export const Why5calls: React.StatelessComponent<Props> = (props: Props) => (
  <div className="hypothesis" >
    <header className="hypothesis__header">
      <h2 className="hypothesis__title">{props.t('hypothesis.title')}</h2>
      <p>
        {props.t('hypothesis.p1')}
      </p>
      <p><strong>{props.t('hypothesis.p2')}</strong></p>
      <Promotion
        currentIssue={null}
        t={i18n.t}
      />
    </header>
    <div className="hypothesis__text">
      <p dangerouslySetInnerHTML={{ __html: props.t('hypothesis.p3') }} />
      <p dangerouslySetInnerHTML={{ __html: props.t('hypothesis.contribute') }} />
      <p className="hypothesis__callout">
        <a href="https://secure.actblue.com/contribute/page/5calls?refcode=web" target="_blank">
          {props.t('hypothesis.donateCallout')}
        </a>
      </p>
      <h3 className="hypothesis__subtitle">{props.t('hypothesis.featuresTitle')}</h3>
      <ul className="hypothesis__list">
        <li>{props.t('hypothesis.feature1')}</li>
        <li>{props.t('hypothesis.feature2')}</li>
      </ul>
      <h3 className="hypothesis__subtitle">
        {props.t('hypothesis.getApp')}
      </h3>
      <ul className="hypothesis__apps">
        <li>
          <a href="https://itunes.apple.com/us/app/5-calls/id1202558609?mt=8" target="_blank">
            <img className="ios" src="/img/app-store.svg" alt={props.t('hypothesis.onAppStore')}/>
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/apps/details?id=org.a5calls.android.a5calls&hl=en" target="_blank">
            <img className="play" src="/img/google-play-badge.png" alt={props.t('hypothesis.onGooglePlay')} />
          </a>
        </li>
      </ul>
      <CallCount
        totalCount={props.totalCount}
        t={i18n.t}
      />
    </div>
  </div>
);

export const Why5callsTranslatable = translate()(Why5calls);
