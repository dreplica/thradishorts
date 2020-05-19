import React from 'react';

import { Container, Short,Copy } from './style';

interface Iprops {
    link: string;
}

export default function ShortedLinks(props: Iprops) {
    return (
        <Container>
            <Short>{props.link}</Short>
            <Copy>Copy</Copy>
        </Container>
    )
}
