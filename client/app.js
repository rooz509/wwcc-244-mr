const ColorService = require('./services/color-service.js');

//routing
$(document).ready(() => {
   $('#btnSearch').on('click', () => {
        let txtSearch = $('#txtSearch').val();

        ColorService.searchColors(txtSearch)
            .then((results) => {
                const paletteTemplate = $('#paletteTemplate');
                const paletteHtml = paletteTemplate.html().trim();
                const output = $('#output');

                results.forEach((palette) => {

                    let $palette = $(paletteHtml);

                    //update palette img
                    let $image = $palette.find('.p-img');
                    $image.attr('src', palette.imageUrl);

                    //update palette name
                    let $name = $palette.find('.p-name');
                    $name.text(palette.title);

                    //update palette author
                    let $author = $palette.find('.p-author');
                    $author.text(palette.userName);

                    output.append($palette);
                });
            })
            .catch((err) => {
                alert('you effed it up, its all your fault');
                console.error('failed: ', err);
            })
   });
} );
        //let searchURL = `${colourLoversAPI}?keywords=${txtSearch}&jsonCallback=?`;

        // $.getJSON(searchURL, (results) => {
        //     console.log('results: ', results);
        //     const paletteTemplate = $('#paletteTemplate');
        //     const paletteHtml = paletteTemplate.html().trim();
        //     const output = $('#output');
        //
        //     results.forEach((palette) => {
        //
        //         let $palette = $(paletteHtml);
        //
        //         //update palette img
        //         let $image = $palette.find('.p-img');
        //         $image.attr('src', palette.imageUrl);
        //
        //         //update palette name
        //         let $name = $palette.find('.p-name');
        //         $name.text(palette.title);
        //
        //         //update palette author
        //         let $author = $palette.find('.p-author');
        //         $author.text(palette.userName);
        //
        //         output.append($palette);
        //     });
        // });
