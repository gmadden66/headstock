import * as React from 'react';
import styled from '@emotion/styled'
import { Version } from '../models'


interface TableItemProps {
    data: Version;
}

const playBounce = (track) => {
    console.log(track);
}

const TableItemContainer = styled.li`
    list-style: none;
    border-bottom: 1px solid;
`;
 
export const TableItem = ({...props}) => {
    const {data} = props;
    return (
        <TableItemContainer>
            <div className="table-list-cell info">
                <p><strong>Version {data.version}</strong> <small>added by <strong>{data.user}</strong> {data.dateAdded}</small></p>
                <div className="meta">
                    <p className="comment">{data.comment}</p>
                </div>
            </div>
            <div className="actions table-list-cell">
                <div className="btn-group" role="group" aria-label="Actions">
                    {data.bounceLink && (
                    <button type="button" className="btn btn-small btn-light" title="Stream Bounce" onClick={(data) => playBounce}><span>Play</span></button>
                    )}
                    {data.sessionLink && (
                    <a className="btn btn-light btn-small" href={`https://${data.sessionLink}`} target="_blank" rel="noopener noreferrer"><span className="oi oi-data-transfer-download"></span></a>
                    )}
                </div>
            </div>
        </TableItemContainer>
    )
};