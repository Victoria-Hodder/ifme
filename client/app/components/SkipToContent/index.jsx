// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import css from './SkipToContent.scss';
import { I18n } from '../../libs/i18n';

export type Props = {
  id: string,
};

function SkipToContent(props: Props) {
  const { id } = props;

  return (
    <Link className={css.skipToContent} to={`#${id}`}>
      {I18n.t('navigation.skip_to_main_content')}
    </Link>
  );
}

export default SkipToContent;
