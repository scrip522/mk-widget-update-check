import React from 'react';
import { useEffect, useState } from 'react';
import getMetadata from './getmetadata'

function Title() {
    const [metadata, setMetadata] = useState<{ id: string; name: string; gistId: string; latestVersion: number[] } | undefined>(undefined);
    useEffect(() => {
        const gottenMetadata = getMetadata();
        console.log(gottenMetadata);
        if (gottenMetadata && gottenMetadata.length > 0) {
            setMetadata(gottenMetadata[0]);
        } else {
            // エラー処理
            console.log("エラー処理");
        }
    }, []);

    if (metadata) {
        return <h1 className='center'>{metadata.name}</h1>;
    } else {
        return null;
    }
}

export default Title;