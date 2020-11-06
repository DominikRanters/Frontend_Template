import { serverUrl } from './server-url';

const defaultSetting = {
    backend: true,
    actionName: '',
    download: false,
};

export default async function fetchDataFromApi(method, body, route, convertToJson, setting) {
    const settings = setting || defaultSetting;
    const header = {
        CacheControl: 'no-cache',
        Pragma: 'no-cache',
    };
    const sentData = {
        headers: header,
        method: method.toUpperCase(),
    };
    if (body) {
        header['Content-Type'] = 'application/json';
        sentData.body = JSON.stringify(body);
    }
    const url = settings.backend === false ? route : serverUrl + route;
    let returnData = null;

    await fetch(url, sentData)
    .then(async (response) => {
        try {
            let jsonResult = null;
            if (response.status === 200 || response.status === 201 || response.status === 202 || response.status === 204) {
                if (convertToJson && response.status !== 204) {
                    if (settings.download) {
                        await response.blob()
                        .then((blob) => {
                            jsonResult = blob;
                        });
                    }
                    else {
                        jsonResult = await response.json();
                    }
                }
            }
            else {
                if (settings.errorJsonStatusCodes && settings.errorJsonStatusCodes.length > 0) {
                    if (settings.errorJsonStatusCodes.find(code => code === response.status)) {
                        jsonResult = await response.json();
                    }
                }
            }
            returnData = {
                status: response.status,
                json: jsonResult,
            };
        }
        catch (ex) {
            console.log(`${efaultSetting.actionName} Failed \n ${ex}`);
        }
    }).catch((ex) => {
            console.log(`${efaultSetting.actionName} Failed \n ${ex}`);
    })
    return returnData;
}
