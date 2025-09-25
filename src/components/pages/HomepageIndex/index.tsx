import React from 'react';
import Container from '@/components/common/Container';
import Animation from '@/components/common/Animation';

export type HomepageIndexTypes = {};

const HomepageIndex = ({}: HomepageIndexTypes): React.ReactElement => {
    return (
        <Container>
            <h1 className="px-1.5">Hello World</h1>
            <Animation type="fade">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt dignissimos eaque est fugit
                    hic impedit, iste molestiae officiis repellat sunt, suscipit, vitae voluptate. Aperiam corporis ex
                    ipsum possimus voluptas!
                </p>
            </Animation>
        </Container>
    );
};

export default HomepageIndex;
