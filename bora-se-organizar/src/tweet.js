import React from 'react';

function Tweet({name, tweet}) {
    return (
        <div>
            <article class="fl ml3 mw5 mw6-ns hidden ba mv4">
                <h1 class="f4 bg-near-black white mv0 pv2 ph3">{name}</h1>
                <div class="pa3 bt">
                    <p class="f6 f5-ns lh-copy measure mv0">
                        {tweet}
                    </p>
                    <p>Number of likes</p>
                </div>
            </article>
        </div>
    );
}

export default Tweet;