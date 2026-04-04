import { startFunc as buildBody } from './buildBody.js';

const render = ({ keys, data }) => {
    buildBody({ keys, inData: data });
};

export { render };