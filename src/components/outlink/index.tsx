import React from 'react';
import { Anchor } from '../../styles';
import { Props } from './types';

function Outlink({ link, text }: Props) {
    return (
        <Anchor href={link} target='_blank'>{text}</Anchor>
    );
}

export default Outlink;