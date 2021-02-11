import React, { FC, useState } from 'react';
import  {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps{}

const Commits: React.FC<Props> = ({ history, location, match }) => {
return (
    <h1>hey im commits page</h1>
);
}
export default Commits;
