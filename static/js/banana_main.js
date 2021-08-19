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
            url: '/banana_model/predict',
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

                //$('#solution-div').text("SOLUTION:\n");
                if(data === 'Sigatoka'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nSigatoka, also known as leaf spot, is caused by the fungus Mycospharella musicola. It is most commonly found in areas of poorly draining soil and areas of heavy dew. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nThe initial stages show small, pale spots on the leaves that gradually enlarge to about a half inch (1 cm.) in size and become purple/black with gray centers. <br/> If the whole plant is infected, it looks as if it has been burned. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nOrchard grade mineral oil can be sprayed on the banana every three weeks for a total of 12 applications to control Sigatoka. <br/>Commercial growers also use aerial spraying and systemic fungicide application to control the disease. \nSome banana cultivars also show some resistance to Sigatoka. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/3CKaPhl");
                     $('#solution-div').append("<br/>");//$('#solution-div').attr('style','color:red;');
                }else if(data === 'Pestalotiopsis'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nPestalotiopsis is the causative agent of a fungal disease of bananas, coconut and Date palms. <br/> The fungus causes leaf spots, petiole/rachis blights and sometimes at bud rot. <br/> Unlike other leaf spot and blight diseases, Pestalotiopsis palmarun attacks all parts of the leaf from the base to the tip. <br/>    Whereas most diseases only infect the leaf blade or the leaf petiole. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nIt has been shown that the fungus usually requires wounds to infect the plant and necessary for the fungus to develop. <br/> The first symptoms of Pestalotiopsis begin as very small yellow, brown or black discoloration of the leaves. <br/> The disease can be restricted to the leaf blade or may only appear on the petiole and rachis right away. <br/> Spots and discoloration areas can be smaller than 0.25 inches (6.4 mm) in size, but under optimal conditions can grow much larger eventually forming lesions. The spots will often turn a grayish color and will be outlined in black. <br/> Extreme wilting and a drying appearance on the leaves is also a major symptom of Pestalotiopsis. <br/> In mature plant, if the fungus is limited to only leaf spots, the disease may not be very serious and damaging. <br/> However, the fungus can severely affect juvenile plants if only a few leaf spots are present because they have yet to develop a trunk and only have a few leaves. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     /*$('#solution-div').append("\nPestalotiopsis is a genus of ascomycete fungi. <br/> Pestalotiopsis species are known as plant pathogens. <br/> Chemical treatments with Topsin 70 WDG and Topsin 500 SC. Prepare a solution of 0.05 – 0.1% (5 or 10 g per 10 litres of water) and spray each plant with 0.5 l (of the solution); Blight, produced by Phythophtora infestans."); */
                     $('#solution-div').append("\nWind and water movement easily disperses spores of Pestalotiopsis palmarum so sanitation and irrigation management can be proven to be critical in preventing the movement of the disease. <br/> Wounds and damage to the plant offer easy access for the fungus so the limitation of human and insect activity can be very beneficial. <br/> Limiting the length of time that the leaves are wet when exposed to high humidity levels also reduces the risk of inoculation. <br/> So eliminating overhead irrigation can prevent infection on leaves when there is favorable humid weather. <br/> Nutrient management is also very important in controlling Pestalotopsis palmarum. Nutrient deficiencies can cause chlorosis and necrosis of leaf tissue which then in turn creates a wound necessary for disease inoculation.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/37JC3WU ");
                     $('#solution-div').append("<br/>");//$('#solution-div').attr('style','color:green;');
                }else if(data === 'Cordana'){
                     $('#solution-div').text("ABOUT:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nCordana leaf spot is a disease of banana that, even though it is common worlwide, has generally little impact on production. <br/>It is caused by two Neocordana fungi that are often found as secondary invaders of leaf lesions caused by other fungi.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SYMPTOMS:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nThe most characteristic symptoms of the disease are on the leaf. They are large, pale brown, oval to fusiform necrotic lesions with pale grey concentric ring patterns, with a dark brown border surrounded by a bright yellow halo separating the lesion from the healthy leaf tissue. <br/>  Often, lesions coalesce into large necrotic patches. The leaves ultimately turn brown and  dry out. <br/> Invasion often occurs at leaf margin in plants weakened by senescence, adverse environmental conditions, nutritional deficiencies, wounds or infections cused by other pathogens. Symptoms are often seen around lesions caused by other pathogens. <br/> When the infection is associated with other diseases, e.g. with black leaf streak, the lesions are enlarged and become necrotic. This occurs especially under humid conditions.<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("SOLUTION:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nSpray 0.25% Kavach or 0.25% Indofil M-45 or 0.1% Tilt at 15 days interval. <br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/37GHSVc");
                     $('#solution-div').append("<br/>");
                     //$('#solution-div').attr('style','color:yellow;');
                }else if(data === 'Healthy'){
                     $('#solution-div').text("How to Grow a Banana Plant:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nLook up your area's temperature and humidity. Humidity should be at least 50% and as constant as possible. Ideal daytime temperatures are between 26–30ºC. <br/> Find the sunniest area in your yard. Banana plants grow best with 12 hours of direct, bright sunlight each day. <br/> Choose an area with good drainage. Bananas require a lot of water, but are prone to rotting if the water does not drain adequately. <br/> Allow sufficient space. While banana plants are technically herbs, they are often mistaken for trees for a reason. Some varieties and individuals can reach 7.6 m (25ft.) in height, although you should check the source of your banana plant or local banana growers for a more accurate estimate for your locale and variety. <br/> Consider growing it indoors. If your outdoor environment is inadequate, you'll need an indoor location with similar requirements (12 hours bright light and constant warm temperature and humidity).<br/> ");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("How to Plant a Banana Plant:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nSelect your planting material. You can acquire a banana sucker (small shoot from the base of a banana plant) from another grower or plant nursery, or buy one online. <br/> A banana rhizome or corm is the base from which suckers grow. Tissue cultures are produced in laboratories to create higher fruit yield. <br/> If you're transplanting a mature plant, prepare a hole appropriate to its size and have an assistant help you. <br/> Trim the plant. Cut off any dead, insect-eaten, rotting or discolored sections of the plant. If most of the plant is affected, dispose of it away from other plants and find another planting material. <br/> Dig a hole for each plant. Remove any plants or weeds that are growing on the planting site, then dig a circular hole 30cm wide and 30 cm deep (1ft. x 1 ft.) A larger hole will provide greater support for the plant but require more soil. <br/> Mostly fill the hole with loose, rich soil. Leave several centimeters (a few inches) of space at the top to encourage drainage. <br/> Place the plant upright in the new soil. The leaves should be pointing upward and the soil should cover the roots and 1.5–2.5cm (0.5–1 inches) of the base. Tamp the soil down to keep it in place but don't pack too firmly. <br/> ");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("How to Take Care of a Banana Plant:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nFertilize monthly a short distance from the trunk. <br/> Use store bought fertilizer, compost, manure, or a mixture of these. <br/> Add fertilizer immediately after planting in an even ring around the banana plant and repeat at monthly intervals.\n\nWater frequently but avoid overwatering. Underwatering is a common cause of banana plant death, but overwatering can cause the roots to rot.\n\nRemove dead leaves and banana plants and chop them up to place around the live plants. Other yard waste and wood ash can also be added to return nutrients to the soil.\n\nKeep an eye out for discolorations, dying leaves, and pests. If diseased plants are discovered, identify and treat them immediately, or uproot them. Insect pests should also be controlled as soon as they are found. Nitrogen and potassium deficiencies are the two most common nutritional problems for bananas, so learn to recognize the signs. <br/> De-sucker your plants. Once your plant is mature and has several suckers, remove all but one to improve fruit yield and plant health. <br/> Support the plant to avoid toppling of the plant due to strong wind or bunch weight. <br/> Provide overwinter care when the temperature during winter months falls too low for your plant <br/> ");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("How to Nuture and Harvest Fruit:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nWait for the purple flower to emerge. <br/> The typical banana plant flowers in 6-7 months under ideal conditions, but may take up to a year depending on the climate.<br/> Wait for the petals to withdraw and reveal bananas. This may take an additional 2 months or longer. Each connected cluster of bananas is called a hand and each individual banana, a finger. The entire stem containing several hands is called a bunch.\n\nOnce all bunches are revealed, remove the extra portions. The remaining flower bud and/or tiny extra banana hand are the sterile male portions of the plant. The hand should wither off on its own, but removing the flower bud will cause the plant to put more energy into growing fruit.\n\nCover the bunch with plastic covers. This will protect the fruit from insects and other dangers, but they must be open at both ends to allow adequate air and water flow. <br/> Harvest bananas when the flowers or plant are dying. The small flower at the tip of each banana will become dry and easily rub off, or the banana plant will lose most of its leaves. This is a good time to harvest the fruit. <br/> Cut the stem of the tree and prepare the next sucker. Remove the top half of the banana stem once you harvest the fruit. Desucker the base using the same process as you have while caring for your plant. <br/> ");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("Additonal Details:\n");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("\nBananas need a rich but well-drained soil. <br/> Soil similar to that in Hawaii – with some small rocks and lava sand – promotes the excellent drainage these plants require. <br/> Well-rotted manure, leaf mold or organic compost add humus and the important nutrients. Commercial cactus mix plus humus or compost is a good choice, or add 2/3 of this mix to 1/3 native soil. A banana likes plenty of water and will not tolerate drought. <br/> However, wet soil increases the risk of root rot. In summer, a banana plant – especially if outside or in a container – may need water at least every other day. <br/> In winter, when plants are semi-dormant, you may only need to water once a week or less. Check the soil daily – it should be evenly moist.");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("<br/>");
                     $('#solution-div').append("REFERENCE LINK: https://bit.ly/2XlZmnP");
                     $('#solution-div').append("<br/>");
                     //$('#solution-div').attr('style','color:darkgrey;');
                }

                console.log('Success!');
            },
        });
    });

});
