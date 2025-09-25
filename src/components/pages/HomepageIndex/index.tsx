import React from 'react';
import Container from '@/components/common/Container';

export type HomepageIndexTypes = {};

const HomepageIndex = ({}: HomepageIndexTypes): React.ReactElement => {
    return (
        <Container>
            <h1 className="px-1.5">Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt dignissimos eaque est fugit hic
                impedit, iste molestiae officiis repellat sunt, suscipit, vitae voluptate. Aperiam corporis ex ipsum
                possimus voluptas!
            </p>
        </Container>
    );
};

export default HomepageIndex;
