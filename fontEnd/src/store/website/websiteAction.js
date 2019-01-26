import websiteActionType from './websiteActionType';

import * as Http from '../../api/http';

export default {
    getConfig: () => {
        return dispatch => {
            Http.getWebsiteConfig().then(function(data) {
                let da = data.data,
                    info = null;

                if (da.result) {
                    info = da.data;
                }
                dispatch({
                    type: websiteActionType.GETCONFIG,
                    data: info
                });
            });
        }
    }
}
