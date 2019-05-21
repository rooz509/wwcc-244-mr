
module.exports = {
    getColors: getColors,
    searchColors: searchColors
};

const colourLoversAPI = 'http://www.colourlovers.com/api/colors';

function getColors()
{

}

function searchColors(query, filters = {})
{
    let queryParams = [];
    for(let key in filters)
    {
        queryParams.push(`${key}=${filters[key]}`);
    }
    queryParams.push(`keywords=${query}`);
    queryParams.push('jsonCallback=?');

    let searchURL = `${colourLoversAPI}?${queryParams.join('&')}`;

    return new Promise((resolve, reject) => {
        $.getJSON(searchURL, resolve)
            .fail((jqxhr, textStatus, error) => {
                reject(error);
            });
    });


}