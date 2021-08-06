import React from 'react';
import { Anchor } from '../../styles';

type Props = {
  link: string;
  text: string;
};

const Outlink = ({ link, text }: Props) => (
  <Anchor href={link} target='_blank'>{text}</Anchor>
);

export default Outlink;