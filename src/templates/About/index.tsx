import * as S from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          fugiat cum obcaecati alias, aliquam adipisci laudantium, ab eos
          numquam at velit unde ea tempore cumque minus reiciendis dolores
          deleniti consequuntur!
        </p>
      </S.Body>
    </S.Content>
  );
};

export default AboutTemplate;
