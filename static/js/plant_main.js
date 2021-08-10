$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/plant_model/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                
                $('#solution-div').text("SOLUTION:\n")
                if(data === 'Blight'){
                  //  alert('Disease is Sigatoka');
                    
                     $('#solution-div').append("There is no actual treatment for bacterial blight. \nPruning infected plant material is the first step in controlling the disease. \nRemove affected parts of the plant and toss them. \nDo not add them to the compost pile! Remember to keep tools clean and sanitize after pruning to avoid spreading the disease to other plant life.");
                     //$('#solution-div').attr('style','color:red;');
                }else if(data === 'Common Rust'){
                     $('#solution-div').append("Rusts are plant diseases caused by pathogenic fungi of the order Pucciniales.\nDespite putting in place disease preventive measures, rust will constantly develop if conditions are favorable. \nIn that regard, the best way to treat leaf rust disease in your fam is by proper and timely spraying of fungicides.");
                     //$('#solution-div').attr('style','color:green;');
                }else if(data === 'Gray Leaf Spot'){
                     $('#solution-div').append("Apply water early in the morning only when water is needed. \nAvoid evening waterings which keep the leaf surface wet for long periods. Catch and remove grass clippings where gray leaf spot is a problem. \nSeveral fungicides (See the section Chemical Controls for Turfgrass Diseases) are recommended for gray leaf spot control");
                     //$('#solution-div').attr('style','color:yellow;');
                }else if(data === 'Healthy'){
                     $('#solution-div').append("The best way to grow healthy plants is by providing water, nutrients, and the proper environmental conditions for your type of plant. \nResearch how much sunlight and space your plants need before planting. \nWater your plants when the soil is dry to the touch, and fertilize your plants around twice a week.");
                     //$('#solution-div').attr('style','color:darkgrey;');
                }
                console.log('Success!');
            },
        });
    });

});
