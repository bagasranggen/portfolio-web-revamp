import React from 'react';

import { HOMEPAGE_BANNER } from '@/libs/mock';

import Container from '@/components/common/Container';
import HomepageBanner from '@/components/pages/HomepageIndex/HomepageBanner';

export type HomepageIndexTypes = {};

const HomepageIndex = ({}: HomepageIndexTypes): React.ReactElement => {
    return (
        <>
            <HomepageBanner {...HOMEPAGE_BANNER} />

            <Container
                as="section"
                className="my-10">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid assumenda atque
                    cupiditate dolor dolores eaque earum, eos et impedit ipsum necessitatibus nostrum praesentium
                    quaerat quasi quibusdam repellat rerum, saepe sit tempora veniam veritatis, voluptatum. Ad alias eum
                    laborum molestiae, quae soluta voluptates. Alias error ex fuga in incidunt, inventore ipsa
                    laudantium nisi perspiciatis sed! Aliquam consequatur culpa cumque delectus earum excepturi,
                    exercitationem explicabo facilis odit, quibusdam quidem quis quisquam repellat repellendus rerum sed
                    voluptates? Animi aperiam aspernatur at deleniti dignissimos doloremque eius eligendi eos fuga
                    inventore iste, magni nobis nulla odio placeat quae quibusdam quis quod ratione saepe sit, voluptate
                    voluptatem. Dolorum earum eveniet facere id ipsa iure iusto libero minima nam natus nisi odio odit
                    officia optio quam recusandae reiciendis saepe similique soluta suscipit ullam velit, veniam
                    voluptatibus! Cum, dolorum quibusdam. Ea inventore ipsam magnam nesciunt nostrum praesentium quam
                    quas quibusdam soluta voluptatem! Quisquam, suscipit, voluptates? A alias aperiam consequuntur
                    corporis impedit in laboriosam nobis officia quis recusandae repellat, ut, vitae voluptatibus.
                    Beatae consequatur doloribus enim eum numquam omnis qui reprehenderit velit veritatis voluptate?
                    Animi consequatur consequuntur eaque expedita harum ipsum? Accusamus aut dicta distinctio, esse
                    maiores molestiae optio perferendis recusandae soluta vel velit veritatis voluptatem, voluptatibus?
                    Aspernatur corporis hic ipsam magni placeat provident saepe.
                </p>
                <p>
                    Ad animi at atque dignissimos dolor dolore, dolorem error est eveniet explicabo facere facilis
                    fugiat harum illum laboriosam laborum laudantium molestiae necessitatibus nostrum numquam
                    perspiciatis, placeat porro quaerat quos sint sit tenetur ullam ut vero voluptate! Accusamus aliquam
                    assumenda atque deleniti dolorem eos facilis fugiat iste iusto magnam, nam numquam odio officia
                    placeat quae recusandae similique soluta ullam velit veniam! Amet debitis earum hic id illum neque
                    praesentium temporibus. Accusamus consequatur culpa cum delectus doloremque eveniet incidunt minus
                    natus nulla optio perferendis perspiciatis placeat, provident quia quidem quo sunt. Praesentium,
                    quidem, repudiandae.
                </p>
            </Container>
        </>
    );
};

export default HomepageIndex;
