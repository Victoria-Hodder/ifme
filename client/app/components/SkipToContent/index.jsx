// @flow
import React, {useState, useCallback} from 'react';

import css from './SkipToContent.scss';
import { I18n } from '../../libs/i18n';

export type Props = {
  id: string,
};

// Sophia`s solving
class SkipToContent extends React.Component<Props> {
  onClick = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id } = this.props;
    const elementToScrollInto = document.getElementById(id);
    if (elementToScrollInto !== null) {
      elementToScrollInto.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  render() {
    const { id } = this.props;
    return (
      <a onClick={this.onClick} className={css.skipToContent} href={`#${id}`}>
        {I18n.t('navigation.skip_to_main_content')}
      </a>
    );
  }
};


// With Hooks

// function SkipToContent(props: Props) {
//   const { id } = props;
//   const [scroll, setScroll] = useState(false);
//   const aToScroll = document.getElementById(id).useCallback(() => {
//     setScroll(true);
//   }, []);

//   return (
//     <a 
//       className={css.skipToContent} 
//       onClick={aToScroll} 
//       href={`#${id}`}
//       >
//       {I18n.t('navigation.skip_to_main_content')}
//     </a>
//   );
// }

export default SkipToContent;