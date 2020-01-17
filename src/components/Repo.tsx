import React, { useEffect, useState } from 'react';

import { Version, Track } from '../models'
import { TableItem } from './TableItem'; 
import { AppConfig } from '../AppConfig';

export const Repo = ({...props}) => {
    const {song} = props;
    const [versions, setVersions] = useState<Version[]>([]);

    async function fetchVersions() {
        fetch(`${AppConfig.api}versions/read.php?id=${song.id}`)
        .then(res => res.json())
        .then((res) => setVersions([...res]))
        .catch(console.log)
    }

    useEffect(() => {
        fetchVersions();
    }, []);
    return (
        <div>
            <header>
                <div className="row">
                    <div className="col-sm-8">
                        <span className="title">{song.name}</span>
                        <div className="status">
                            {song.status}
                        </div>
                    </div>
                    <div className="add-song col-sm-4">
                        <button className="btn btn-outline-primary float-right" data-toggle="modal" data-target="#add-version">Add Version</button>
                    </div>
                </div>
            </header>
            <section>
                <ol className="commits">
                    {versions.map(v => {
                        return (
                            <TableItem data={v} key={v.id}/>
                        )
                    })}
                </ol>
            </section>
        </div>
    );
};

